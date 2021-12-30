import React from 'react';

export default function Card(props){
    console.log(props);
    return(
        <div className="card">
        <img className = "img" src={props.item.imageUrl}/> 
        <img style={{width:"5px", margin:"4px 2px 0px 0px"}} src="icon.png"/>
        <span className="location">{props.item.location}</span>
        <a className="maps" href={props.item.googleMapsUrl}> View on Google Maps</a>
        <h4 style={{lineHeight:"4px",marginTop:"10px",marginLeft:"10px"}}>{props.item.title}</h4>
        <span style={{color:"grey",fontSize:"8px",marginTop:"5px"}}> 
        {props.item.startDate == props.item.endDate?<span>{props.item.startDate}</span>:<span>{props.item.startDate} - {props.item.endDate} </span>}</span>
        <p style={{fontSize:"9px",marginTop:"4px"}}>Sunsets are the best.If you are a nature lover and is excited about spending time just to see the sun,mountains and few palm trees mid water kava is of your kind. Ideal for photoshoots,peaceful chat time and a break from regular chores.</p>
         
        </div>
    )
}