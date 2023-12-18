const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '28f66ef8c2mshf0f2a43acd94a34p1552fejsn50d66535fa1c',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
  };

export async function fetchCars():Promise<any> {
 const res = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=civic`,options)

 return await res.json();

}