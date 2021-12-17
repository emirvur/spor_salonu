import React from 'react'
import './blogyaz.css'

export default function Blogyaz() {
    return (
        <div className='blogyaz'>
            <div className="blogyazwrapper">
                <div className="yaztext">
                    Blog dosyanı seç
                    <span> <a style={{"text-decoration":"underline",color:"blue"}}>Browse
                        </a></span>
                </div>
                <div className="yuklecontainer">
                <i class="fas fa-file"></i>
                </div>
             
                <button className="yazbuton">Yükle</button>
           
            </div>
        </div>
    )
}
