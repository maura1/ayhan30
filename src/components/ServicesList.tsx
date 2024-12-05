
import ServiceCard from "@/components/ui/ServiceCard";
import services from "@/components/ui/services";
import Container from "@/components/ui/container";
import Link from "next/link"
import {Button} from "@/components/ui/button"

const ServiceList: React.FC = () => {
 

  

  return (
    <Container>
      <div className="relative bg-pewterC pt-64 pb-12">
        <div className="absolute inset-0 pointer-events-none bg-noise z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex flex-col items-center text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-medium text-blackC z-50">
              Behandlung
            </h1>
            <span className="absolute deco-text md:deco-text-md lg:deco-text-lg top-[-35px] md:top-[-50px] left-50 transform translate-50 pointer-events-none text-scalable whitespace-nowrap">
              Individualität
            </span>
          </div>
          <div className="space-y-4">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                data={service}
                
                
                imageRight={index % 2 === 1} // Alternate images: right for odd indexes
              />
            ))}
          </div>
        </div>
         <div className="flex justify-center mt-8">
          <Link href="/reviews" passHref>
            <Button variant="default" className="px-6 py-3 text-lg bg-champagneC text-blackC hover:text-white">
              Alle Behandlung
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default ServiceList;
