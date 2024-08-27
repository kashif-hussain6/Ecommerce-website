
import React from 'react'
import LightButton from "../../assets/website/Light-mode-button.png"
// import DarkButton from "../../assets/website/Dark-mode-button.png"


function DarkMode() {
  return (
    <div>
        <img src={LightButton}  alt="" className={`w-12 cursor-pointer`} />
    </div>
  )
}   

export default DarkMode
