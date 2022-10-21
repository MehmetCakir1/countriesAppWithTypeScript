import { useState,useRef} from "react";
import { useNavigate } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import MapChart from "../components/MapChart";

const MapWrapper = () => {
  const [content, setContent] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const searchValue=useRef<HTMLInputElement>(null);
  const navigate=useNavigate()


  const handleSubmit=()=>{
    const searchText=searchTerm[0].toUpperCase()+searchTerm.slice(1)
    navigate("/detail",{state:searchText})

  }

  return (
    <>
    <form className="flex justify-center items-center pt-9 w-full max-w-2xl m-auto px-4 flex-wrap"
    onSubmit={handleSubmit}
    >
    <input 
    type="search"
    className="border border-[#f53] p-1 w-8/12 sm:w-7/12 focus:outline-0" 
    ref={searchValue}
    // @ts-ignore: Object is possibly 'null'.
    onChange={()=>setSearchTerm(searchValue.current.value)}
    placeholder="Type the country name"
    />
    <button className=" py-1 px-4 border border-[#f53] font-semibold bg-[#f53] text-white transition-all duration-1000 ease-out hover:bg-white hover:text-[#f53]"
    type="submit"
    >SUBMIT</button>
    <img src="images/worldMap.PNG" alt="world-map" className="w-full mt-[5rem]  xs:hidden" />
    <p className="pt-3 indent-4 xs:hidden">The image above is not clickable.Please type the country name in order to see the details of that country</p>
    </form>
      <div className="hidden xs:block">
        <MapChart setTooltipContent={setContent} content={content} />
        <ReactTooltip>{content}</ReactTooltip>
      </div>
    </>
  );
};

export default MapWrapper;
