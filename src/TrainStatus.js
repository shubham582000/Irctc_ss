
import React,{useState,useEffect} from 'react'
import './TrainStatus.css'
import M from 'materialize-css';
import pic2 from './images/train2.png'
const TrainStatus=()=>{
    const [trainNumber,setTrainNumber]=useState("")
    const [resp,setResponse]=useState({})
    const [trueValue,setTrue]=useState(false);
    const [arr,setArr]=useState([])
    const [div,setDiv]=useState(false)
    const [wrong,setWrong]=useState(false)
    const submit=(e)=>{
        e.preventDefault()
        M.toast({html:"Invalid email",classes:"#c62828 red darken-3"});
        setDiv(true)
        const val=1
        console.log(trainNumber)
            
                const url=`https://indianrailapi.com/api/v2/TrainSchedule/apikey/34cc482d4de3166c1a80eac6956ad676/TrainNumber/${trainNumber}/`
                const respo=fetch(url).then(response=>response.json()).then(data => setResponse(data))
                .catch(err => console.log(err,"error"));
                const vala=resp.Route
                if(vala?.length==0){
                    window.alert("Wrong Train Number")
                }
                const value=resp.Route
                console.log(value)
                if(value && value.length>0){
                    setTrue(true);
                    setArr(value)
                }else{
                    setTrue(false)
                }
                if(val!=1){
                    setDiv(false)
                }
                
                console.log(arr,"array")
    }

    return (
        <div className="TrainStatus">
            <div className="container">
                {(div===true && trainNumber.length===5)?<div className="divi papa" style={{backgroundColor:"red",display:"flex" ,margin:"10px",width:"70%",border:"solid black 6px",borderRadius:"20px"}} ><p style={{color:"white",padding:"4px"}}>After tapping on Search Button,If it takes more than 5 seconds for searching please once again tap the Search button</p>
</div>:" "}
                <div className="jumbotron field">
                    <div className="status__block">
                        <div className="status__title">
                            <h3>Check Your train status</h3>
                        </div>
                        <div className="inputField">
                        <form onSubmit={submit}>
                            <input  type="number" value={trainNumber} onChange={(e)=>setTrainNumber(e.target.value)} placeholder="Train Number"/>
                            <button disabled={!(trainNumber.length===5)} type="submit"  className="btn btn-dark my-1 mx-2">Search Train</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
            
            {(trueValue===true )?<div className="tableRows my-5">
                <div className="container">
                    <table className="table table-dark table-hover hello">
                        <thead>
                            <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">Station</th>
                            <th scope="col">Arr. Time</th>
                            <th scope="col">Dep. Time</th>
                            </tr>
                        </thead>
                        <tbody>
                        {arr?.map(val=>{
                            
                            return(
                            <tr>
                                <th scope="row">{val.SerialNo}</th>
                                <td>{val.StationName}</td>
                                <td>{val.ArrivalTime}</td>
                                <td>{val.DepartureTime}</td>
                            </tr>
                            )
                        })}
                            
                            
                        </tbody>
                    </table>
                </div>
            </div>:<div className=" justify-content-between" >
            <img src={pic2} className="mx-5 my-5  justify-content-center" style={{width:"10rem"}} alt=""/><br/>
            <h1 className="text-center">Find Your Train</h1>
            {(arr?.length==0 && wrong===true)?<div><h1>Incorrect Train Number</h1></div>:" "}
            </div> }
        </div>
    )
}

export default TrainStatus
