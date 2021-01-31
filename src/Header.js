import React from 'react'
import Crousel from './Crousel'
import './Header.css'
import pic from './images/train2.png'
const Header=()=> {
    return (
        
        
            <div className="header">
            <Crousel/>
                <div className="container ">
                    <div className="row justify-content-center">
                        <div className="col-sm-12 col-md-6 col-xl-6 text-center header__title">
                            <h1>Welcome to our IRCTC Clone website. In this website you can get to know about any train's
                                . Weather it is PNR No. Enquiry, Seat Availability ,Running Status of Train. </h1>
                        </div>
                        <div className="col-sm-12 col-md-6 col-xl-6 image ">
                            <img src={pic} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="outer my-3">
                    <div className="footer1">
                        <div className="footer__title">
                            <h1>Visit here:</h1>
                        </div>
                    </div>
                </div>

            </div>
        
    )
}

                        
export default Header

        