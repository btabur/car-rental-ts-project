import { carType, filterType } from "../types";



  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '28f66ef8c2mshf0f2a43acd94a34p1552fejsn50d66535fa1c',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
  };



  export async function fetchCars(
    filters: filterType
  ): Promise<carType[]> {
    // url'de parametreinno olmama durumunda undefined olmaması için
    // varsayılan değerler velirledik
    const {
      make = 'bmw',
      model = 'm3',
      limit = '5',
      year = '',
      fuel_type = '',
    } = filters;
  
    const res = await fetch(
      `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&model=${model}&limit=${limit}&year=${year}&fuel_type=${fuel_type}`,
      options
    );
  
    return await res.json();
  }