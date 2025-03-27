"use client"

import getFeatures from "@/service/getFeatures";
import { FC } from "react";

const Features:FC<{id:string | unknown}> = ({id}) => {
   const {data:variation} = getFeatures(id)
    const specs = [
      { label: "Brend", value: "Vivo" },
      { label: "CIM kartalar soni", value: "2" },
      { label: "O'lchamlari", value: "75,09x155,11x8,28" },
      { label: "Modeli", value: "Redmi T12" },
      { label: "Akumulyator hajmi", value: "4000 amp" },
      { label: "Yadrolar soni", value: "8" },
      { label: "Tezkor xotira RAM", value: "6 GB" },
      { label: "Ichki xotira ROM", value: "128 GB" },
      { label: "Protsessori", value: "MediaTek Helio P35 (MT6765)" },
    ];
  
    return (
      <div className="w-full max-w-lg bg-white">
        {specs.map((spec, index) => (
          <div
            key={index}
            className="flex justify-between py-2 border-b border-dashed border-gray-300 last:border-b-0"
          >
            <span className="font-medium text-gray-600">{spec.label}</span>
            <span className="text-gray-800">{spec.value}</span>
          </div>
        ))}
      </div>
    );
  };
  
  export default Features;
  