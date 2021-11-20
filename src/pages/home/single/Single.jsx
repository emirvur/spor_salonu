import React from 'react'
import RightBar from '../../../components/trash/RightBar/RightBar'
import "./single.css"

export default function Single({post}) {
    return (
        <div className="single">
            <div className="singlewrapper">
            <div className="singleinfo">
                <div className="singletitle">
                    Title
                </div>
                <div className="singledate">
                    <h4>Yazar:Emirhan</h4> 
                    <h4>Tarih</h4>
                </div>
            </div>
            <div className="singlecontent">
                contett
            </div>
            </div>
           <RightBar></RightBar>

        </div>
    )
}
