import React from "react";

import Award1 from "@/assets/awards/award1.svg";
import Award2 from "@/assets/awards/award2.svg";
import Award3 from "@/assets/awards/award3.svg";
import Award4 from "@/assets/awards/award4.svg";
import Award5 from "@/assets/awards/award5.svg";
import Image from "next/image";

export default function Awards() {
  const awards = [Award1, Award2, Award3, Award4, Award5, Award1, Award2, Award3, Award4, Award5];
  return (
    <div className="px-2">
      <h1>Awards & Recognition</h1>
      <div className="flex gap-10 hide-scroll overflow-scroll mt-10 flex-shrink-0">
        {awards.map((award, idx) => {
          return (
            <div className="flex-shrink-0">
              <Image src={award} key={idx} alt="Awards" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
