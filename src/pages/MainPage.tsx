import { useEffect, useState } from 'react'
import CustomFilter from '../components/CustomFilter'
import Hero from '../components/Hero/Hero'
import SearchBar from '../components/SearchBar'
import { fetchCars } from '../utils/fetchCars'
import { carType } from '../types'
import Card from '../components/Card'
import ShowMore from '../components/ShowMore'
import { useSearchParams } from 'react-router-dom'
import { fuels, years } from '../constants'

const MainPage = () => {
  const [params]=useSearchParams();
  //useState bizim state de tutacağımız verinin tipini ister. 
  const [cars,setCars] = useState<carType[] | null>(null)
  const [isError,setIsError] = useState<boolean>(false)
  useEffect(()=> {
    //url deki bütün parametreleri al ve obje oluştur
    const paramsObject= Object.fromEntries(params.entries())
    fetchCars(paramsObject)
    .then(res => setCars(res))
    .catch((err)=> {setIsError(true)
      console.log(err)})
  },[params])
  return (
    <div>
      <Hero/>
      <div id='catalogue' className='mt-12 padding-x padding-y max-width'>

        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Arabağa Kataloğu</h1>
          <p>
            Beğenebileceğin arabaları keşfet
          </p>
        </div>
        {/* filtreleme alanı  */}
        <div className='home__filters'>
          <SearchBar/>
          <div className='home__filter-container'>
            <CustomFilter title='Yakıt Tipi' options={fuels}/>
            <CustomFilter title='Üretim Yılı' options = {years}/>
          </div>
        </div>
          {/* 
          1.  veri null ise > henüz api den cevap gelmemiştir.
          2. is error true ise > bir sorun oluşmulştur
          3. veri boş dizi ise > kriterlere uygun eleman bulunamadı
          4. veri dolu bir dizi ise > veri başarı ile geldi
           */}
          {!cars ? (
                <div className='home__error-container'>
                <h2>Loading </h2>
                </div>
          ):isError ? (
            <div className='home__error-container'>
                <h2>Üzgünüz bir sorun oluştu</h2>
                </div>
          ):cars.length<1 ? (
            <div className='home__error-container'>
                <h2>Aradığınız kriterlere uygun bir araç bulunamadı</h2>
                </div>
          ):(
            <section>
             <div className='home__cars-wrapper'>
             {cars.map((card,i)=> <Card key={i} car={card}/>)}
             </div>
              <ShowMore/>
            </section>
          )}
      </div>
    </div>
  )
}

export default MainPage