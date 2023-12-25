import ReactSelect from "react-select"
import { makes } from "../../constants"
import { FormEvent, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"


type ButtonPropsType = {
  design?:string
}
//1. bileşen
const SearchButton = ({design}:ButtonPropsType)=> {
  return (
    <button className={`ml-3 z-10 ${design}`}>
        <img 
        src="/magnifying-glass.svg" 
        width={30}
        height={30} />
    </button>
  )
}

//2. bileşen
const SearchBar = () => {
  const [make,setMake]=useState<string>('')
  const [model,setModel]=useState<string>('')

  const [params,setParams] =useSearchParams()

  type OptionsType = {
    label:string;
    value:string;
  }
  //options şu şekilde olmalı: [{label:'marka'}, value:herhangi bir şey]
  //state değiştiğinde tekrar tekrar render olmaması için useMemo kullandık
const option:OptionsType[] = useMemo(()=> 
      makes.map((make)=> ({ // ilk ( parantez return et demek { ise obje döndür demek
        label:make,
        value:make
    }))
,[])

//event parametre tipini kendimiz tanımlayamayız. Çünkü çok fazla veri var
//bu yüzden react da yerleşik olarak kullanılan tipleri kullanıyoruz
const handleSubmit = (e:FormEvent<HTMLFormElement>)=> {
  e.preventDefault()

  //url yi günceller url deki önceki parametreleri siler
  setParams({
    make,
    model
  })

}
  return (
    <form onSubmit={handleSubmit} className="searchbar gap-3">
      <div className="searchbar__item">
        <ReactSelect
        onChange={(e:OptionsType | null)=> e &&  setMake(e.value)}
         options={option} className="w-full text-black"/>
        <SearchButton design={'sm:hidden'}/>
      </div>
      <div className="searchbar__item">
        <img width={25} src="/model-icon.png" className="absolute ml-4" alt="" />
        <input 
        onChange={(e)=>setModel(e.target.value)}
        className="searchbar__input rounded text-black" 
        type="text" 
        placeholder="Örn:Civic"/>
        <SearchButton/>
      </div>
    </form>
  )
}

export default SearchBar
