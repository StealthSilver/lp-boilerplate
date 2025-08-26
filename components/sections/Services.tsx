"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/BentoGrid";
import siteData from "../../data";
import { Icon } from "../ui/Icon";

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 px-4 mt-16 flex flex-col items-center justify-center mx-4 bg-black rounded-2xl shadow-md gap-20 overflow-x-hidden"
    >
      {/* Title Block */}
      <div className="border border-white/[0.2] flex flex-col items-start mx-auto p-3 md:p-6 relative mb-12">
        <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />
        <h2 className="text-4xl font-khula font-semibold text-white">
          {siteData.servicesTitle}
        </h2>
      </div>

      {/* Services Grid */}
      <BentoGrid className="mt-2">
        {siteData.services.map((service, idx) => (
          <BentoGridItem
            key={idx}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Services;
