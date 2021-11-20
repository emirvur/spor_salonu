import React from 'react'
import Xcontainer from '../component/xcontainer'
import './sallonx.css'
export default function Sallonx() {
    return (
        <div className="sallonx">
            <div className="xsalphoto">
              <div className="xintro">
              <div className="xname">Spor Salonu İsim</div>
                  <div className="xadres">Adres</div>
                  <div className="xbut">
                  <button className="button button2">Üye ol/Randevu Al</button>
                  </div>
                
              </div>

            </div>
    <h2 className="xtitle">
            Spor Salonu Resimleri       
        </h2>
        <div className="contaiwrapper">
        <Xcontainer></Xcontainer>
        <Xcontainer></Xcontainer>
        <Xcontainer></Xcontainer>
        <Xcontainer></Xcontainer>
        </div>
        <h2 className="xtitle">
        Spor Salonu Hakkında İsmi
        </h2>
        <div className="xsalloninfo">
            Spor Salonu hakkında Bilgi
        </div>
        <div className="xsalloninfo">
            Spor Salonu hakkında Bilgi
        </div>
        <div className="xsalloninfo">
            Spor Salonu hakkında Bilgi
        </div>
       
        </div>
    
    )
}
