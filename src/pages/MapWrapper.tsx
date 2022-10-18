import React, { useState,useEffect } from "react";
import ReactTooltip from "react-tooltip";
import { useAppSelector } from "../app/hooks";
import MapChart from "../components/MapChart";

const MapWrapper = () => {
    const [content, setContent] = useState("");
 
    
    return (
        <div>
            <MapChart setTooltipContent={setContent} content={content}/>
            <ReactTooltip>{content}</ReactTooltip>
        </div>
    );
}

export default MapWrapper
