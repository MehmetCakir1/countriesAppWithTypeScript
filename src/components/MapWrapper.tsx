import React, { useState,useEffect } from "react";
import ReactTooltip from "react-tooltip";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getCountry } from "../features/countrySlice";
import MapChart from "./MapChart";

const MapWrapper = () => {
    const [content, setContent] = useState("");
    // console.log("content",typeof content)
    const dispatch=useAppDispatch()

const {country,loading}=useAppSelector(state=>state.country)
console.log(country);

    useEffect(() => {
            dispatch(getCountry())
    }, [])
    
    return (
        <div>
            <MapChart setTooltipContent={setContent}/>
            <ReactTooltip>{content}</ReactTooltip>
        </div>
    );
}

export default MapWrapper
