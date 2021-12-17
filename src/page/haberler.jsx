import React from 'react'
import Habercard from '../component/habercard'
import './haberler.css'
export default function Haberler() {
    return (
        <div className='haberler'>
            <div className="haberlerwrapper">
                <h2 className='haberlertitle'>
                Spor Hakkında Haberler
                </h2>
                <div className="haberlerdesc">
                This is a Paragraph. Click on "Edit Text" or double click on the text box to start editing the content and make sure to add any relevant details or information that you want to share with your visitors.
                </div>
            </div>
            <Habercard></Habercard>
            <Habercard></Habercard>
            <Habercard></Habercard>
            <Habercard></Habercard>
        </div>
    )
}
