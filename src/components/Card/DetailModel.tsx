import { carType } from "../../types"
import { generateImage } from "../../utils/generateImage";

type ModelPropsType = {
    car:carType;
    isOpen:boolean;
    close:()=> void;
}

const DetailModel = ({car,isOpen,close}:ModelPropsType) => {
  console.log(car)
  return (
    //modal açıksa ekrana bas
    isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-25  z-20 grid place-items-center p-4">
            <div className="p-6 relative bg-white w-full max-w-lg max-h-[90vh] rounded-2xl  flex flex-col gap-5 shadow-xl overflow-auto ">
                {/* kapatma butonu */}
                <button onClick={close} className="cursor-pointer p-1 absolute end-1 top-1 z-10 bg-white rounded-full">
                    <img src="/close.svg" alt="" />
                </button>
                {/* fotoğraf alanı */}
                <div className=" flex-1 flex flex-col gap-3"> 
                    {/* büyük resim */}
                    <div className="w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                        <img className="h-full mx-auto object-contain" src={generateImage(car)} alt="" />
                    </div>
                    {/* küçük resimler */}
                    <div className="flex gap-3">
                        <div className="flex-1 flex relative h-24 bg-primary-blue-100">
                        <img className="h-full mx-auto object-contain " src={generateImage(car,'29')} alt="" />
                        </div>
                        <div className="flex-1 flex relative h-24 bg-primary-blue-100">
                        <img className="h-full mx-auto object-contain " src={generateImage(car,'33')} alt="" />
                        </div>
                        <div className="flex-1 flex relative h-24 bg-primary-blue-100">
                        <img className="h-full mx-auto object-contain " src={generateImage(car,'13')} alt="" />
                        </div>
                       
                    </div>

                </div>
                {/* araç bilgileri */}
            
                    {/* objenin değerlerinin tek tek yazmamak için
                    Object.entries metodu ile objeyi diziye çevirdik
                    Entries metodu sonuç olarak verdiğimiz objenin 
                    anahtar ve değerlerinden oluşan bir dizi oluşturur */}
                    {
                        Object.entries(car)  //objeyi diziye çevirir
                        .filter(([key])=> key!=='year') //yıl değerini kaldır
                        .map(([key,value])=> (
                                <div className="flex justify-between">
                                    <h4 className="capitalize text-gray">{key.replace("_"," ")}</h4>
                                    <p className="capitalize text-black-100 font-semibold">{value}</p>
                                </div>
                        ))
                    }
               
            </div>    
        </div>
        ))
    }

export default DetailModel