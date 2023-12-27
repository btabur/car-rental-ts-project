import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Select from 'react-select';

type OptionType = {
  label:string,
  value:string
}

type FilterPropsTypes = {
  title:string,
  options:OptionType[]
}

const CustomFilter = ({title,options}:FilterPropsTypes) => {
  const [selected,setSelected] =useState<OptionType | null>(null)
  const [params,setParams] =useSearchParams()
  useEffect(()=> {
    // url e eklenecek parametreyi belirleme

    const key = title ==='Yakıt Tipi' ? 'fuel_type' :'year'
    //url deki paramterelerin yanına ekleme yapar
    if(selected?.value) {
      params.set(key,selected.value.toLocaleLowerCase())
    }else {
      //value değeri yoksa url'den parametreyi kaldır
      params.delete(key)
    }

    //url yi günceller
    setParams(params)
   

  },[selected])

  //seçilen parametreye göre url yi güncelle
  return (
    <div className='w-fit text-black'>
      <Select onChange={(e)=>setSelected(e)}
       className='min-w-[100px]' placeholder={title} options={options}/>
    </div>
  )
}

export default CustomFilter
