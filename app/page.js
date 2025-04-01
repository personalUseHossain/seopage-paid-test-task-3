
"use client";

import Awards from "@/components/Home/Awards";
import CaseStudies from "@/components/Home/CaseStudies";
import Contact from "@/components/Home/Contact";
import Hero from "@/components/Home/Hero";
import OurServices from "@/components/Home/OurServices";
import PartnersAndClients from "@/components/Home/PartnersAndClients";
import Technology from "@/components/Home/Technology";
import Testimonials from "@/components/Home/Testimonials";
import Navbar from "@/components/Navbar";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter()
  return (
    <>
    <div className="max-w-[1200px] mx-auto">
      <Navbar router={router}/>
      
         <div className="bg-light_dark rounded-lg px-2">
           <Hero />
           <div className="h-32"></div>
           <PartnersAndClients />
           <div className="h-32"></div>

           <OurServices />
           <div className="h-32"></div>

           <Testimonials />
           <div className="h-32"></div>

           <Technology />
           <div className="h-32"></div>

           <CaseStudies />
           <div className="h-32"></div>

           <Awards />
           <div className="h-32"></div>

           <Contact />
           <div className="h-20"></div>

         </div>
       </div>
    </>
  );
}
