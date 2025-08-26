import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline";
import Maps from "../../../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import Link from "next/link";

const Pricing = () => {
  // const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="career"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full my-16">

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto">
            Trusted by clients all across the globe.
          </h3>
          <p className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12">
            We have engineers working for clients in all time zones. We provide
            at least 4 hours of overlapping working hours for client across
            globe.
          </p>

          <div className="py-12 w-full px-8 mt-16">
            <Image alt="Logo" src={Maps} className="w-full h-auto" />
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          {/* <ScrollAnimationWrapper> */}
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed">
            Current Job Openings
          </h3>
          <p className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center">
            Join the team that truly care about you and your growth.
          </p>
          {/* </ScrollAnimationWrapper> */}
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <div className="flex justify-center">
              <div
                // variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
              >
                {/* <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/react1.png"
                    width={145}
                    height={165}
                    alt="Free Plan"
                  />
                </div> */}

                <p className="text-lg text-black-600 font-medium capitalize my-2 ">
                  React JS / other FE
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    0-3 years of experience with React JS / FE frameworks
                  </li>
                  <li className="relative check custom-list my-2">
                    Building reusable & Responsive component using React
                  </li>
                  <li className="relative check custom-list my-2">
                    Redux, Redux toolkit, Context API
                  </li>
                  <li className="relative check custom-list my-2">
                    Good knowledge of Javascript, Typescript, HTML, CSS
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb4 flex-none mt-12">
                  <ButtonOutline>Apply</ButtonOutline>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div
                // variants={scrollAnimation}
                className="flex flex-col items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
              >
                {/* <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/rn.webp"
                    width={145}
                    height={165}
                    alt="Standard Plan"
                  />
                </div> */}

                <p className="text-lg text-black-600 font-medium capitalize my-2">
                  React Native / iOS / Android
                </p>

                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-1">
                    0-3 years of experience with React Native
                  </li>
                  <li className="relative check custom-list my-1">
                    Building reusable & Responsive component using React
                  </li>
                  <li className="relative check custom-list my-1">
                    Redux, Redux toolkit, Context API
                  </li>
                  <li className="relative check custom-list my-1">
                    Javascript, Typescript
                  </li>
                  <li className="relative check custom-list my-1">
                    Knowledge on handling platform(android/IOS) specific code
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb4 flex-none">
                  <ButtonOutline>Apply</ButtonOutline>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div
                // variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
              >
                {/* <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/go.jpg"
                    width={145}
                    height={165}
                    alt="Standard Plan"
                  />
                </div> */}

                <p className="text-lg text-black-600 font-medium capitalize my-2">

                  Go lang / Backend
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">

                    0-3 Years experience with backend technologies
                  </li>
                  <li className="relative check custom-list my-2">
                    Prior Go lang knowledge preferred, others can apply
                  </li>
                  <li className="relative check custom-list my-2">
                    Best coding practices
                  </li>
                  <li className="relative check custom-list my-2">
                    Good at DS and algorithms
                  </li>
                  <li className="relative check custom-list my-2">
                    Sound SQL knowledge
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb4 flex-none mt-12">
                  <ButtonOutline>Apply</ButtonOutline>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">

        <div className="flex flex-col w-full " id="testimoni">
          {/* <ScrollAnimationWrapper> */}
          {/* <h3
           
            className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto"
          >
            Trusted by Thousands of Happy Customer{" "}
          </h3> */}
          {/* <p
            
            className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
          >
            These are the stories of our customers who have joined us with great
            pleasure when using this crazy feature.
          </p> */}
          {/* </ScrollAnimationWrapper> */}
          {/* commented testimonal */}
          {/* <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <div variants={scrollAnimation}>
              <Testimoni />
            </div>
          </ScrollAnimationWrapper> */}
          <div className="relative w-full mb-16">
            <div>
              <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                    Connect with us to explore endless possibilities!
                  </h5>
                  <p>
                    Let's discuss your requirements and how team Codiesys can
                    help you achieve your goals.
                  </p>
                </div>
                <Link href={"/contact"}>
                  <ButtonOutline>Contact Us</ButtonOutline>
                </Link>
              </div>
              <div
                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{ filter: "blur(114px)" }}
              ></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Pricing;
