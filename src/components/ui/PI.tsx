import React from "react";
import { Price } from "@/types"; 

const PriceItem: React.FC<Price> = ({ title, description, price }) => {
  return (
    <div className="flex justify-between items-start border-b border-gray-200 pb-2">
      <div>
        <p className="font-medium pb-2">{title}</p>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <span className="text-base font-bold">{price}</span>
    </div>
  );
};

export default PriceItem;