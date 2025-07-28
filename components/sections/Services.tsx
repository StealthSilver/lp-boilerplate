"use client";

import React, { useRef, useEffect, useState } from "react";

import { Icon } from "@/components/ui/Icon";
import { Timeline } from "@/components/ui/Timeline";
import AnimatedFlowSVG from "../ui/AnimatedFlowSvg";


const timelineData = [
  {
    title: "Signup and create account",
    content: (
      <p className="text-white text-[20px] leading-[1.9] max-w-md">
        Signup and create a student profile to find the best tutors for you. No
        payments, free signup. Access all the topics you want to learn.
      </p>
    ),
  },
  {
    title: "Enter the topic you want to learn",
    content: (
      <p className="text-white text-[20px] leading-[1.9] max-w-md">
        Select the tutor you want to learn from. We have wide range of tutors
        which will match your learning style.
      </p>
    ),
  },
  {
    title: "Connect to your tutor instantly",
    content: (
      <p className="text-white text-[20px] leading-[1.9] max-w-md">
        Instantly connect to your tutor and learn. You getting it right is our
        responsibility. Solve instant assignments, give tests and a lot more.
      </p>
    ),
  },
];

const Content = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [timelineHeight, setTimelineHeight] = useState(0);

  useEffect(() => {
    if (timelineRef.current) {
      setTimelineHeight(timelineRef.current.offsetHeight);
    }
  }, []);

  return (
    <section id="services" className="py-12 px-4 mt-32 flex flex-col items-center justify-center mx-4 bg-black rounded-2xl shadow-md gap-20">
     
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="border border-white/[0.2] flex flex-col items-start mx-auto p-6 relative">
          <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />
          <h2 className="text-4xl font-khula font-semibold text-white">
            Learning made easy
          </h2>
        </div>
      </div>

     
      <div className="flex flex-col md:flex-row items-center justify-center gap-20 w-full max-w-7xl">
       
        <div ref={timelineRef} className="w-full md:w-1/2">
          <Timeline data={timelineData} />
        </div>

      
        <div
          className="w-full md:w-1/2 flex justify-center items-start"
          style={{
            height: timelineHeight ? `${timelineHeight - 100}px` : "auto",
            marginTop: "50px",
          }}
        >
          <div
            style={{
              height: timelineHeight ? `${timelineHeight - 100}px` : "auto",
              width: "100%",
            }}
          >
            <AnimatedFlowSVG />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
