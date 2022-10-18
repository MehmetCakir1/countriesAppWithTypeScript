import React, { memo } from "react";
import {
    ZoomableGroup,
    ComposableMap,
    Geographies,
    Geography
} from "react-simple-maps";

const MapChart = ({ setTooltipContent }) => {
   // we will use navigate with the onClick
    const handleCountriesName = (e) => {
        setTooltipContent(e.properties.name)

   }
    return (
        <div data-tip="">
            <ComposableMap>
                <ZoomableGroup>
                    <Geographies geography="/features.json">
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    onMouseEnter={() => {
                                        setTooltipContent(geo.properties.name);
                                    }}
                                    onClick={() => {
                                        console.log("name",geo.properties.name)
                                         setTooltipContent(geo.properties.name);
                                    }}
                                    onMouseLeave={() => {
                                        setTooltipContent("");
                                    }}
                                    style={{
                                        default: {
                                            fill: "#D6D6DA",
                                            outline: "none"
                                        },
                                        hover: {
                                            fill: "#F53",
                                            outline: "none"
                                        },
                                        pressed: {
                                            fill: "#E42",
                                            outline: "none"
                                        }
                                    }}
                                />
                            ))
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
        </div>
    );
};

export default memo(MapChart);