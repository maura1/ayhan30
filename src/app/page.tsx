import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import PriceList from '@/components/PriceList';
import ReviewsList from '@/components/ReviewsList';
import ServicesList from '@/components/ServicesList'
import Welcome from '@/components/Welcome'; 

export default function HomePage() {  
  return (
    <>
      {/* Wrapper for Hero and Welcome */}
      <div className="relative">
        <Hero />
        <Welcome />
      </div>

      {/* Services Section */}
      <div className="relative z-0">
        <ServicesList />
      </div>
      <ReviewsList />
      <PriceList />
    <Footer />
</>
    
  );
}
