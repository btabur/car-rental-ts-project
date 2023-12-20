import { useState } from "react"


const DetailModel = () => {
    const [isModalShow,setIsModelShow] =useState<boolean>(false)
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25  z-20 grid place-items-center p-4">
        <div className="p-6 relative bg-white w-full max-w-lg max-h-[90vh] rounded-2xl  flex flex-col gap-5 shadow-xl overflow-auto ">
            {/* kapatma butonu */}
            <button className="cursor-pointer p-1 absolute end-1 top-1 z-10 bg-white rounded-full">
                <img src="/close.svg" alt="" />
            </button>
            {/* fotoğraf alanı */}
            <div className=" flex-1 flex flex-col gap-3"> 
                {/* büyük resim */}
                <div className="w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                    <img className="h-full mx-auto object-contain" src="/hero.png" alt="" />
                </div>
                {/* küçük resimler */}
                <div className="flex gap-3">
                    <div className="flex-1 flex relative h-24 bg-primary-blue-100">
                    <img className="h-full mx-auto object-contain " src="/hero.png" alt="" />
                    </div>
                    <div className="flex-1 flex relative h-24 bg-primary-blue-100">
                    <img className="h-full mx-auto object-contain " src="/hero.png" alt="" />
                    </div>
                    <div className="flex-1 flex relative h-24 bg-primary-blue-100">
                    <img className="h-full mx-auto object-contain " src="/hero.png" alt="" />
                    </div>
                   
                </div>
            </div>
        </div>    
    </div>
  )
}

export default DetailModel