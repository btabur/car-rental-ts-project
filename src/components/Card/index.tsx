import { useState } from "react"
import { carType } from "../../types"
import CustomButton from "../CustomButton"
import DetailModel from "./DetailModel"
import { generateImage } from "../../utils/generateImage"
import {motion} from 'framer-motion'

interface ICardProps {
    car:carType
}
const Card = ({car}:ICardProps) => {
    const [isModalShow,setIsModelShow] =useState<boolean>(false)
  return (
    <motion.div
    initial={{
        scale:0.5,
        opacity:0
    }}
    transition={{duration:1}}
    // ekrana her geldiği an oluşur
    whileInView={{
        scale:1,
        opacity:1
    }}
    className="car-card group">
        {/* araba ismi */}
        <h2 className="car-card__content-title">
            {car.make} {car.model}
        </h2>
        {/* araba fiyatı */}
        <p className="flex mt-6 text-[32px]">
            <span className="text-[19px] font-semibold ">₺</span>
           {Math.round(Math.random()*5000) +500}
            <span className="text-[14px] font-medium self-end ">/gün</span>
        </p>

        {/* Resim alanı */}
        <div className="relative w-full h-40 my-3 ">
            <img src={generateImage(car)} className="w-full h-full object-contain" />
        </div>
        {/* Alt kısım */}
        <div  className="flex w-full mt-2 relative" >
             {/* ikonlar */}
            <div className=" group-hover:invisible flex w-full justify-around text-gray">
                <div className="flex  flex-col justify-center items-center  gap-2">
                    <img width={25} src="/steering-wheel.svg" alt="" />
                    <p className="text-[14px]"> {car.transmission == 'a' ? 'otamatik ':'manuel'}</p>
                </div>
                <div className="flex  flex-col justify-center items-center  gap-2">
                    <img width={25} src="/tire.svg" alt="" />
                    <p className="text-[14px]"> {car.drive } </p>
                </div>
                <div className="flex  flex-col justify-center items-center  gap-2">
                    <img width={25} src="/gas.svg" alt="" />
                    <p className="text-[14px]"> {car.fuel_type}</p>
                </div>
            </div>
             {/* buton */}
            <div className="group-hover:flex w-full hidden absolute bottom-0 ">
                <CustomButton
                handleClick={()=> setIsModelShow(true)}
                 rIcon="/right-arrow.svg" title="Daha Fazla" designs="w-full py-[16px]"/>
            </div>
        </div>
        {/* Modal */}
        <DetailModel
         car={car}
         isOpen={isModalShow}
         close={()=>setIsModelShow(false)} 
         />
    </motion.div>
  )
}

export default Card