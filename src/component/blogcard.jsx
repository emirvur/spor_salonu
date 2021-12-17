import React from 'react'
import './blogcard.css'
export default function Blogcard() {
    return (
        <div className='blogcard'>
           <div className="blogphoto">
              
           </div>
           <div className="blogtext">
               <div className="blogtext-container">
                   <div className="usercontainer">
                       <div className="userwrapper">
                       <img src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Avatar" className="avatar"></img>
                       <div className="userinfo">
                       <div className="textuser">
                       Salih Diril
                   </div>
                   <div className="usertarih">
                       7 Kasım - 1 dk
                   </div>
                       </div>
                       </div>
             
                    
                       <div className="dot">
                       <div class="dropdown-dot">
                       <i class="fa fa-ellipsis-h"></i>
  <div class="dropdown-content-dot">
  <a href="#">Yazıyı Takip Et</a>
  <a href="#">Yazıyı Düzenle</a>
  <a href="#">Yazıyı Paylaş</a>
  <a href="#">Akışa Pin Et</a>
  <a href="#">Yorumlara Kapat</a>
  <a href="#">Çöpe Taşı</a>
  </div>
</div>
                      
                       </div>
                
                   </div>
               
                   <h3 className="textheader">
Blogunuzu Canlı Siteden Yönetin
                   </h3>
                   <div className="textdesc">
                   Blogunuzu daha hızlıca ve kolayca yönetmeniz için bazı değişiklikler yaptık! Öncelikle sitenizi yayınlayın sonra direkt olarak canlı...
                   </div>
                
                  <hr/>
                  <div className="bloginfo">
                    <div className="infowrapper">
                    <div className="blogview">
                          1 Görüntüleme
                      </div>
                      <div className="blogyorum">
                          0 Yorum
                      </div>
                    </div>
                    <i className="fas fa-heart" style={{color:"red"}}></i>
                  </div>
               </div>
           </div>
        </div>
    )
}
