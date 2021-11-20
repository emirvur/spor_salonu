import React from 'react'
import './sallon.css'
import SallonCard from './sallonCard'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Sallon() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <div className="sallon">
            <div className="sallonWrapper">
                <h1 className="sallonTitle">
                    Salonlar
                </h1>
                <Carousel  responsive={responsive}>
                <div className="caro">
               <SallonCard></SallonCard>
                    </div> 
                    <div className="caro">
                    <SallonCard></SallonCard>
                    </div> 
                    <div className="caro">
                    <SallonCard></SallonCard>
                    </div> 
                    <div className="caro">
                    <SallonCard></SallonCard>
                    </div> 
                    <div className="caro">
               <SallonCard></SallonCard>
                    </div> 
                    <div className="caro">
                    <SallonCard></SallonCard>
                    </div> 
                    <div className="caro">
                    <SallonCard></SallonCard>
                    </div> 
                    <div className="caro">
                    <SallonCard></SallonCard>
                    </div> 
                   </Carousel>
                <div className="sallonCard">
             
                </div>
            </div>
            
        </div>
    )
}
