import React from 'react'
import './introduction.css'

export default function Introduction() {
    return (
        <div className="intro">
            <div className="introwrapper">
               <div className="title">
               E-SPORUM
               </div>
               <div className="photo">
                  <div className="phototitle">
                      SPOR YAPACAGINIZ YERI BULMAK ARTIK COK KOLAY
                  </div>
                  <div class="search-container">
    <form className="searchform" >
      <input type="text" placeholder="Ara.." name="search"></input>
      <button type="submit"><i class="fa fa-search"></i></button>
    </form>
    
  </div>
                  <div className="photodesc">
                  I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
                  </div>
                  <div className="photobutton">
                     <div className="buttonuye">
                     <button className="button button2">
                          Üye girişi
                      </button>
                     </div>
                     <div className="buttonsalon">
                     <button className="button button2">
                          Salon girişi
                      </button>
                     </div>
                  </div>
               </div>
            </div>
      
        </div>
    )
}
