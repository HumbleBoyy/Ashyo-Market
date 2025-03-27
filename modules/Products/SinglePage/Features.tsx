"use client"

import getFeatures from "@/service/getFeatures";
import { useTranslations } from "next-intl";
import { FC } from "react";

const Features:FC<{id:string | any}> = ({id}) => {
  const t = useTranslations("SinglePage")
   const {data} = getFeatures(id)
    return (
      <div className="w-full max-w-lg bg-white">
        {data.cconfigurations !== null ? data?.configurations?.map((item:any) => (
          <div
            key={item.id}
            className="flex justify-between py-2 border-b border-dashed border-gray-300 last:border-b-0"
          >
            <span className="font-medium text-gray-600">{item.variationOption.variation.name}</span>
            <span className="text-gray-800">{item.variationOption.value}</span>
          </div>
        )) : 
        <>
         <div className="flex max-w-lg justify-start items-start h-auto">
            <h2 className="text-[18px] w-[50%] font-bold"><span className="text-red-600">!</span>{t("featuresDetail")}</h2>
         </div>
        </> }
      </div>
    );
  };
  
  export default Features;
  