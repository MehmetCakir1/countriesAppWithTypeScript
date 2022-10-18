import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCountry } from "../features/countrySlice";
import millify from "millify";

const Detail = () => {
  const { country, loading } = useAppSelector((state) => state.country);
  const {state}=useLocation()
  const dispatch=useAppDispatch()
  // console.log("state",state);
  // console.log("country",country);
  // console.log(country)
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
  dispatch(getCountry(state))
 }, [])
 

  if (loading) {
    <h1>LOADING...</h1>;
  }
  return (

<main>
    <img src={flags?.svg} alt={name?.common}  className="w-[300px]"/>
  <section>
    <h1 className="uppercase font-bold">{name?.common}</h1>
    <h1>{population} ({millify(population,{
      precision:2,
      lowercase:false,
      space:true,
    })})</h1>
    <h1>{area} km <sup>2</sup>  ({millify(area,{
      precision:2,
      space:true,
    })})</h1>
    <div>
      {
        capital?.map((cap:string,index:number)=>{
          return(
            <p key={index}>
              {cap}
            </p>
          )
        })
      }
    </div>
    <div>
      {
        currencies && Object.values(currencies)?.map((curr:any,index:number)=>{
          return(
            <p key={index}>
              <span className="capitalize">{curr.name}</span>
              <span className="px-1">{curr.symbol}</span>
              
            </p>
          )
        })
      }
      </div>
    <div>
      {
        languages && Object.values(languages)?.map((lang:string,index:number)=>{
          return(
            <p key={index}>
              <span className="capitalize">{lang}</span>
            </p>
          )
        })
      }
    </div>
    <div>
      {
        borders?.map((border:string,index:number)=>{
          return(
            <p key={index}>
              <span className="capitalize">{border}</span>
            </p>
          )
        })
      }
    </div>
    <h1>{region}</h1>
  </section>
</main>
  )

};

export default Detail;
