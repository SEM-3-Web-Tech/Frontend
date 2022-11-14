import React from "react"
import './tailwind.css'


var str="Axis Bank Ltd. 900.25 +8.96  ICICI Bank Ltd. 907.15 +2.13  Hindustan Unilever Ltd. 2,655.05 +2.11  Kotak Mahindra Bank Ltd. 1,902.90 +2.05   Oil And Natural Gas Corporation Ltd. 131.50 +1.39    State Bank Of India 560.80 +0.97    Bharti Airtel Ltd. 797.40 +0.56     Mahindra & Mahindra Ltd. 1,256.85 +0.52   Wipro Ltd. 382.60 +0.30    Hero MotoCorp Ltd. 2,569.75 +0.21   Lupin Ltd. 679.35 +0.07"



class Marquee extends React.Component{
    constructor(props)
    {
        super(props);
        var data=str;
        this.state={
            data:data,
        }
    }
    render(){
            return(
                <marquee behavior="" direction="" style={{color:"red",fontSize:"20px",backgroundColor:"#2c2536",height:"50px",padding:"12px"}} className="mb-12 border">{this.state.data}</marquee>
            )
        }
}


export default Marquee;