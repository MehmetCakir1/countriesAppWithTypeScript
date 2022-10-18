import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import MapChart from "./MapChart";

const App = () => {
    const [content, setContent] = useState("");
    console.log("content",typeof content)
    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <MapChart setTooltipContent={setContent}/>
            <ReactTooltip>{content}</ReactTooltip>
        </div>
    );
}

export default App
