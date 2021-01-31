import React from 'react'
import Card from './Card'
import Header from './Header'
import pic1 from "./train1.png"
import pic2 from './images/train2.png'
import pic3 from './images/train3.png'
import pic4 from './images/train4.png'
import pic6 from './images/train6.png'
import pic5 from './images/trainlogo.png'
import "./Body.css"
import About from './About'
const Body=()=> {
    return (    
        <div className="body">
            <Header/>
            <div className="box">
                <div className="row boxes">
                    <div className="col-sm-12 col-md-4 col-xl-4 division">
                        <Card title="Train Schedule" src={pic1} link="/trainStatus" desc="Enter your Train no and getyour train's Route details." />
                    </div>
                    <div className="col-sm-12 col-md-4 col-xl-4 division">
                        <Card title="Rajdhani Train" src={pic2} link="/rajdhani" desc="Check all the Rajdhani Trains(Top 30)." />
                    </div>
                    <div className="col-sm-12 col-md-4 col-xl-4 division">
                        <Card title="Special Trains" src={pic3} link="/specialTrains" desc="Check all the Special Trains(Top 30)." />
                    </div>
                    <div className="col-sm-12 col-md-4 col-xl-4 division">
                        <Card title="Superfast Trains" src={pic4} link="/superfast" desc="Check all the Superfast Trains(Top 30)." />
                    </div>
                    <div className="col-sm-12 col-md-4 col-xl-4 division">
                        <Card title="Coatch Position" src={pic5} link="/coachEnquiry" desc="Enter you Train Number and get the coaches position" />
                    </div>
                    <div className="col-sm-12 col-md-4 col-xl-4 division">
                        <Card title="Train Schedule" src={pic6} link="/trainStatus" desc="visit and get to know about any train schedule ." />
                    </div>
                    
                </div>
            </div>
            <About/>
        </div>
    )
}

export default Body
