"use client";

import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { priceData } from "@/components/ui/priceData";
import PriceItem from "@/components/ui/PriceItem";
import Container from "@/components/ui/container";

const PriceList = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center py-12 bg-pewterC relative">
        {/* Background Noise */}
        <div className="absolute inset-0 pointer-events-none bg-noise z-0"></div>

        {/* Header Section */}
        <div className="z-10 mb-8 flex flex-col items-center justify-center relative">
          <h1 className="text-2xl sm:text-3xl  font-medium text-blackC z-50">
            Preise
          </h1>
           <span className="absolute deco-text md:deco-text-md lg:deco-text-lg top-[-35px] md:top-[-50px] 
            left-50 transform translate-50 pointer-events-none text-scalable whitespace-nowrap" >
              Qualität
            </span>
        </div>

        {/* Accordion Section */}
        <div className="w-full max-w-3xl bg-champagneC rounded-lg shadow-lg px-4 relative z-10">
          <Accordion type="single" collapsible className="space-y-4">
            {Object.keys(priceData).map((section) => (
              <AccordionItem key={section} value={section}>
                <AccordionTrigger className="py-2 text-lg font-semibold text-blackC hover:text-black">
                  {section} ({priceData[section].length})
                </AccordionTrigger>
                <AccordionContent className="px-2 py-4">
                  <div className="space-y-4">
                    {priceData[section].map((item, index) => (
                      <PriceItem key={index} {...item} />
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
