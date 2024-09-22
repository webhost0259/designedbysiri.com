'use client'
import Image from "next/image";
import Link from "next/link";
import Handpicked from "./HandPicked";
import { useEffect, useState } from "react";
import { getAllCategoryTypes } from "../services/apis/api";
import { CategoryType } from "../services/apis/models";

const ThirdSection = () => {
  const [loading, setLoading] = useState(false);
  const [categoryTypes, setCategoryTypes] = useState<Array<CategoryType>>([]);
  useEffect(() => {
    console.log('Third Section Mounted');
    setLoading(true);
    getAllCategoryTypes().then((data) => {
      console.log("zcx" , data);
      setCategoryTypes(data);
      setLoading(false);
    })
  },[])


  console.log(categoryTypes);
  return (
    <div className="px-2 laptop:px-16 mt-8 pb-16 text-black">
      <h1 className="font-light text-xl laptop:text-2xl">Handpicked by Siri</h1>
      <div className="max-w-96 tablet:max-w-[640px] laptop:min-w-[1024px] overflow-x-auto">
        {loading && categoryTypes.length === 0
          ? 
          <p>Loading...</p>
          :
          (
            categoryTypes.length === 0
            ?
            <p>Loading...</p>
            :
            <Handpicked categoryType={categoryTypes[0].categoryTypeId}/>
          )
        }
      </div>
      {
        categoryTypes.length > 1 &&
        categoryTypes.map((categoryType, index) => (
          <div key={categoryType.categoryTypeName}>
            <h2 className="font-light text-xl laptop:text-2xl mt-8">{categoryType.categoryTypeName}</h2>
            <div key={index} className="max-w-96 tablet:max-w-[640px] laptop:min-w-[1024px] overflow-x-auto">
              {loading && categoryTypes.length === 0
                ? 
                <p>Loading...</p>
                :
                (
                  categoryTypes.length === 0
                  ?
                  <p>Loading...</p>
                  :
                  <Handpicked categoryType={categoryType.categoryTypeId}/>
                )
              }
            </div>
          </div>
        ))
      }
      {/* // <div className="mt-6 max-w-full overflow-x-auto">
      //   <div className="flex flex-nowrap space-x-4 laptop:space-x-16">
      //     <LongImageBrief image="/images/saree-1.jpeg" name="Sarees" url="/categories"/>
      //     <LongImageBrief image="/images/anarkali-suits.jpeg" name="Anarkali" url="/categories"/>
      //     <LongImageBrief image="/images/shararas.jpeg" name="Shararas" url="/categories"/>
      //   </div>
      // </div> */}
    </div>
  );
}

export default ThirdSection;

interface LongImageBriefProps {
  image: string,
  name: string,
  url: string
}
const LongImageBrief = ({ image, name, url } : LongImageBriefProps) => {
  return (
    <div className="flex flex-col rounded-md ">
      <Link href={url}>
        <div className="relative w-80 laptop:w-96 h-[614px] rounded-md">
          <Image 
            src={image} 
            alt={name} 
            fill={true}
            className="object-cover transition-transform duration-700 transform hover:scale-105"
          />
          <h2 className="absolute text-3xl top-4 left-4 font-bold mt-2 text-gray-300 z-10">{name}</h2>
        </div>
      </Link>
    </div>
  );
}