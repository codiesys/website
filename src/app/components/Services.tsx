import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";

const features = [
  "Mobile or Web app development.",
  "Hire our engineers on contract position.",
  "Architecture and designing.",
  "Cyber security for your IT infra.",
];

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="services"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <div className="flex w-full justify-end">
          <div className="h-full w-full p-4">
            <Image
              src="/assets/Illustration2.png"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col items-start justify-center ml-auto w-full lg:w-9/12">
            <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
              We can help you with
            </h3>

            <p className="my-6 text-black-500 ">
              Explore our wide range of services with team that you can trust
              and rely on.
            </p>
            <ul className="text-black-500 self-start list-inside ml-8 pl-6 my-3">
              {features.map((feature, index) => (
                <li
                  className="relative circle-check custom-list pt-4 my-4"
                  key={feature}
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
