'use client'

import React, { useState } from "react";
import ServiceCard from "@/components/ui/ServiceCard";
import services from "./ui/services";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const ServiceList: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State to control expansion

  // Show only the first 6 services if not expanded
  const displayedServices = isExpanded ? services : services.slice(0, 7);
const handleToggle = () => {
  setIsExpanded((prev) => !prev);

  if (isExpanded) {
    const servicesSection = document.getElementById("services-section");
    if (servicesSection) {
      window.scrollTo({
        top: servicesSection.offsetTop,
        behavior: "smooth",
      });
    }
  }
};

  return (
    <Container>
      <div 
       className="relative bg-pewterC pb-12 pt-8 border">
        <div className="absolute inset-0 pointer-events-none bg-noise z-0"></div>
        
        <div className="relative flex flex-col items-center text-center mb-10 mt-20">
            <h1 className="text-2xl sm:text-3xl font-medium text-blackC z-50">
              Behandlung
            </h1>
            <span className="absolute deco-text md:deco-text-md lg:deco-text-lg top-[-30px] md:top-[-60px] left-50 transform translate-50 pointer-events-none text-scalable whitespace-nowrap" >
              Individualität
            </span>
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <h2 className="flex items-center justify-center pb-4">Pigmente</h2>
          <p>Ich verwende ausschließlich streng kontrollierte Pigmente, die REACH-konform, vegan und tierversuchsfrei sind, um dir höchste Qualität und Sicherheit zu garantieren.</p>
          <p className="pb-8">Gerne stehe ich dir für ein persönliches Beratungsgespräch zur Verfügung, um deine individuellen Wünsche zu besprechen.</p>
        </div> 

        <div id="services-section" className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ">
      

          {/* Service Cards */}
          <div className="space-y-4">
            {displayedServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                data={service}
                imageRight={index % 2 === 1} // Alternate images for odd/even
              />
            ))}
          </div>

          {/* Toggle Button */}
          <div className="flex justify-center mt-8">
            <Button
              onClick={handleToggle}
              variant="default"
              className="px-6 py-3 text-lg bg-champagneC text-blackC hover:text-white"
            >
              {isExpanded ? "Weniger Anzeigen" : "Alle Behandlungen"}
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ServiceList;