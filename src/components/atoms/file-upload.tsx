import React from "react"

interface FileUploadProps {
  label: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export const FileUpload = ({ label, onChange }: FileUploadProps) => {
  return (
    <div className=" text-white flex justify-center flex-col bg-black bg-opacity-30 rounded-lg gap-4 border-1 border-white shadow-lg">
      <label htmlFor="file-upload" className="uppercase p-4 cursor-pointer">{label}</label>
      <input id={'file-upload'} className=" hidden" type="file" onChange={onChange} />
    </div>
  )
}