import { useAppSelector } from "../app/hooks";

const Detail = () => {
  const { country, loading } = useAppSelector((state) => state.country);
  // console.log(country)
  // const {
  //   name,
  //   currencies,
  //   capital,
  //   region,
  //   languages,
  //   borders,
  //   area,
  //   population,
  //   flags,
  // } = country[0];
 

  if (loading) {
    <h1>LOADING...</h1>;
  }
  return (

<main>
    {/* <img src={flags.svg} alt="" /> */}
  <section></section>
</main>
  )

};

export default Detail;
