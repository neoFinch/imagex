import React from "react"
 
export const Preview = ( {src } : {src: string }) => {
  return (
    <div className="rounded-md overflow-hidden w-[80vw] flex justify-center items-center">
      <img src={src} />
    </div>
  )
}