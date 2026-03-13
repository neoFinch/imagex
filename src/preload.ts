// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electron', {
  processImage: (imagePath: string) => {
    // console.log('preload : ', imagePath);
    return ipcRenderer.invoke('process-image', imagePath);
  },
  onImageProcessed: (callback) => {
    return ipcRenderer.on('image-processed', (event, processedImagePath) => callback(processedImagePath));
  }
}); 