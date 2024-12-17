// import React from "react";
// import CaseStudie1 from "@/assets/case_studies/pic-1.png";
// import CaseStudie2 from "@/assets/case_studies/pic-2.jpg";
// import CaseStudie3 from "@/assets/case_studies/pic-3.jpg";
// import CaseStudie4 from "@/assets/case_studies/pic-4.jpg";
// import { RxArrowTopRight } from "react-icons/rx";
// import Image from "next/image";
// import "@/styles/Home/CaseStudies.css";

// export default function CaseStudies() {
//   const caseStudiesData = [
//     {
//       idx: '01',
//       img: CaseStudie1,
//       name: "AUTORINK",
//       category: ["Cryptocurrency", "Mobile & Web", "Scotland"],
//       paragraph:
//         "Online platform that helps sellers identify the best option to sell their product",
//         colorPallet: {
//           name: "text-white",
//           category: "text-gray",
//           paragraph: "text-gray",
//           button: "text-white"
//         }
//     },
//     {
//       idx: '02',
//       img: CaseStudie2,
//       name: "CROWDY",
//       category: ["Healthcare", "Mobile", "USA"],
//       paragraph:
//         "Online platform that helps sellers identify the best option to sell their product",
//         colorPallet: {
//           name: "text-white",
//           category: "text-white",
//           paragraph: "text-white",
//           button: "text-black"
//         }
//     },
//     {
//       idx: '03',
//       img: CaseStudie3,
//       name: "BYTE",
//       category: ["Music", "Mobile", "USA"],
//       paragraph:
//         "Online platform that helps sellers identify the best option to sell their product",
//         colorPallet: {
//           name: "text-white",
//           category: "text-gray",
//           paragraph: "text-gray",
//           button: "text-white"
//         }
//     },
//     {
//       idx: '04',
//       img: CaseStudie4,
//       name: "SEEING",
//       category: ["Music", "Mobile", "USA"],
//       paragraph:
//         "Online platform that helps sellers identify the best option to sell their product",
//       colorPallet: {
//         name: "text-white",
//         category: "text-gray",
//         paragraph: "text-gray",
//         button: "text-white"
//       }
//     },
//   ];

//   return (
//     <div className="my-20 py-20 px-5 bg-white text-black rounded-lg">
//       <div className="flex justify-between items-center mb-5">
//         <h1>Case Studies</h1>
//         <button className="flex gap-1 border-gray border-[1px] p-1 rounded-lg text-gray">
//           SEE MORE
//           <RxArrowTopRight size={24} />
//         </button>
//       </div>

//       <div className="flex gap-3 overflow-x-scroll hide-scroll text-white">
//   {caseStudiesData.map((caseStudie) => (
//     <div
//       key={caseStudie.idx}
//       className="relative flex-shrink-0 w-[80%] bg-[whitesmoke] rounded-2xl overflow-hidden min-h-[30rem]"
//     >
//       {/* Image as background */}
//       <Image
//         src={caseStudie.img}
//         alt={caseStudie.name}
//         className="absolute top-0 left-0 w-full h-full object-cover"
//       />

//       {/* Text content */}
//       <div className="relative z-10 flex flex-col justify-between p-5 h-full">
//       <div>
//       <h2 className={`font-medium text-lg ${caseStudie.colorPallet.name}`}>{caseStudie.idx}</h2>
//         <div className={`flex justify-between items-center gap-5 flex-wrap `}>
//         <h2 className={`font-medium text-lg ${caseStudie.colorPallet.name}`}>{caseStudie.name}</h2>
//         <button className={`flex gap-1 border-gray border-[1px] p-2 rounded-lg ${caseStudie.colorPallet.button} `}>
//           READ MORE
//           <RxArrowTopRight size={24} />
//         </button>
//         </div>
//         <div className="flex flex-wrap gap-2">
//           {caseStudie.category.map((cat, index) => (
//             <span
//               key={index}
//               className={`bg-gray-200 mr-2 py-1 rounded-full text-md text-bn ${caseStudie.colorPallet.category}`}
//             >
//               {cat}
//             </span>
//           ))}
//         </div>
//       </div>
//         <p className={`text-gray-600 text-sm max-w-[30%] ${caseStudie.colorPallet.paragraph}`}>{caseStudie.paragraph}</p>

//       </div>
//     </div>
//   ))}
// </div>

//     </div>
//   );
// }
import React from "react";
import CaseStudie1 from "@/assets/case_studies/pic-1.png";
import CaseStudie2 from "@/assets/case_studies/pic-2.jpg";
import CaseStudie3 from "@/assets/case_studies/pic-3.jpg";
import CaseStudie4 from "@/assets/case_studies/pic-4.jpg";
import { RxArrowTopRight } from "react-icons/rx";
import Image from "next/image";
import "@/styles/Home/CaseStudies.css";

export default function CaseStudies() {
  const caseStudiesData = [
    {
      idx: "01",
      img: CaseStudie1,
      name: "AUTORINK",
      category: ["Cryptocurrency", "Mobile & Web", "Scotland"],
      paragraph:
        "Online platform that helps sellers identify the best option to sell their product",
      colorPallet: {
        name: "text-white",
        category: "text-gray",
        paragraph: "text-gray",
        button: "text-white",
      },
    },
    {
      idx: "02",
      img: CaseStudie2,
      name: "CROWDY",
      category: ["Healthcare", "Mobile", "USA"],
      paragraph:
        "Online platform that helps sellers identify the best option to sell their product",
      colorPallet: {
        name: "text-white",
        category: "text-white",
        paragraph: "text-white",
        button: "text-black",
      },
    },
    {
      idx: "03",
      img: CaseStudie3,
      name: "BYTE",
      category: ["Music", "Mobile", "USA"],
      paragraph:
        "Online platform that helps sellers identify the best option to sell their product",
      colorPallet: {
        name: "text-white",
        category: "text-gray",
        paragraph: "text-gray",
        button: "text-white",
      },
    },
    {
      idx: "04",
      img: CaseStudie4,
      name: "SEEING",
      category: ["Music", "Mobile", "USA"],
      paragraph:
        "Online platform that helps sellers identify the best option to sell their product",
      colorPallet: {
        name: "text-white",
        category: "text-gray",
        paragraph: "text-gray",
        button: "text-white",
      },
    },
  ];

  return (
    <div className="py-5 px-5 bg-white text-black rounded-lg">
      <div className="flex justify-between items-center mb-5 flex-wrap gap-4">
        <h1>Case Studies</h1>
        <button className="flex gap-1 border-gray border-[1px] p-1 rounded-lg text-gray">
          SEE MORE
          <RxArrowTopRight size={24} />
        </button>
      </div>

      <div className="flex gap-3 overflow-x-scroll hide-scroll text-white">
  {caseStudiesData.map((caseStudie) => (
    <div
      key={caseStudie.idx}
      className="relative flex-shrink-0 w-[80%] bg-[whitesmoke] rounded-2xl overflow-hidden min-h-[30rem]"
    >
      {/* Image as background */}
      <Image
        src={caseStudie.img}
        alt={caseStudie.name}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      {/* Black overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>

      {/* Text content */}
      <div className="relative z-10 flex flex-col justify-between p-5 h-full text-white">
        <div>
          <h2 className="font-medium text-lg">{caseStudie.idx}</h2>
          <div className="flex justify-between items-center flex-wrap" style={{columnGap: "1rem", rowGap: ".5rem"}}>
            <h2 className="font-medium text-lg">{caseStudie.name}</h2>
            <button className="flex gap-1 border-white border-[1px] p-2 rounded-lg">
              READ MORE
              <RxArrowTopRight size={24} />
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {caseStudie.category.map((cat, index) => (
              <span
                key={index}
                className="bg-gray-200 mr-2 rounded-full text-md"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
        <p className="card-paragraph text-gray-300 text-sm">
          {caseStudie.paragraph}
        </p>
      </div>
    </div>
  ))}
</div>

    </div>
  );
}
