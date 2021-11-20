import React from 'react'
import './infocard.css'

export default function Infocard() {
    return (
        <div className="infocard">
            <div className="infophoto">
            <img src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="infophot" className="infophot"/>
            </div>
            <div className="infotitle">
            Spor solonu 1
            </div>
            <div className="infodesc">
            This is your Team Member description. Use this space to write a brief description of this person’s role and responsibilities, or add a short bio.
            </div>
            <div className="infofooter">
              <button className="button button2">
                   Düğme
              </button>
            </div>
        </div>
    )
}
