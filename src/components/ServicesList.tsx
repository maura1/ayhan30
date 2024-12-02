import React from 'react';
import ServiceCard from '@/components/ui/ServiceCard'
import services from '@/components/ui/services' 
import Container from '@/components/ui/container'

const ServiceList: React.FC = () => {
  return (
    <Container>      


  <div className="relative bg-pewterC pt-64 pb-12 px-48">
  <div className="absolute inset-0 pointer-events-none bg-noise z-0"></div>  

<div className="relative z-10">
  <div className="relative flex justify-center mb-8">
    <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-medium text-blackC">Behandelung</h1>
<span
              className="absolute deco-text"
              style={{                
                top: '-55px', // Offset slightly above
                left: '50%', // Align with the main text
                transform: 'translate(-50%)', // Fine-tune as needed
                pointerEvents: 'none', // Avoid blocking interactions
              }}
            >
             Individualität
            </span>

  </div>
  <div className="space-y-5">
    {services.map((service, index) => (
      <ServiceCard key={service.id} data={service} imageRight={index % 2 !== 0} />
    ))}
  </div>
</div>
</div>


       
      
    </Container>
  );
};
export default ServiceList