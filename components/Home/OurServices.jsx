// import React from "react";

// import CodeIcon from "@/assets/OurServiceIcons/Code.svg";
// import BigData from "@/assets/OurServiceIcons/BigData.svg";
// import Software from "@/assets/OurServiceIcons/Software.svg";
// import Team from "@/assets/OurServiceIcons/Team.svg";
// import Saas from "@/assets/OurServiceIcons/Saas.svg";
// import Advisory from "@/assets/OurServiceIcons/Advisory.svg";
// import { RxArrowTopRight } from "react-icons/rx";
// import Image from "next/image";

// export default function OurServices() {
//   const ourServicesData = [
//     {
//       heading: "Custom Software Development",
//       points: [
//         "Custom software solution",
//         "Web and mobile applicatins development",
//         "Domain expertise",
//         "Large-scaled technical stack",
//       ],
//       icon: CodeIcon,
//     },
//     {
//       heading: "BI & Big DataManagement",
//       points: [
//         "Big Data Analytics",
//         "Data Warehouses for enhanced ETL        operations",
//         "Real-time reports of your business      operations",
//         "Data management costs optimization",
//       ],
//       icon: BigData,
//     },
//     {
//       heading: "Software Re-engineering",
//       points: [
//         "Legacy Software modernization ",
//         "Third-party data integration",
//         "Functionality Expanding",
//         "Infrastructure Setup",
//       ],
//       icon: Software,
//     },
//     {
//       heading: "Team Augmentation",
//       points: [
//         "Team members with the right skills and      experience",
//         "Temporary shortage or long-time engagement",
//         "Team ramp-up",
//       ],
//       icon: Team,
//     },
//     {
//       heading: "SaaS Development",
//       points: [
//         "Building a Saas product from scratch",
//         "Tweaking an existing SaaS solution",
//         "Successful app transormation into SaaS",
//         "Expanding a localized SaaS app reach in new       market",
//       ],
//       icon: Saas,
//     },
//     {
//       heading: "IT Consulting and Digital advisory",
//       points: [
//         "Select the right technology for your business goal",
//         "Validate your product idea before investing      in it",
//         "Attract investment with an elaborate product prototype",
//         "Add scalability and flexibility to your      business",
//       ],
//       icon: Advisory,
//     },
//   ];
//   return (
//     <div className="mt-20">
//       <h1 className="midiumHeading mb-3">Our services</h1>
//       <div className="flex flex-wrap gap-3">
//         {ourServicesData.map((service, idx) => {
//           return (
//             <div key={idx} className="bg-btnHoverDark p-3 rounded-lg grid w-full md:w-auto">
//               <div className="flex justify-between mb-7">
//                 <h2>{service.heading}</h2>
//                 <RxArrowTopRight size={24} />
//               </div>
//               {service.points.map((point, idx) => {
//                 return (
//                   <p key={`point ${idx}`} className="text-gray">
//                     - {point}
//                   </p>
//                 );
//               })}
//               <Image
//                 className="mt-10 justify-self-end"
//                 src={service.icon}
//                 height={50}
//                 width={50}
//                 alt={service.heading}
//               />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

import React from "react";
import { RxArrowTopRight } from "react-icons/rx";

import "@/styles/Home/OurServices.css";
import Link from "next/link";

export default function OurServices() {
  const ourServicesData = [
    {
      heading: "Custom Software Development",
      points: [
        "Custom software solution",
        "Web and mobile applicatins development",
        "Domain expertise",
        "Large-scaled technical stack",
      ],
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 80 60"
          fill="none"
          class="service-icon" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M80 30L61.1433 48.8567L56.43 44.1433L70.5733 30L56.43 15.8567L61.1433 11.1433L80 30ZM9.42667 30L23.57 44.1433L18.8567 48.8567L0 30L18.8567 11.1433L23.5667 15.8567L9.42667 30ZM32.6267 60H25.5333L47.3733 0H54.4667L32.6267 60Z"
            fill="#525252"
            class="service-icon-path" 
          />
        </svg>
      ),
    },
    {
      heading: "BI & Big DataManagement",
      points: [
        "Big Data Analytics",
        "Data Warehouses for enhanced ETL operations",
        "Real-time reports of your business operations",
        "Data management costs optimization",
      ],
      icon: (
        <svg
  width="60"
  height="60"
  viewBox="0 0 81 80"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class="service-icon" 
>
  <path
    d="M37 63.3333V30H13.6667V63.3333H37ZM37 23.3333V13.3333C37 12.4493 37.3512 11.6014 37.9763 10.9763C38.6014 10.3512 39.4493 10 40.3333 10H70.3333C71.2174 10 72.0652 10.3512 72.6903 10.9763C73.3155 11.6014 73.6667 12.4493 73.6667 13.3333V66.6667C73.6667 67.5507 73.3155 68.3986 72.6903 69.0237C72.0652 69.6488 71.2174 70 70.3333 70H10.3333C9.44926 70 8.60142 69.6488 7.9763 69.0237C7.35117 68.3986 6.99998 67.5507 6.99998 66.6667V26.6667C6.99998 25.7826 7.35117 24.9348 7.9763 24.3096C8.60142 23.6845 9.44926 23.3333 10.3333 23.3333H37ZM43.6667 16.6667V63.3333H67V16.6667H43.6667ZM17 53.3333H33.6667V60H17V53.3333ZM47 53.3333H63.6667V60H47V53.3333ZM47 43.3333H63.6667V50H47V43.3333ZM47 33.3333H63.6667V40H47V33.3333ZM17 43.3333H33.6667V50H17V43.3333Z"
    class="service-icon-path" 
    fill="#525252"
  />
</svg>

      ),
    },
    {
      heading: "Software Re-engineering",
      points: [
        "Legacy Software modernization ",
        "Third-party data integration",
        "Functionality Expanding",
        "Infrastructure Setup",
      ],
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="service-icon" 
        >
          <g clip-path="url(#clip0_240_1506)">
            <path
              d="M18.21 14.7765C24.2586 9.5354 31.9966 6.65537 40 6.66654C58.41 6.66654 73.3334 21.5899 73.3334 39.9999C73.3334 47.1199 71.1 53.7199 67.3 59.1332L56.6667 39.9999H66.6667C66.6671 34.7719 65.1308 29.6592 62.2489 25.2974C59.367 20.9356 55.2665 17.5171 50.4573 15.4669C45.6481 13.4168 40.3424 12.8255 35.1999 13.7666C30.0574 14.7077 25.3049 17.1395 21.5334 20.7599L18.21 14.7765ZM61.79 65.2232C55.7415 70.4643 48.0034 73.3444 40 73.3332C21.59 73.3332 6.66669 58.4099 6.66669 39.9999C6.66669 32.8799 8.90002 26.2799 12.7 20.8665L23.3334 39.9999H13.3334C13.3329 45.2278 14.8692 50.3405 17.7511 54.7024C20.6331 59.0642 24.7336 62.4827 29.5428 64.5328C34.3519 66.5829 39.6576 67.1742 44.8002 66.2331C49.9427 65.2921 54.6952 62.8602 58.4667 59.2399L61.79 65.2232Z"
              class="service-icon-path" 
    fill="#525252"
            />
          </g>
          <defs>
            <clipPath id="clip0_240_1506">
              <rect width="80" height="80" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      heading: "Team Augmentation",
      points: [
        "Team members with the right skills and experience",
        "Temporary shortage or long-time engagement",
        "Team ramp-up",
      ],
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 81 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="service-icon" 
        >
          <path
            d="M40.6667 36.667C45.0869 36.667 49.3262 38.4229 52.4518 41.5485C55.5774 44.6742 57.3333 48.9134 57.3333 53.3337V73.3337H50.6667V53.3337C50.6668 50.783 49.6922 48.3286 47.9424 46.4728C46.1925 44.617 43.7996 43.5 41.2533 43.3503L40.6667 43.3337C38.116 43.3335 35.6616 44.3081 33.8058 46.0579C31.95 47.8078 30.833 50.2007 30.6833 52.747L30.6667 53.3337V73.3337H24V53.3337C24 48.9134 25.7559 44.6742 28.8815 41.5485C32.0072 38.4229 36.2464 36.667 40.6667 36.667ZM19 46.667C19.93 46.667 20.8333 46.777 21.7 46.9803C21.1301 48.677 20.7926 50.4431 20.6967 52.2303L20.6667 53.3337V53.6203C20.2835 53.4832 19.885 53.3937 19.48 53.3537L19 53.3337C17.7571 53.3337 16.5587 53.7967 15.6386 54.6324C14.7185 55.4681 14.1427 56.6165 14.0233 57.8537L14 58.3337V73.3337H7.33333V58.3337C7.33333 55.2395 8.56249 52.272 10.7504 50.0841C12.9383 47.8962 15.9058 46.667 19 46.667ZM62.3333 46.667C65.4275 46.667 68.395 47.8962 70.5829 50.0841C72.7708 52.272 74 55.2395 74 58.3337V73.3337H67.3333V58.3337C67.3333 57.0907 66.8703 55.8924 66.0346 54.9723C65.1989 54.0522 64.0505 53.4763 62.8133 53.357L62.3333 53.3337C61.75 53.3337 61.19 53.4337 60.6667 53.617V53.3337C60.6667 51.1137 60.3067 48.9803 59.6367 46.987C60.5 46.777 61.4033 46.667 62.3333 46.667ZM19 26.667C21.2101 26.667 23.3297 27.545 24.8926 29.1078C26.4554 30.6706 27.3333 32.7902 27.3333 35.0003C27.3333 37.2105 26.4554 39.3301 24.8926 40.8929C23.3297 42.4557 21.2101 43.3337 19 43.3337C16.7899 43.3337 14.6702 42.4557 13.1074 40.8929C11.5446 39.3301 10.6667 37.2105 10.6667 35.0003C10.6667 32.7902 11.5446 30.6706 13.1074 29.1078C14.6702 27.545 16.7899 26.667 19 26.667ZM62.3333 26.667C64.5435 26.667 66.6631 27.545 68.2259 29.1078C69.7887 30.6706 70.6667 32.7902 70.6667 35.0003C70.6667 37.2105 69.7887 39.3301 68.2259 40.8929C66.6631 42.4557 64.5435 43.3337 62.3333 43.3337C60.1232 43.3337 58.0036 42.4557 56.4408 40.8929C54.878 39.3301 54 37.2105 54 35.0003C54 32.7902 54.878 30.6706 56.4408 29.1078C58.0036 27.545 60.1232 26.667 62.3333 26.667ZM19 33.3337C18.558 33.3337 18.134 33.5093 17.8215 33.8218C17.5089 34.1344 17.3333 34.5583 17.3333 35.0003C17.3333 35.4424 17.5089 35.8663 17.8215 36.1788C18.134 36.4914 18.558 36.667 19 36.667C19.442 36.667 19.8659 36.4914 20.1785 36.1788C20.4911 35.8663 20.6667 35.4424 20.6667 35.0003C20.6667 34.5583 20.4911 34.1344 20.1785 33.8218C19.8659 33.5093 19.442 33.3337 19 33.3337ZM62.3333 33.3337C61.8913 33.3337 61.4674 33.5093 61.1548 33.8218C60.8423 34.1344 60.6667 34.5583 60.6667 35.0003C60.6667 35.4424 60.8423 35.8663 61.1548 36.1788C61.4674 36.4914 61.8913 36.667 62.3333 36.667C62.7754 36.667 63.1993 36.4914 63.5118 36.1788C63.8244 35.8663 64 35.4424 64 35.0003C64 34.5583 63.8244 34.1344 63.5118 33.8218C63.1993 33.5093 62.7754 33.3337 62.3333 33.3337ZM40.6667 6.66699C44.2029 6.66699 47.5943 8.07175 50.0948 10.5722C52.5952 13.0727 54 16.4641 54 20.0003C54 23.5365 52.5952 26.9279 50.0948 29.4284C47.5943 31.9289 44.2029 33.3337 40.6667 33.3337C37.1304 33.3337 33.7391 31.9289 31.2386 29.4284C28.7381 26.9279 27.3333 23.5365 27.3333 20.0003C27.3333 16.4641 28.7381 13.0727 31.2386 10.5722C33.7391 8.07175 37.1304 6.66699 40.6667 6.66699ZM40.6667 13.3337C38.8986 13.3337 37.2029 14.036 35.9526 15.2863C34.7024 16.5365 34 18.2322 34 20.0003C34 21.7684 34.7024 23.4641 35.9526 24.7144C37.2029 25.9646 38.8986 26.667 40.6667 26.667C42.4348 26.667 44.1305 25.9646 45.3807 24.7144C46.631 23.4641 47.3333 21.7684 47.3333 20.0003C47.3333 18.2322 46.631 16.5365 45.3807 15.2863C44.1305 14.036 42.4348 13.3337 40.6667 13.3337Z"
            class="service-icon-path" 
    fill="#525252"
          />
        </svg>
      ),
    },
    {
      heading: "SaaS Development",
      points: [
        "Building a Saas product from scratch",
        "Tweaking an existing SaaS solution",
        "Successful app transormation into SaaS",
        "Expanding a localized SaaS app reach in new market",
      ],
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 81 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="service-icon" 
        >
          <path
            d="M57 70.0002H23.6666C18.9441 70.0032 14.3728 68.3349 10.7623 65.2908C7.15173 62.2466 4.73488 58.0231 3.93966 53.3679C3.14444 48.7128 4.02217 43.9264 6.41741 39.8564C8.81266 35.7863 12.5709 32.6951 17.0266 31.1302C16.8757 27.9757 17.3667 24.8235 18.4698 21.8643C19.573 18.9052 21.2654 16.2008 23.4445 13.9149C25.6235 11.6291 28.244 9.80939 31.147 8.56606C34.05 7.32272 37.1752 6.68164 40.3333 6.68164C43.4914 6.68164 46.6166 7.32272 49.5196 8.56606C52.4227 9.80939 55.0431 11.6291 57.2222 13.9149C59.4012 16.2008 61.0936 18.9052 62.1968 21.8643C63.2999 24.8235 63.7909 27.9757 63.64 31.1302C68.0957 32.6951 71.854 35.7863 74.2492 39.8564C76.6445 43.9264 77.5222 48.7128 76.727 53.3679C75.9317 58.0231 73.5149 62.2466 69.9044 65.2908C66.2938 68.3349 61.7225 70.0032 57 70.0002ZM57 30.0002C57.0008 27.7769 56.5568 25.5759 55.6941 23.5268C54.8313 21.4776 53.5674 19.6219 51.9765 18.0687C50.3857 16.5155 48.5002 15.2963 46.431 14.4828C44.3619 13.6694 42.1508 13.2782 39.9282 13.3322C37.7055 13.3863 35.5161 13.8845 33.4889 14.7975C31.4618 15.7105 29.6377 17.0199 28.1243 18.6486C26.6108 20.2773 25.4385 22.1923 24.6764 24.2809C23.9143 26.3696 23.5778 28.5896 23.6866 30.8102L23.92 35.7702L19.24 37.4169C16.275 38.4654 13.7758 40.5278 12.1836 43.24C10.5915 45.9521 10.0087 49.1395 10.5382 52.2395C11.0677 55.3396 12.6754 58.1529 15.0775 60.1828C17.4797 62.2126 20.5217 63.3286 23.6666 63.3335H57C59.4544 63.3327 61.8611 62.6544 63.9547 61.3734C66.0483 60.0923 67.7477 58.2582 68.8657 56.0731C69.9836 53.888 70.4767 51.4368 70.2906 48.9893C70.1045 46.5419 69.2465 44.1934 67.811 42.2024C66.3756 40.2115 64.4184 38.6554 62.1552 37.7056C59.8919 36.7558 57.4104 36.4492 54.984 36.8195C52.5577 37.1898 50.2806 38.2227 48.4037 39.8043C46.5268 41.386 45.1229 43.455 44.3466 45.7835L38.02 43.6735C39.3494 39.6915 41.8976 36.2284 45.3038 33.7745C48.7101 31.3206 52.8019 30.0002 57 30.0002Z"
            class="service-icon-path" 
    fill="#525252"
          />
        </svg>
      ),
    },
    {
      heading: "IT Consulting and Digital advisory",
      points: [
        "Select the right technology for your business goal",
        "Validate your product idea before investing in it",
        "Attract investment with an elaborate product prototype",
        "Add scalability and flexibility to your business",
      ],
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="service-icon" 
        >
          <path
            d="M66.6667 30V16.6667H13.3334V30H66.6667ZM66.6667 36.6667H13.3334V63.3333H66.6667V36.6667ZM10 10H70C70.8841 10 71.7319 10.3512 72.357 10.9763C72.9822 11.6014 73.3334 12.4493 73.3334 13.3333V66.6667C73.3334 67.5507 72.9822 68.3986 72.357 69.0237C71.7319 69.6488 70.8841 70 70 70H10C9.11597 70 8.26812 69.6488 7.643 69.0237C7.01788 68.3986 6.66669 67.5507 6.66669 66.6667V13.3333C6.66669 12.4493 7.01788 11.6014 7.643 10.9763C8.26812 10.3512 9.11597 10 10 10ZM16.6667 40H26.6667V56.6667H16.6667V40ZM16.6667 20H23.3334V26.6667H16.6667V20ZM30 20H36.6667V26.6667H30V20Z"
            class="service-icon-path" 
    fill="#525252"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="px-2">
      <h1 className="midiumHeading mb-3">Our services</h1>
      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {ourServicesData.map((service, idx) => {
          return (
            <Link href={'/comming-soon'}
              key={idx}
              className="service-card bg-btnHoverDark p-5 rounded-lg flex flex-col justify-between"
            >
              <div className="flex justify-between mb-5">
                <h2 className="font-semibold text-xl service-card-heading">{service.heading}</h2>
                <div className="service-top-icon  rounded-md">
                <RxArrowTopRight className=" p-2" size={35} />
                </div>
              </div>
              <div>
                {service.points.map((point, idx) => (
                  <p key={`point-${idx}`} className="text-gray mb-2">
                    - {point}
                  </p>
                ))}
              </div>
              <div className="mt-10 service-icon" style={{ alignSelf: "end" }}>
                {service.icon}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
