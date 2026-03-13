import React from "react";
import { FileUpload } from "./atoms/file-upload";
import { Preview } from "./atoms/preview";

export default function Projects() {

  const [src, setSrc] = React.useState<string>('')
  const [fileName, setFileName] = React.useState<string>('')

  const handleOnChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('changed', e.target.files[0])
    const file = e.target.files[0]
    
    

    const reader = new FileReader()
    
    reader.onloadend = async () => {
      
      setFileName(file.name)
      
      let filePath = await window?.electron.processImage(reader.result as string)
      console.log('filepath : ', filePath);
      setSrc(filePath)
    }
    reader?.readAsDataURL(file)

  }

  return (
    <>
      {/* <h1 className="flex justify-center text-white text-2xl p-6 uppercase font-bold"> 
        Edit your image
      </h1> */}
      <div className="flex flex-col items-center gap-4">
        <FileUpload
          label='Upload Image'
          onChange={handleOnChange}
        />
        {fileName && (
          <h2 className="text-white">Editing - {fileName}</h2>
        )}
        <Preview src={'app://' + src} />
      </div>
    </>
  );
}
