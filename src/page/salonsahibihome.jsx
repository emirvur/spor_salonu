import React from 'react'
import About from '../component/about'

import SallonMail from '../component/sallonMail'
import Sallon from '../component/sallon'
import 'react-multi-carousel/lib/styles.css';
import './sporcuhome.css'

import Introductionsalonsahibi from '../component/introductionsalonsahibi'
import Blogcarousel from './blogcarousel';
export default function Salonsahibihome() {
    return (
        <div>
        <Introductionsalonsahibi>
            
        </Introductionsalonsahibi>
        <About></About>

        <Sallon></Sallon>
        <Blogcarousel></Blogcarousel>
      
        <SallonMail></SallonMail>
        </div>
    )
}
