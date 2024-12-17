'use client'

import React from 'react';
import Image from 'next/image';
import '@/styles/Home/PartnersAndClients.css'

import Logo1 from '@/assets/clients_partners/Logo-1.png';
import Logo2 from '@/assets/clients_partners/Logo-2.png';
import Logo3 from '@/assets/clients_partners/Logo-3.png';
import Logo4 from '@/assets/clients_partners/Logo-4.png';

export default function PartnersAndClients() {
  const Logos = [
    Logo1, Logo2, Logo3, Logo4, Logo1, Logo2, Logo3, Logo4,
  ];

  return (
    <div className="px-2" tabIndex="0">
      <h1 className="mb-5 midiumHeading">Partners & Clients</h1>
      <div
        className="flex overflow-x-auto hide-scroll space-x-6"
        style={{
          scrollBehavior: 'smooth', // Enables smooth scroll on drag and key press
        }}
      >
        {Logos.map((logo, idx) => (
          <div key={idx} className="flex-shrink-0">
            <Image src={logo} alt="Partners Logo" height={48} width={240} />
          </div>
        ))}
      </div>
    </div>
  );
}
