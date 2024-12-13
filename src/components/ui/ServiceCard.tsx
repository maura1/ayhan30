'use client'
import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Service } from "@/types";

interface ServiceCardProps {
  data: Service;
  imageRight?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ data, imageRight = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardClick = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div
      onClick={handleCardClick}
      className="outline-0 focus:ring-2 hover:ring-2 ring-navbarText transition duration-300 rounded-lg block ring-1 ring-slate-900/5 cursor-pointer border"
    >
      <Card className="bg-whiteBg rounded-lg shadow-lg">
        <div
          className={`${
            imageRight ? "md:flex-row-reverse" : "md:flex-row"
          } flex md:items-stretch flex-col-reverse md:w-full w-full`}
        >
          {/* Image Section */}
          <div className="md:w-1/2 w-full relative h-80 md:h-96">
            <div className="absolute inset-0 overflow-hidden rounded-lg">
              <Image
                src={data.images?.[0] ?? "/default-image.png"}
                alt={data.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{
                  objectFit: "cover",
                  objectPosition: "center"
                }}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Content Section */}
          <CardContent className="md:w-1/2 w-full p-6 flex flex-col justify-between">
            <div className="space-y-2">
              <h3 className="font-semibold mt-6 underline ">
                {data.name}
              </h3>
              <p
                className={` transition-all duration-300 ${
                  isExpanded ? "" : "line-clamp-6"
                }`}
                dangerouslySetInnerHTML={{
                  __html: data.description.replace(/\n/g, "<br />"),
                }}
              ></p>
            </div>
            <p className="text-xl  mt-4 text-right ">
              {isExpanded ? "Weniger anzeigen" : "Mehr anzeigen"} &gt;
            </p>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default ServiceCard;