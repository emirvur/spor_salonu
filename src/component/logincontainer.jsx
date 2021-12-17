import React from 'react'
import './logincontainer.css'

export default function Logincontainer() {
    return (
        <div className='logincontainer'>
           <div className="log-title">
Giriş Yap
           </div>
           <form>
  <input type="text" name="email" placeholder="E-mail.."/>
  <input type="text" name="sifre" placeholder="Sifre.."/>
</form>
<div className="islemler">
<button className="button button3">
                   Giriş Yap
              </button>
              <a href="default.asp" className="soru">
                  Kayıtlı değil misiniz? Hemen üye olun!
              </a>
</div>

        </div>
    )
}
