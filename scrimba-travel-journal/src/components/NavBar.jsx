import React from "react";
import globe from "../images/globe.svg";
export default function NavBar() {
    return (<nav className="flex items-center w-full ">
        <img src={globe} alt="glove" className="mr-2"/>
        <h1>my travel blog.</h1>
    </nav>)
}