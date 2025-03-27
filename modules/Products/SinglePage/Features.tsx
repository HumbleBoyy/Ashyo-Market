"use client"

import getFeatures from "@/service/getFeatures";
import { FC } from "react";

const Features:FC<{id:string | any}> = ({id}) => {
   const {data} = getFeatures(id)
   console.log(data)
    // const specs = [
    //   { label: "Brend", value: "Vivo" },
    //   { label: "CIM kartalar soni", value: "2" },
    //   { label: "O'lchamlari", value: "75,09x155,11x8,28" },
    //   { label: "Modeli", value: "Redmi T12" },
    //   { label: "Akumulyator hajmi", value: "4000 amp" },
    //   { label: "Yadrolar soni", value: "8" },
    //   { label: "Tezkor xotira RAM", value: "6 GB" },
    //   { label: "Ichki xotira ROM", value: "128 GB" },
    //   { label: "Protsessori", value: "MediaTek Helio P35 (MT6765)" },
    // ];
  
    return (
      <div className="w-full max-w-lg bg-white">
        {data.cconfigurations ? data?.configurations?.map((item:any) => (
          <div
            key={item.id}
            className="flex justify-between py-2 border-b border-dashed border-gray-300 last:border-b-0"
          >
            <span className="font-medium text-gray-600">{item.variationOption.variation.name}</span>
            <span className="text-gray-800">{item.variationOption.value}</span>
          </div>
        )) : <>
         <div className="flex justify-start items-start h-[200px]">
            <h2 className="text-[20px] font-bold"><span className="text-red-600">!</span>Feature of the  product is not provided</h2>
         </div>
        </>}
      </div>
    );
  };
  
  export default Features;
  