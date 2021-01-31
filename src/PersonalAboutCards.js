import React from 'react';
import './aboutCard.css';

const PersonalAboutCards=({name,pic,details,contact,college})=> {
    return (
        <div className="aboutCard">
            <div className="card mb-3" >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img className="imgbaba"  src={pic} alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h2 className="card-title">{name}</h2>
                                <p className="card-text">{details}</p>
                                <p className="card-text">Contact No:<small className="text-muted">{contact}</small></p>
                                <p className="card-text">{college}</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default PersonalAboutCards
