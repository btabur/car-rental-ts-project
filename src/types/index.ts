// düzeydeyse veya type' birden fazla bileşende ,
// dosyada kullanılıyorsa genelde şuan olduğu gibi
// ayr ı bir type dosyasında tanımlanır ve export edilir
// ihtiyacımız olan dosyalarda import edilir

import { MouseEventHandler } from "react";

// gelen prop'ların tipini tanımlama
export type buttonPropsType = {
    title: string;
    designs?: string;
    btnType?: 'button' | 'submit' | 'reset'; // hem union types hem string literal kullandık
    disabled?: boolean;
    rIcon?: string;
    // bu fonksiyon bir buton elemanın mouse'un etkişilimyle tetiklenen bir fonksiyondur
    handleClick?: MouseEventHandler<HTMLButtonElement>;
  };

  //api den gelen araba verisinin tipi

 export interface carType {
    "city_mpg": number,
    "class":string,
    "combination_mpg": number,
    "cylinders": number,
    "displacement": number,
    "drive": "fwd" |"rwd"|"awd" |"4wd",
    "fuel_type": "gas" |"electricity" |"diesel",
    "highway_mpg": number,
    "make": string,
    "model":string,
    "transmission": "a" | "b",
    "year": number
}

export type filterType = {
  make?:string;
  model?:string; 
  limit?:string;
  fuel?:string;
  year?:string
}