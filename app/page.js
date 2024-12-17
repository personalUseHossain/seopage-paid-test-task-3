// "use client";

// import Awards from "@/components/Home/Awards";
// import CaseStudies from "@/components/Home/CaseStudies";
// import Contact from "@/components/Home/Contact";
// import Hero from "@/components/Home/Hero";
// import OurServices from "@/components/Home/OurServices";
// import PartnersAndClients from "@/components/Home/PartnersAndClients";
// import Technology from "@/components/Home/Technology";
// import Testimonials from "@/components/Home/Testimonials";
// import Navbar from "@/components/Navbar";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";

// export default function Home() {
//   return (
//     <>
//       <div className="max-w-[1200px]">
//         <Navbar />
//         <div className="bg-light_dark rounded-lg px-2">
//           {/* Parallax container */}
//           <Parallax pages={8} className="relative" style={{ height: '100vh' }}>
//             {/* Hero Section */}
//             <ParallaxLayer offset={0} speed={1}>
//               <Hero />
//             </ParallaxLayer>

//             {/* Partners and Clients Section */}
//             <ParallaxLayer offset={1} speed={2.5}>
//               <PartnersAndClients />
//             </ParallaxLayer>

//             {/* Our Services Section */}
//             <ParallaxLayer offset={2} speed={1}>
//               <OurServices />
//             </ParallaxLayer>

//             {/* Testimonials Section with fast scroll speed for parallax effect */}
//             <ParallaxLayer offset={3} speed={2}>
//               <Testimonials />
//             </ParallaxLayer>

//             <ParallaxLayer offset={4} speed={1}>
//               <Technology />
//             </ParallaxLayer>

//             {/* Case Studies Section with fast scroll speed for parallax effect */}
//             <ParallaxLayer offset={5} speed={2}>
//               <CaseStudies />
//             </ParallaxLayer>

//             {/* Awards Section */}
//             <ParallaxLayer offset={6} speed={1}>
//               <Awards />
//             </ParallaxLayer>

//             {/* Contact Section */}
//             <ParallaxLayer offset={7} speed={1}>
//               <Contact />
//             </ParallaxLayer>
//           </Parallax>
//         </div>
//       </div>
//       {/* <div>
//         <Navbar />
//         <div className="bg-light_dark rounded-lg px-2">
//           <Hero />
//           <PartnersAndClients />
//           <OurServices />
//           <Testimonials />
//           <Technology />
//           <CaseStudies />
//           <Awards />
//           <Contact />
//         </div>
//       </div> */}
//     </>
//   );
// }



// "use client";

// import Awards from "@/components/Home/Awards";
// import CaseStudies from "@/components/Home/CaseStudies";
// import Contact from "@/components/Home/Contact";
// import Hero from "@/components/Home/Hero";
// import OurServices from "@/components/Home/OurServices";
// import PartnersAndClients from "@/components/Home/PartnersAndClients";
// import Technology from "@/components/Home/Technology";
// import Testimonials from "@/components/Home/Testimonials";
// import Navbar from "@/components/Navbar";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";


// export default function Home() {
//   return (
//     <>
//       <div className="max-w-[1200px] mx-auto">
//         <Navbar />
//         <div className="bg-light_dark rounded-lg h-screen">
//           {/* Parallax container */}
//           <Parallax pages={8} className=" hide-scroll !w-screen left-0 flex justify-center" innerStyle={{maxWidth: "1200px"}}>
//             {/* Hero Section */}
//             <ParallaxLayer offset={0} speed={1} factor={1.2} className="h-full w-full">
//               <Hero />
//             </ParallaxLayer>

//             {/* Partners and Clients Section */}
//             <ParallaxLayer offset={1} speed={1} className="h-full w-full" >
//               <PartnersAndClients />
//             </ParallaxLayer>

//             {/* Our Services Section */}
//             <ParallaxLayer offset={2} speed={1} className="h-full w-full">
//               <OurServices />
//             </ParallaxLayer>

//             {/* Testimonials Section with fast scroll speed for parallax effect */}
//             <ParallaxLayer offset={2.9} speed={1.5} className="h-full w-full">
//               <Testimonials />
//             </ParallaxLayer>

//             {/* Technology Section */}
//             <ParallaxLayer offset={3} speed={1.5} className="h-full w-full">
//               <Technology />
//             </ParallaxLayer>

//             {/* Case Studies Section with fast scroll speed for parallax effect */}
//             <ParallaxLayer offset={3.9} speed={2} className="h-full w-full">
//               <CaseStudies />
//             </ParallaxLayer>

//             {/* Awards Section */}
//             <ParallaxLayer offset={4} speed={2} className="h-full w-full">
//               <Awards />
//             </ParallaxLayer>

//             {/* Contact Section */}
//             <ParallaxLayer offset={4.9} speed={2} className="h-full w-full">
//               <Contact />
//             </ParallaxLayer>
//           </Parallax>
//         </div>
//       </div>
//     </>
//   );
// }




// "use client";

// import Awards from "@/components/Home/Awards";
// import CaseStudies from "@/components/Home/CaseStudies";
// import Contact from "@/components/Home/Contact";
// import Hero from "@/components/Home/Hero";
// import OurServices from "@/components/Home/OurServices";
// import PartnersAndClients from "@/components/Home/PartnersAndClients";
// import Technology from "@/components/Home/Technology";
// import Testimonials from "@/components/Home/Testimonials";
// import Navbar from "@/components/Navbar";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// import { useRouter } from "next/navigation";

// export default function Home() {
//     const router = useRouter()
//   return (
//     <>
//     <div className="big-device-section max-w-[1200px] mx-auto">
//       <Navbar router={router}/>
//       <div className="bg-light_dark rounded-lg h-screen">
//         {/* Parallax container */}
//         <Parallax pages={5.3} className="hide-scroll !w-screen left-0 flex justify-center" innerStyle={{ maxWidth: "1200px", height: "100vh", marginTop: '4rem' }}>
          
//           {/* Hero Section */}
//           <ParallaxLayer className="!h-fit" offset={0}>
//             <Hero router={router}/>
//           </ParallaxLayer>

//           {/* Partners and Clients Section */}
//           <ParallaxLayer className="!h-fit" offset={1.2}>
//             <PartnersAndClients />
//           </ParallaxLayer>

//           {/* Our Services Section */}
//           <ParallaxLayer className="!h-fit" offset={1.5}>
//             <OurServices />
//           </ParallaxLayer>

//           {/* Testimonials Section with fast scroll speed for parallax effect */}
//           <ParallaxLayer className="!h-fit" offset={2} speed={1}  style={{zIndex: 50}}>
//             <Testimonials />
//           </ParallaxLayer>

//           {/* Technology Section */}
//           <ParallaxLayer className="!h-fit" offset={2.5}>
//             <Technology router={router}/>
//           </ParallaxLayer>

//           {/* Case Studies Section with fast scroll speed for parallax effect */}
//           <ParallaxLayer className="!h-fit" offset={3} speed={1.5} style={{zIndex: 50}}>
//             <CaseStudies />
//           </ParallaxLayer>

//           {/* Awards Section */}
//           <ParallaxLayer className="!h-fit" offset={3.9}>
//             <Awards />
//           </ParallaxLayer>

//           {/* Contact Section */}
//           <ParallaxLayer className="!h-fit" offset={4.3} >
//             <Contact />
//           </ParallaxLayer>

//         </Parallax>
//       </div>
//     </div>
    
//     <div className="small-device-section">
//          <Navbar />
//          <div className="bg-light_dark rounded-lg px-2">
//            <Hero />
//            <div className="h-20"></div>
//            <PartnersAndClients />
//            <div className="h-20"></div>

//            <OurServices />
//            <div className="h-20"></div>

//            <Testimonials />
//            <div className="h-20"></div>

//            <Technology />
//            <div className="h-20"></div>

//            <CaseStudies />
//            <div className="h-20"></div>

//            <Awards />
//            <div className="h-20"></div>

//            <Contact />
//          </div>
//        </div>
//     </>
//   );
// }




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
    <div className="big-device-section max-w-[1200px] mx-auto">
      <Navbar router={router}/>
      <div className="bg-light_dark rounded-lg h-screen">
        {/* Parallax container */}
        <Parallax pages={5} className="hide-scroll !w-screen left-0 flex justify-center" innerStyle={{ maxWidth: "1200px", height: "100vh", marginTop: '4rem' }}>
          
          {/* Hero Section */}
          <ParallaxLayer className="!h-fit" offset={0} factor={1.5}>
            <Hero router={router}/>
            <div className="h-20"></div>
            <PartnersAndClients />
            <div className="h-20"></div>
            <OurServices />
          </ParallaxLayer>

          {/* Testimonials Section with fast scroll speed for parallax effect */}
          <ParallaxLayer className="!h-fit" offset={2.2} speed={1}  style={{zIndex: 50}}>
            <Testimonials />
          </ParallaxLayer>

          {/* Technology Section */}
          <ParallaxLayer className="!h-fit" offset={2.5}>
            <Technology router={router}/>
          </ParallaxLayer>

          {/* Case Studies Section with fast scroll speed for parallax effect */}
          <ParallaxLayer className="!h-fit" offset={3} speed={1.5} style={{zIndex: 50}}>
            <CaseStudies />
          </ParallaxLayer>

          {/* Awards Section */}
          <ParallaxLayer className="!h-fit" offset={3.5}>
            <Awards />
            <div className="h-20"></div>
            <Contact />
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
    
    <div className="small-device-section">
         <Navbar />
         <div className="bg-light_dark rounded-lg px-2">
           <Hero />
           <div className="h-20"></div>
           <PartnersAndClients />
           <div className="h-20"></div>

           <OurServices />
           <div className="h-20"></div>

           <Testimonials />
           <div className="h-20"></div>

           <Technology />
           <div className="h-20"></div>

           <CaseStudies />
           <div className="h-20"></div>

           <Awards />
           <div className="h-20"></div>

           <Contact />
         </div>
       </div>
    </>
  );
}
