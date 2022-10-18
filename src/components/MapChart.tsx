import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getCountry } from "../features/countrySlice";
import {useNavigate} from "react-router-dom"
import {useEffect} from "react"
import {
    ZoomableGroup,
    ComposableMap,
    Geographies,
    Geography
} from "react-simple-maps";

const MapChart = ({ setTooltipContent,content }) => {
    const navigate=useNavigate()
   const dispatch=useAppDispatch()
   const {country}=useAppSelector(state=>state.country)

console.log("country",country)

    const handleCountriesName = () => {
        // setTooltipContent(e.properties?.name)
      
        navigate("/detail",{state:content})
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
                                    onClick={(geo) => {
                                        handleCountriesName()
                                    }}
                                    onMouseLeave={() => {
                                        setTooltipContent("");
                                    }}
                                    style={{
                                        default: {
                                            fill: "#15181b",
                                            outline: "none"
                                            
                                        },
                                        hover: {
                                            fill: "#F53",
                                            outline: "none",
                                            cursor:"pointer"
                                        },
                                        pressed: {
                                            fill: "#E42",
                                            outline: "none",
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

export default MapChart;