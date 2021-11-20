import React from 'react'
import About from '../component/about'
import Introduction from '../component/introduction'
import SallonMail from '../component/sallonMail'
import Sallon from '../component/sallon'
import 'react-multi-carousel/lib/styles.css';
import './home.css'
export default function Home() {

    return (
        <div>
        <Introduction>
            
        </Introduction>
        <About></About>

        <Sallon></Sallon>
      
        <SallonMail></SallonMail>
        </div>
    )
}
