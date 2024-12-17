'use client'

import React from "react";
import HertzLogo from "@/assets/clients_partners/logo-1.svg";
import User1 from "@/assets/testimonials/user/user-1.png";
import Testimonial1 from "@/assets/testimonials/testimonial/testimonial-1.png";
import { RxArrowTopRight } from "react-icons/rx";
import Image from "next/image";
import ClutchLogo from "@/assets/ClutchLogo.svg";
import Stars from "../utils/Stars";

import "@/styles/Home/Testimonials.css";

export default function Testimonials() {
  const testimonialsData = [
    {
      img: Testimonial1,
      logo: HertzLogo,
      paragraph:
        "</Develoop> team members, have been great to work with, bringing a log of attention to detail, expertise, and patience with our frequently changing requirements.",
      starCount: 5,
      reviewer: {
        avater: User1,
        name: "Leslie Alexander",
        passion: "Dog Trainer",
      },
    },
    {
      img: Testimonial1,
      logo: HertzLogo,
      paragraph:
        "</Develoop> team members, have been great to work with, bringing a log of attention to detail, expertise, and patience with our frequently changing requirements.",
      starCount: 5,
      reviewer: {
        avater: User1,
        name: "Leslie Alexander",
        passion: "Dog Trainer",
      },
    },
    {
      img: Testimonial1,
      logo: HertzLogo,
      paragraph:
        "</Develoop> team members, have been great to work with, bringing a log of attention to detail, expertise, and patience with our frequently changing requirements.",
      starCount: 5,
      reviewer: {
        avater: User1,
        name: "Leslie Alexander",
        passion: "Dog Trainer",
      },
    },
    {
      img: Testimonial1,
      logo: HertzLogo,
      paragraph:
        "</Develoop> team members, have been great to work with, bringing a log of attention to detail, expertise, and patience with our frequently changing requirements.",
      starCount: 5,
      reviewer: {
        avater: User1,
        name: "Leslie Alexander",
        passion: "Dog Trainer",
      },
    },
    {
      img: Testimonial1,
      logo: HertzLogo,
      paragraph:
        "</Develoop> team members, have been great to work with, bringing a log of attention to detail, expertise, and patience with our frequently changing requirements.",
      starCount: 5,
      reviewer: {
        avater: User1,
        name: "Leslie Alexander",
        passion: "Dog Trainer",
      },
    },
    {
      img: Testimonial1,
      logo: HertzLogo,
      paragraph:
        "</Develoop> team members, have been great to work with, bringing a log of attention to detail, expertise, and patience with our frequently changing requirements.",
      starCount: 5,
      reviewer: {
        avater: User1,
        name: "Leslie Alexander",
        passion: "Dog Trainer",
      },
    },
  ];
  return (
    
    <div className="py-5 px-5 bg-white text-black rounded-lg">
      <div className="flex justify-between items-center mb-5 flex-wrap gap-4">
        <h1>Testimonials</h1>
        <button className="flex gap-1 border-gray border-[1px] p-1 rounded-lg text-gray">
          SEE MORE
          <RxArrowTopRight size={24} />
        </button>
      </div>

      <div className="flex gap-3 overflow-x-scroll hide-scroll">
  {testimonialsData.map((testimonial, idx) => (
    <div
      key={idx}
      className="single-testimonial-card flex gap-3 bg-[whitesmoke] flex-shrink-0 w-[80%] rounded-2xl"
    >
      <div className="testimonial-img relative w-[100%] aspect-square overflow-hidden rounded-xl">
        <Image
          src={testimonial.img}
          alt="testimonial"
          className="w-full h-full object-cover"
        />
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Play Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/50 p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-black"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="testimonial-card-info flex flex-col justify-between py-3 px-2">
        <Image src={testimonial.logo} alt="testimonial logo" />
        <p className="font-bold">{testimonial.paragraph}</p>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 items-center">
            <Image
              src={ClutchLogo}
              height={50}
              width={50}
              alt="Clutch Logo"
            />
            <Stars count={5} size={15} />
          </div>
          <div className="flex gap-2 items-center">
            <Image
              src={testimonial.reviewer.avater}
              height={30}
              width={30}
              alt="Seopage1 testimonial giver avater"
            />
            <div>
              <h3>{testimonial.reviewer.name}</h3>
              <p>{testimonial.reviewer.passion}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

    </div>
  );
}