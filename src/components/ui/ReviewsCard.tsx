import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Review } from "@/types";

export default function ReviewsCard({ name, text, stars }: Review) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Limit the text content to 5 lines when collapsed
  const truncatedText = text.length > 200 ? text.substring(0, 200) + "..." : text;

  return (
    <Card
      className={`bg-champagneC shadow-lg rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-xl flex flex-col ${
        isExpanded ? "h-[300px]" : "h-[250px]"
      }`}
    >
      {/* Card Content */}
      <CardContent className="p-4 flex flex-col flex-grow">
        {/* Star Rating */}
        <div className="flex justify-center space-x-1 mb-4">
          {Array.from({ length: stars }).map((_, index) => (
            <span key={index} className="text-yellow-400">
              &#9733;
            </span>
          ))}
          {Array.from({ length: 5 - stars }).map((_, index) => (
            <span key={index} className="text-blackC">
              &#9733;
            </span>
          ))}
        </div>

        {/* Review Text */}
        <div
          className={`text-sm text-blackC transition-all duration-300 ${
            isExpanded ? "line-clamp-none" : "line-clamp-5"
          } flex-grow`}
        >
          {isExpanded ? text : truncatedText}
        </div>

        {/* 'Mehr anzeigen' Button */}
        <button
          onClick={() => setIsExpanded((prev) => !prev)}
          className="text-xs text-blackC underline self-start mt-auto"
        >
          {isExpanded ? "Weniger anzeigen" : "Mehr anzeigen"}
        </button>
      </CardContent>

      {/* Card Footer */}
      <CardFooter className="bg-softWhiteC p-4 border-t h-12 flex items-center">
        <p className="text-champagneC italic">{name}</p>
      </CardFooter>
    </Card>
  );
}
