import React from 'react'
import './sallonMail.css'

export default function SallonMail() {
    return (
        <div className="sallonMail">
            <h1 className="sallontitle">
                Salona Mail At
            </h1>
            <div className="sallonform">
                <div className="firstadress">
                <div className="mailadress">
                500 Terry Francois Street San Francisco, CA  94158 info@mysite.com Tel: 123-456-7890 Fax: 123-456-7890
                </div>
             
                </div>
             
             <div className="formdetailWrapper">
             <div className="formdetail ">
             <label className="labelalign" >Enter Your Name : </label>
                <form>
                    <input type="text">
                    </input>
                </form>
                <label className="labelalign">Enter Your E-mail : </label>
                <form>
                    <input type="text">
                    </input>
                </form>
                <label className="labelalign">Enter Your Sallon : </label>
                <form>
                    <input type="text">
                    </input>
                </form>

                </div>
          
                <div className="formtextarea">
                <form >
      
                    <textarea placeholder="Enter Your Message" rows="6" cols="50">

                    </textarea>
                </form>
                <button className="submit">
                    Submit
                </button>
                </div>
            
             </div>
             
          
            </div>
            
        </div>
    )
}
