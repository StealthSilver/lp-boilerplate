import React from "react";
import Card from "@/components/Card";
import { Icon } from "../ui/Icon";
const Content = () => {
  return (
    <section className="py-12 px-4 mt-32 flex flex-col items-center justify-center mx-4 bg-black rounded-2xl shadow-md gap-12">
      <div className="border border-white/[0.2] flex flex-col items-start mx-auto p-6 relative">
        <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white " />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white " />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white " />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white " />


        <h2 className="text-4xl font-khula font-semibold text-white ">
          Why MeshSpire ?
        </h2>

      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        {/* <Card />
        <Card />
        <Card /> */}
      </div>
    </section>
  );
};

export default Content;
