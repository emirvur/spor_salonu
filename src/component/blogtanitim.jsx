import React from 'react'
import './blogtanitim.css'
export default function Blogtanitim() {
    return (
        <div className='blogtanitim'>
            <div className="blogtanitimwrapper">
                <div className="tanitimphoto">
                    
                </div>
             

                </div>
                <div className="tanitimtext" style={{"font-weight":"bold"}}>
                I'm an image title.
                </div>
                <div className="tanitimtext">
                Describe your image here
                </div>
             
                <button className="tanitimbuttongit">Bloga Git</button>
                <button className="tanitimbuttonyukari">Yukarı Dön</button>
        
        </div>
    )
}
