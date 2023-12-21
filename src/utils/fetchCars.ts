import { carType, filterType } from "../types";

const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '28f66ef8c2mshf0f2a43acd94a34p1552fejsn50d66535fa1c',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
  };



export async function fetchCars(filters:filterType):Promise<carType[]> {
  //url de parametrenin olmaması durumunda default değerler
  const {make='honda', model = '', limit='5', year='', fuel=''}=filters
 const res = await fetch(
  `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${make}&model=${model}&limit=${limit}&year=${year}&fuel=${fuel}`
  ,options)

 return await res.json();

}