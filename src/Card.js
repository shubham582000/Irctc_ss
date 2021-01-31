import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom'
const Card=({title,src,link,desc})=> {
    return (
        <div className="cards">
            <div className="card" style={{width: "15rem",marginRight:"20%"}}>
                <img src={src} className="card-img-top" alt="info"/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <Link to={link} className="btn btn-primary">Search </Link>
                </div>
            </div>
        </div>
    )
}

export default Card;
