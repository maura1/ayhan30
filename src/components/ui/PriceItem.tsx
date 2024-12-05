

import { Price } from "@/types"; 


const PriceItem: React.FC<Price> = ({ title, description, price }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start border-b border-gray-300 pb-4">
      <div className="sm:w-3/4">
        <p className=" text-blackC text-lg">{title}</p>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <div className="sm:w-1/4 flex justify-end">
        {/* Ensure price and currency are on the same line */}
        <span className="text-base font-bold text-goldC whitespace-nowrap">{price}</span>
      </div>
    </div>
  );
};

export default PriceItem;

