import React,{useState,useEffect} from 'react'
import './TrainStatus.css'

import pic2 from './images/train2.png'

const Coach=()=> {
    const [trainNumber,setTrainNumber]=useState("")
    const [resp,setResponse]=useState({})
    const [trueValue,setTrue]=useState(false);
    const [arr,setArr]=useState([])
    const [div,setDiv]=useState(false)

    const submit=(e)=>{
        e.preventDefault()
        
        setDiv(true)
        console.log(trainNumber)
            
                const url=`https://indianrailapi.com/api/v2/CoachPosition/apikey/34cc482d4de3166c1a80eac6956ad676/TrainNumber/${trainNumber}`
                const respo=fetch(url).then(response=>response.json()).then(data => setResponse(data))
                .catch(err => console.log(err,"error"));
                const value=resp.Coaches
                console.log(value)
                if(value && value.length>0){
                    setTrue(true);
                    setArr(value)
                }else{
                    setTrue(false)
                }
                console.log(arr,"array")
    }

    return (
        <div className="TrainStatus">
            <div className="container">
            {(div===true && trainNumber.length===5)?<div className="divi papa" style={{backgroundColor:"red",display:"flex" ,margin:"10px",width:"70%",border:"solid black 6px",borderRadius:"20px"}} ><p style={{color:"white",padding:"4px"}}>After tapping on Search Button,If it takes more than 5 seconds for searching please once again tap the Search button</p>
</div>:" "}
                <div className="jumbotron">
                    <div className="status__block">
                        <div className="status__title">
                            <h3>Check Your Coach Position</h3>
                        </div>
                        <div className="inputField">
                        <form onSubmit={submit}>
                            <input  type="number" value={trainNumber} onChange={(e)=>setTrainNumber(e.target.value)} placeholder="Train Number"/>
                            <button disabled={!(trainNumber.length===5)} type="submit" className="btn btn-dark my-1 mx-2">Search Train</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
            
            {trueValue===true?<div className="tableRows my-5">
                <div className="container">
                    <table className="table table-dark table-hover">
                        <thead>
                            <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">Code</th>
                            <th scope="col">Name</th>
                            <th scope="col">Number</th>
                            </tr>
                        </thead>
                        <tbody>
                        {arr?.map(val=>{
                            return(
                            <tr>
                                <th scope="row">{val.SerialNo}</th>
                                <td>{val.Code}</td>
                                <td>{val.Name}</td>
                                <td>{val.Number}</td>
                            </tr>
                            )
                        })}
                            
                            
                        </tbody>
                    </table>
                </div>
            </div>:<div>
            <img src={pic2} className="mx-5 my-5" style={{width:"100px"}} alt=""/>
            <h1>Find Your Train</h1>
            </div> }
        </div>
    )
}

export default Coach
