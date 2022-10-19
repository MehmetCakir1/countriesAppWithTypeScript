import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getCountry } from "../features/countrySlice";
import millify from "millify";
import { FaCity } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { BsPinMapFill,BsFillPeopleFill,BsFillMapFill,BsTranslate } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { IoArrowUndo } from "react-icons/io5";

const Detail = () => {
  const { country, loading } = useAppSelector((state) => state.country);
  const {state}=useLocation()
  const dispatch=useAppDispatch()
  const navigate=useNavigate()
  const {
    name,
    currencies,
    capital,
    region,
    languages,
    borders,
    area,
    population,
    flags,
  } = country;

 useEffect(() => {
  if(state==="Democratic Republic of Congo"){
    dispatch(getCountry("DR Congo"))
} else{
  dispatch(getCountry(state))
}
 }, [])
 

  return (
    <>
    {
      loading ? (
        <h1 className="text-3xl font-semibold text-center mt-5">LOADING...</h1>
      ):(
        <>
        <button className="text-red-500 text-4xl absolute left-3 top-3 bg-transparent border-0"
        onClick={()=>navigate("/")}
        ><IoArrowUndo/></button>
        <h1 className="uppercase font-bold w-full text-center py-3 sm:py-9 text-3xl">{name?.common}</h1>
    <main className="flex flex-col md:flex-row md:justify-between container m-auto ">
        
        <img src={flags?.svg} alt={name?.common}  className="w-full md:w-[50%] max-h-[420px] p-5 "/>
      <section className="p-3 md:w-6/12 ">
      <div className="flex items-center justify-start p-2">
        <span className="inline-block w-[2rem] text-2xl text-slate-600"> <FaCity/></span>
          {
            capital?.map((cap:string,index:number)=>{
              return(
                <span key={index}>
                  {cap}
                </span>
              )
            })
          }
        </div>
        <div className="flex items-center justify-start p-2">
          <span className="inline-block w-[2rem] text-2xl text-blue-800"><BiWorld/></span>
          {region}
        </div>
          <div className="flex items-center justify-start p-2 flex-wrap">
            <span className="inline-block w-[2rem] text-2xl text-orange-600"><BsTranslate/></span>
         
          {
            languages && Object.values(languages)?.map((lang:string,index:number)=>{
              return(
                  <span key={index} className="capitalize mr-1">{lang}</span>
              )
            })
          }
        </div>
        <div className="flex items-center justify-start p-2">
          <span className="inline-block w-[2rem] text-2xl text-emerald-700"> <GiMoneyStack/></span>
          {
            currencies && Object.values(currencies)?.map((curr:any,index:number)=>{
              return(
                <p key={index} className="mr-1">
                  <span className="capitalize">{curr.name}</span>
                  <span className="px-1">{curr.symbol}</span>
                </p>
              )
            })
          }
          </div>
        <div className="flex items-center justify-start p-2">
          <span className="inline-block w-[2rem] text-2xl"><BsFillPeopleFill/></span>
          
          {population} ({millify(Number(population),{
          precision:2,
          lowercase:false,
          space:true,
        })})
        </div>
        <div className="flex items-center justify-start p-2 flex-wrap">
          <span className="inline-block w-[2rem] text-2xl text-cyan-600"><BsFillMapFill/></span>
          {
            borders?.map((border:string,index:number)=>{
              return(
                  <span key={index} className="capitalize mr-1">{border}</span>
              )
            })
          }
        </div>
        <div className="flex items-center justify-start p-2 flex-wrap">
          <span className="inline-block w-[2rem] text-2xl text-pink-600"><BsPinMapFill/></span>
          {area} km <sup>2</sup>  ({millify(Number(area),{
          precision:2,
          space:true,
        })})
        </div>
      </section>
    </main>
        </>
      )
    }
      </>
  )

};

export default Detail;
