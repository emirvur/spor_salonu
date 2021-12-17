import React from 'react'
import './signupcontainer.css'

export default function Signupcontainer() {
        return (
            <div className='signupcontainer'>
               <div className="signup-title">
    Üye ol
               </div>
               <form className='signupform'>
               <input type="text" name="ad" placeholder="Ad.."/>
      <input type="text" name="soyad" placeholder="Soyad.."/>
      <input type="text" name="telefon" placeholder="Telefon.."/>
      
               <div class="dropdown-sign">
  <button class="dropbtn-sign">Üye Tipi</button>
  <div class="dropdown-content-sign">
  <a href="#">Üye Tipi 1</a>
  <a href="#">Üye Tipi 2</a>
  <a href="#">Üye Tipi 3</a>
  <a href="#">Üye Tipi 4</a>
  <a href="#">Üye Tipi 5</a>
  </div>
</div>
            
      <input type="text" name="email" placeholder="E-mail.."/>
      <input type="text" name="sifre" placeholder="Sifre.."/>
      <input type="text" name="sifredogrula" placeholder="Sifre dogrula.."/>
    </form>
    <div className="islemler">
    <button className="button button3">
                       Üye Ol
                  </button>
                  <a href="default.asp" className="soru">
                      Zaten üye misin? Giriş Yap
                  </a>
    </div>
    
            </div>
        )
    
}
