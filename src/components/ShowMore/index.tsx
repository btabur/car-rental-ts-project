import { useParams, useSearchParams } from "react-router-dom"
import CustomButton from "../CustomButton"

const ShowMore = () => {
    const [params,setParams] = useSearchParams()
    //url den limit i alma
    const limit = Number(params.get('limit')) || 5 ;
   // 1. url de parametre yoksa kullanıcı projeye yeni girmiş ve 5 ürün vardır.
            // url ye parametre girilecek  değeri 10 olacaktır
    //2. url de limit parametresi varsa
            //parametre alınıp 5 eklenecek
    const handleLimit = ()=> {
        const newlimit = String(limit+5)
        //params değişkenini değiştirir
        params.set('limit',newlimit);
        //url yi günceller
        setParams(params)
    }
  return (
    <div className="w-full flex-center gap-5 my-10">
        {limit <30 && (
         <CustomButton handleClick={handleLimit} title="Daha Fazla"/>
        )}
    
    </div>
  )
}

export default ShowMore
