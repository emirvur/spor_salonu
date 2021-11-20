import React from 'react'
import RightBar from '../../components/trash/RightBar/RightBar'
import Posts from '../../components/Posts/Posts'
import "./home.css"
export default function Home() {
    return (
        <div className="home">
            <Posts className="homewrapper"></Posts>
           <RightBar className="rightbarwrapper"></RightBar>
        </div>
    )
}
