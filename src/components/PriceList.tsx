"use client";

import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"; // Import the accordion component
import { priceData } from "@/components/ui/priceData"; // Import the price data
import PriceItem from "@/components/ui/PriceItem"; // Import the PriceItem component
import Container from "@/components/ui/container";

const PriceList = () => {
  return (
    <Container>
      <div className="relative flex flex-col items-center justify-center py-12 bg-pewterC  ">
        {/* Background Noise */}
        <div className="absolute inset-0 pointer-events-none bg-noise z-0 "></div>

        {/* Header Section */}
 <div className="relative flex flex-col items-center justify-center mb-8 z-10">
  <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-medium text-blackC">
    Preise
  </h1>
  <span
    className="absolute deco-text whitespace-nowrap "
    style={{
      top: "-55px", // Adjust vertical position
      left: "50%", // Center horizontally
      transform: "translateX(-50%)", // Center align properly
      pointerEvents: "none", // Prevent interaction
    }}
  >
    Qualität
  </span>
</div>



        {/* Accordion Section */}
        <div className="relative w-full max-w-3xl z-10 bg-champagneC rounded-lg shadow-lg px-4 ">
          <Accordion type="single" collapsible className="space-y-4">
            {Object.keys(priceData).map((section) => (
              <AccordionItem key={section} value={section}>
                {/* Section Heading */}
                <AccordionTrigger className="text-base font-semibold text-blackC hover:underline">
                  {section} ({priceData[section].length})
                </AccordionTrigger>

                {/* Section Content */}
                <AccordionContent>
                  <div className="space-y-4">
                    {priceData[section].map((item, index) => (
                      <PriceItem
                        key={index}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                      />
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Container>
  );
};

export default PriceList;