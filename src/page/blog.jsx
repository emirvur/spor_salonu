import React from 'react'
import Blogcard from '../component/blogcard'
import './blog.css'

export default function Blog() {
    return (
        <div className='blog'>
            <div className="blogwrapper">
                <div className="blogbas">
                <div className="blogheader">
                    Tüm Yazılar
                </div>
                <div className="blogsearch">
                <form className="blogara" >
  <input type="text3" placeholder="Ara.." name="ara1"/>
</form>
                </div>
                </div>
              
                <div className="bloglist">
                <Blogcard>

</Blogcard>
<Blogcard>

</Blogcard>
<Blogcard>

</Blogcard>
<Blogcard>

</Blogcard>
                </div>
          

            </div>
            
        </div>
    )
}
