import React from 'react'
import DetailCard from '../component/detailCard'
import Infocard from '../component/infocard'
import './sallondetail.css'

export default function SallonDetail() {
    return (
        <div className="sallondetail">
            <div className="detailtitle">
                SPOR SALONLARI
            </div>
            <div className="detaililce">
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
  <a href="#">VÜcut Geliştirme</a>
  </div>
</div>
               </div>
            </div>
            <div className="detailwrapper">
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
