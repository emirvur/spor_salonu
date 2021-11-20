import React from 'react'
import About from '../component/about'
import Introduction from '../component/introduction'
import SallonMail from '../component/sallonMail'
import Salon from '../component/salon'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './home.css'
export default function Home() {

    return (
        <div>
        <Introduction>
            
        </Introduction>
        <About></About>

        <Salon></Salon>
      
        <SallonMail></SallonMail>
        </div>
    )
}
