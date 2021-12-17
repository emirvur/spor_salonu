import React from 'react'
import About from '../component/about'

import SallonMail from '../component/sallonMail'
import Sallon from '../component/sallon'
import 'react-multi-carousel/lib/styles.css';
import './sporcuhome.css'
import Introductionwithhesapsporcu from '../component/introductionwithhesapsporcu'
import Blogcarousel from './blogcarousel';
export default function Sporcuhome() {
    return (
        <div>
        <Introductionwithhesapsporcu>
            
        </Introductionwithhesapsporcu>
        <About></About>

        <Sallon></Sallon>
        <Blogcarousel></Blogcarousel>
      
        <SallonMail></SallonMail>
        </div>
    )
}
