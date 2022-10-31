import React from "react";
import data from "../data.js";

export default function Traveldetails(props){
    return(
        <div className="outer-container">
            <img className="place-img" src={props.item.imageUrl} alt=""></img>
            <div className="details">
                <div className="location-container">
                    <img src="images/location.svg"></img>
                    <span>{props.item.location}</span>
                    <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="title">{props.item.title}</h1>
                <span className="duration">{props.item.startDate}-{props.item.endDate}</span>
                <p className="description">{props.item.description}</p>
            </div>
        </div>
    )
    
    
}