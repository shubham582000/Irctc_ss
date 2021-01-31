import React from 'react'
import pic4 from './images/train4.png'
import pic6 from './images/train6.png'
import pic5 from './images/trainlogo.png'
import './Crousel.css'
const Crousel=() =>{
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide cro" data-bs-ride="carousel" data-interval="500">
            <div className="carousel-inner">
                <div className="carousel-item active ">
                <img src={pic4} className="d-block w-100 cro_img"  alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={pic6} className="d-block w-100 cro_img" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={pic5} className="d-block w-100 cro_img" alt="..."/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </a>
            </div>
        </div>
    )
}

export default Crousel
