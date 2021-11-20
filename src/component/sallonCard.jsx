import React from 'react'
import './sallonCard.css'
import { Link } from "react-router-dom";
export default function SallonCard() {
    return (
        <div className="salloncard">

            <div className="cardAvatar">
            <img src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Avatar" className="avatar"/>
            </div>
            <div className="cardtitle">
                Spor Salon 1
            </div>
            <div className="cardDesc">
            Spor Salon bilgileri spor salon bilgileri spor salon bilgiler spor salon bilgiler spor salon bilgiler spor salon bilgiler

Spor Salon bilgileri spor salon bilgiler spor salon bilgiler spor salon bilgiler spor salon bilgiler
            </div>
            <div className="cardbuttonWrapper">
            <div className="cardButton">
                <button className="button button2">            <Link className="link1" to="/xsal">
              Salona git
            </Link></button>
            </div>
            </div>
        
            

        </div>
    )
}
