import React from 'react'
import './blogcarousel.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Blogtanitim from '../component/blogtanitim';

export default function Blogcarousel() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <div className="blogcarousel">
            <div className="blogcarouselWrapper">
                <h1 className="blogcarouselTitle" style={{color:"grey"}}>
                    Blog
                </h1>
                <Carousel  responsive={responsive}>
                <div className="caro">
             <Blogtanitim></Blogtanitim>
                    </div> 
                    <div className="caro">
                    <Blogtanitim></Blogtanitim>
                    </div> 
                    <div className="caro">
                    <Blogtanitim></Blogtanitim>
                    </div> 
                    <div className="caro">
                    <Blogtanitim></Blogtanitim>
                    </div> 
                    <div className="caro">
                    <Blogtanitim></Blogtanitim>
                    </div> 
                    <div className="caro">
                    <Blogtanitim></Blogtanitim>
                    </div> 
                    <div className="caro">
                    <Blogtanitim></Blogtanitim>
                    </div> 
                    <div className="caro">
                    <Blogtanitim></Blogtanitim>
                    </div> 
                   </Carousel>
                <div className="blogcarouselCard">
             
                </div>
            </div>
            
        </div>
    )
}
