import React,{useEffect,useState} from 'react'
import axios from './axios';
import requests from './request'
import './special.css'
const Superfast=()=> {

    const [resp,setResponse]=useState([])
    const fetchUrl=requests.fetchSuperfast;
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setResponse(request.data.Trains);
            return request;
        }
        fetchData();
        

    },[fetchUrl])

    return (
        <div className="specialName">
            <div className="container">
            <div className="divi" style={{backgroundColor:"green",display:"flex",width:"40%" ,textAlign:"center",margin:"10px",border:"solid black 6px",borderRadius:"20px"}} ><h1 style={{color:"white",padding:"4px",textAlign:"center"}} >Superfast Trains</h1>
</div>
                <div className="divi papa" style={{backgroundColor:"red",display:"flex",width:"40%" ,textAlign:"center",margin:"10px",border:"solid black 6px",borderRadius:"20px"}} ><p style={{color:"white",padding:"4px"}} >Loading Data Depends Upon Your Internet Connection .</p>
</div>
                
                <div className="container">
                <table class="table p-5 hello success">
                    <thead>
                        <tr>
                        <th scope="col">Train No.</th>
                        <th scope="col">Train Name</th>
                        <th scope="col">Destination</th>
                        <th scope="col">Source</th>
                        </tr>
                    </thead>
                    <tbody>
                        { resp?.slice(0,30).map((data,_)=>{
                            
                            return(
                                <tr>
                                <th scope="row">{data.TrainNumber}</th>
                                <td>{data.TrainName}</td>
                                <td>{data.Destination}</td>
                                <td>{data.Source}</td>
                            </tr>
                            )
                        })}
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Superfast
