"use client";

import React, { useState } from "react";
import "@/styles/Home/Contact.css";
import {
  FaCopyright,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaRegCopyright,
  FaTwitter,
} from "react-icons/fa6";

export default function Contact() {
  // State for active filters
  const [activeService, setActiveService] = useState(null);
  const [activeBudget, setActiveBudget] = useState(null);

  return (
    <div className="contact-form flex items-stretch flex-row-reverse justify-between items-start gap-10 px-2">
      <div className="contact-form">
        <p className="text-gray">CONTACT US</p>
        <h1 className="mb-3">Wanna project with us?</h1>

        {/* Services Section */}
        <div className="mb-4">
          <p className="mb-2 font-bold">Services</p>
          <div className="bg-btnHoverDark rounded-lg flex flex-wrap max-w-[50rem]">
            {[
              "CUSTOM SOFTWARE DEVELOPMENT",
              "SAAS DEVELOPMENT",
              "BI & BIG DATA MANAGEMENT",
              "STAFF AUGMENTATION",
              "SOFTWARE ENGINEERING",
            ].map((category) => (
              <button
                key={category}
                onClick={() => setActiveService(category)}
                className={`px-5 py-3 technology-btn ${
                  activeService === category
                    ? "bg-white text-black rounded-lg"
                    : ""
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Budget Section */}
        <div className="mb-4">
          <p className="font-bold mb-2">Budget is $</p>
          <div className="bg-btnHoverDark rounded-lg flex flex-wrap w-fit">
            {["5-10K", "10-50K", "MORE THAN 50K"].map((budget) => (
              <button
                key={budget}
                onClick={() => setActiveBudget(budget)}
                className={`px-5 py-3 technology-btn rounded-lg ${
                  activeBudget === budget ? "bg-white text-black" : ""
                }`}
              >
                {budget}
              </button>
            ))}
          </div>
        </div>

        {/* Contact Form Inputs */}
        <div className="flex flex-col gap-3">
          <div className="flex gap-4 flex-wrap mb-5">
            <input type="text" placeholder="Name" className="input-field" />
            <input type="email" placeholder="Email" className="input-field" />
          </div>
          <input
            type="text"
            placeholder="Project details (optional)"
            className="input-field mb-5"
          />
          <button
            className="gradient-btn !px-20"
            style={{ alignSelf: "start" }}
          >
            Send
          </button>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="contact-info flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center mb-10">
            <div>
              <p className="text-gray">PROJECT INQUIRIES</p>
              <p>hello@seopage1.com</p>
            </div>
            <div>
              <p className="text-gray">CAREERS</p>
              <p>HR@seopage1.com</p>
            </div>
          </div>

          {/* Office Locations */}
          <div>
            <p className="text-gray">OUR OFFICES</p>
            <div className="flex flex-wrap justify-between gap-10">
              <div>
                <p>UKRAINE</p>
                <div className="text-gray">
                  <p>
                    Volhohrads'ka, 26a <br />
                    Zaporizhzhia, 69001
                  </p>
                </div>
              </div>
              <div>
                <p>POLAND</p>
                <div className="text-gray">
                  <p>
                    28 Czerwca 1956 R. <br />
                    Poznan, 61001
                  </p>
                </div>
              </div>
              <div>
                <p>ESTONIA</p>
                <div className="text-gray">
                  <p>
                    Vana-Posti, 8 <br />
                    Tallin, 87301
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-gray">FOLLOW US</p>
          <div className="flex gap-4 mt-2">
            <div className="bg-[#666262] text-black p-2 rounded-full">
              <FaInstagram size={20} />
            </div>
            <div className="bg-[#666262] text-black p-2 rounded-full">
              <FaFacebook size={20} />
            </div>
            <div className="bg-[#666262] text-black p-2 rounded-full">
              <FaLinkedin size={20} />
            </div>
            <div className="bg-[#666262] text-black p-2 rounded-full">
              <FaTwitter size={20} />
            </div>
          </div>
          <p className="flex gap-1 items-center mt-2">
            <FaRegCopyright size={20} /> 2024 Seopage1, All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
