import React from "react";
import "@/styles/Home/Hero.css";
import Image from "next/image";

import HeroSectionTexture from "@/assets/HeroSectionTexture.svg";
import UpworkLogo from "@/assets/upwork_logo.svg";
import Stars from "../utils/Stars";
import HeroImage from "@/assets/Humans.png";

export default function Hero({router}) {
  return (
    <div className="flex flex-col justify-center items-center px-2">
      <div className="mt-20 big-device-hero-section-heading">
        <div>
          <div className="flex gap-3">
            <h1>We turn ideas</h1>
            <Image
              src={HeroSectionTexture}
              alt="SeoPage1 Hero section texture"
              height={200}
              width={200}
            />
          </div>
          <h1 className=" hero-section-bottom-heading">into your projects</h1>
        </div>
      </div>

      <div className="mt-20 small-device-hero-section-heading">
        <div>
          <div className=" gap-3">
          <Image
              src={HeroSectionTexture}
              alt="SeoPage1 Hero section texture"
              height={200}
              width={200}
            />
            <h1>We turn ideas into your projects</h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between items-start">
      <p className="text-xl mt-10 text-gray">
          Empowering your business by strategy and our experience. <br /> We care about
          our employees
        </p>

      <div className="flex gap-3  my-10">
        <button onClick={()=> router.push('/comming-soon')} className="gradient-btn">
          LET&apos;S DISCUSS YOUR PROJECT
        </button>
        <button onClick={()=> router.push('/comming-soon')}  className="normal-btn">CASE STUDIES</button>
      </div>

      <div className="flex gap-7 mb-10">
        <div className="flex gap-1">
          <Image src={UpworkLogo} height={40} width={40} alt="Upwork Logo" />
          <div>
            <Stars count={5} size={18} />
            <p className="text-gray text-[14px]">42 REVIEWS</p>
          </div>
        </div>
        <div className="flex gap-1">
          <Image src={UpworkLogo} height={40} width={40} alt="Upwork Logo" />
          <div>
            <Stars count={5} size={18} />
            <p className="text-gray text-[14px]">11 REVIEWS</p>
          </div>
        </div>
      </div>
      </div>
      <Image src={HeroImage} alt="Humans" />
    </div>
  );
}
