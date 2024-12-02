export interface Service {
  id: string;  
  name: string; 
  images: string[];
  description:string;
}

export interface Review {
  id:number;
  name: string;
  text: string;
  stars: number;
  link: string;
}

export interface Price{
  title: string;
  description:string;
  price:string;  
}