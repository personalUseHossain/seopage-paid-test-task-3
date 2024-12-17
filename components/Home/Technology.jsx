"use client";
import React, { useState } from "react";
import "@/styles/Home/Technology.css";
import Image from "next/image";

import "@/styles/Home/Technology.css";

// Adding the icons for each technology (same icon used for simplicity)
import JS from "@/assets/technology icons/JS.svg";
import CSS from "@/assets/technology icons/CSS.svg";
import ReactIcon from "@/assets/technology icons/React.svg";
import AWS from "@/assets/technology icons/AWS.svg";
import Azure from "@/assets/technology icons/Azure.svg";
import HTML from "@/assets/technology icons/HTML.svg";
import Node from "@/assets/technology icons/Node.svg";
import Mongodb from "@/assets/technology icons/Mongodb.svg";
import PHP from "@/assets/technology icons/PHP.svg";
import MySQL from "@/assets/technology icons/MySQL.svg";

// Technology data with categories
const technologies = [
  { name: "HTML", category: "FRONTEND", img: HTML, size: 80 },
  { name: "CSS", category: "FRONTEND", img: CSS, size: 80 },
  { name: "MySQL", category: "DATABASE", img: MySQL, size: 80  },

  { name: "Azure", category: "CLOUD", img: Azure, size: 80 },
  { name: "JS", category: "FRONTEND", img: JS, size: 70  },
  { name: "AWS", category: "CLOUD", img: AWS, size: 70  },
  { name: "Node", category: "BACKEND", img: Node, size: 80  },
  { name: "MongoDB", category: "DATABASE", img: Mongodb, size: 80  },
  { name: "PHP", category: "BACKEND", img: PHP, size: 80  },
  { name: "React", category: "FRONTEND", img: ReactIcon, size: 80 },

];

export default function Technology({router}) {
  // State to manage the active filter
  const [activeFilter, setActiveFilter] = useState("ALL");

  // Filter the technologies based on the active filter
  const filteredTechnologies =
    activeFilter === "ALL"
      ? technologies
      : technologies.filter((tech) => tech.category === activeFilter);

  return (
    <div className="px-2">
      <div className="grid mb-50">
        <h1>Technology Stack</h1>
        <p className="technology-section-text w-full md:w-1/2 lg:w-1/3 mr-10 mt-5 text-lg text-gray-500">
          Work with our highly experienced desktop, web, and mobile developers.
          Our developers use the latest technology, frameworks, and components
          to create solutions that combine a strong technical server with an
          easy-to-use modern design.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-5 justify-between items-center mt-10 mb-8">
        <div className="bg-btnHoverDark rounded-lg flex flex-wrap">
          {/* All and category buttons */}
          {["ALL", "FRONTEND", "BACKEND", "DATABASE", "CLOUD"].map(
            (category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)} // Update the filter when clicked
                className={`px-5 py-3 technology-btn rounded-lg ${
                  activeFilter === category ? "bg-white text-black" : ""
                }`}
              >
                {category}
              </button>
            )
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button className="gradient-btn px-6 py-3 text-white font-semibold rounded-md" onClick={()=> router.push('/comming-soon')} >
            BUILD YOUR TEAM
          </button>
          <button className="normal-btn px-6 py-3 text-black font-semibold rounded-md" onClick={()=> router.push('/comming-soon')} >
            LEARN MORE
          </button>
        </div>
      </div>

      {/* Technology Icons Section */}
      <div className="flex gap-20 overflow-scroll hide-scroll">
        {filteredTechnologies.map((tech, idx) => (
          <div key={idx} className="grid place-items-center flex-shrink-0">
            <Image
              style={{width: "6rem", height: "6rem"}}
              src={tech.img}
              alt={tech.name}
            />
            <p className="text-center mt-3">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
