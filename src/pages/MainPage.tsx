import { useEffect } from 'react'
import CustomFilter from '../components/CustomFilter'
import Hero from '../components/Hero/Hero'
import SearchBar from '../components/SearchBar'
import { fetchCars } from '../utils/fetchCars'

const MainPage = () => {
  useEffect(()=> {
    fetchCars().then(res=> console.log(res))
  },[])
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
            <CustomFilter/>
            <CustomFilter/>
          </div>
        </div>
        {/* Arabaları listeleme */}
      </div>
    </div>
  )
}

export default MainPage