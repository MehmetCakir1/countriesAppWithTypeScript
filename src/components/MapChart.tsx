import {useNavigate} from "react-router-dom"
import {
    ZoomableGroup,
    ComposableMap,
    Geographies,
    Geography
} from "react-simple-maps";

const MapChart = ({ setTooltipContent,content }) => {
    const navigate=useNavigate()


    const handleCountriesName = () => {     
               navigate("/detail",{state:content})
}

    return (
        <div data-tip="" >
            <ComposableMap style={{height:"100vh",width:"100vw"}}>
                <ZoomableGroup >
                    <Geographies geography="/features.json" >
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
                                            outline: "none",
                                        },
                                        hover: {
                                            fill: "#F53",
                                            outline: "none",
                                            cursor:"pointer",
                                        },
                                        pressed: {
                                            fill: "#E42",
                                            outline: "none",
                                        },
                                      
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