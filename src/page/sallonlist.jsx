import React from 'react'

import Infocard from '../component/infocard'
import './sallonlist.css'

export default function Sallonlist() {
    return (
        <div className="sallonlist">
            <div className="listtitle">
                SPOR SALONLARI
            </div>
            <div className="listilce">
               <div className="ilceadfiltre">
               <div class="dropdown">
  <button class="dropbtn">İlçeler</button>
  <div class="dropdown-content">
  <a href="#">İlçe 1</a>
  <a href="#">İlçe 2</a>
  <a href="#">İlçe 3</a>
  <a href="#">İlçe 4</a>
  <a href="#">İlçe 5</a>
  </div>
</div>
               </div>
               <div className="turfiltre">
               <div class="dropdown">
  <button class="dropbtn">Türler</button>
  <div class="dropdown-content">
  <a href="#">Fitness</a>
  <a href="#">Yoga</a>
  <a href="#">Vücut Geliştirme</a>
  </div>
</div>
               </div>
            </div>
            <div className="listwrapper">
            <Infocard></Infocard>
            <Infocard></Infocard>
            <Infocard></Infocard>
            <Infocard></Infocard>
            <Infocard></Infocard>
            <Infocard></Infocard>
            <Infocard></Infocard>
            <Infocard></Infocard>
            <Infocard></Infocard>
            </div>      
    
        </div>
    )
}
