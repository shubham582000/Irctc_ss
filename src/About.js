import React from 'react';
import './About.css';
import Card from './Card'
import details from './details'

import PersonalAboutCards from './PersonalAboutCards'
const About=()=>{
    
    
    
    return (
        <div className="about">
            <h1>About Us.</h1>
            <hr/>
            <div className="cardsss">
                <div class="card text-white bg-dark mb-3" style={{maxWidth: "100rem",paddingBottom:"1rem"}}>
                    <div class="card-header">Info</div>
                    <div class="card-body">
                        <h5 class="card-title">Details</h5>
                        <p class="card-text">We the group of four students have designed a IRCTC website Clone.This whole project is designed using React js 
                        ,JSX ,HTML,Bootstrap,CSS,Java Script. The Api is fetch from indianrailapi.com .</p>
                    </div>
                </div>
                <div className="row" style={{marginTop:"5rem"}}>
                {
                    details.map(item=>{
                        return (
                            <div className="col-sm-12 col-md-6 col-xl-6 raw">
                                <PersonalAboutCards name={item.name} pic={item.pic} details={item.details} contact={item.contact} college={item.college} />
                            </div>
                        )
                    })
                }
                    
                    
                </div>
                
                
            </div>
        </div>
    )
}

export default About
