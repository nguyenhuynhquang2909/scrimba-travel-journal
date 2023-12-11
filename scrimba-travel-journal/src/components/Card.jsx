import React from "react";
import pin from "../images/pin.svg"
export default function Card(props) {
    return (
    <div className="flex p-10 border-b-4">
        <div className="flex-initial m-10" >
            <img src={props.imageUrl} alt="" className="object-scale-down h-168 w-126 p-0 m-0"  />
        </div>
        <div>
            <div className="flex items-center justify-center">
                <img src={pin} alt="pin" className="mr-2" />
                <h2 className="text-l mr-2">{props.location}</h2>
                <a href={props.googleMapsUrl} className="text-gray-500 underline">
                    View on Google Maps
                </a>
            </div>
            <h1 className="text-xl font-bold">{props.title}</h1>
            <h4>{props.startDate} - {props.endDate}</h4>
            <p>{props.description}</p>
        </div>
    </div>
        
    )
}