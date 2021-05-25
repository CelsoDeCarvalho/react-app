import axios from "axios";

const BASE_URL = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {

  let modifiedUrl=BASE_URL;

  if(country){
    modifiedUrl=`${BASE_URL}/countries/${country}`;
  }

  try {

    //data-> dados da resposta da api e suas colunas
    const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(modifiedUrl);
    return {confirmed,recovered,deaths,lastUpdate};

  } catch (error) {
    console.log(error)
  }
}

export const fetchCountries = async () => {
  try {

    const {data:{countries}} = await axios.get(`${BASE_URL}/countries`);
    return countries.map((countries)=>countries.name);

  } catch (error) {
    console.log(error)
  }
}
