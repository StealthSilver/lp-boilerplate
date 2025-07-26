import React from "react";
import Card from "@/components/Card"
const Content = () => {
  return (
    <section className="py-12 px-4 mt-32 flex flex-col items-center justify-center mx-4 bg-black rounded-2xl shadow-md gap-12">
      <div className="flex flex-col items-center justify-center gap-2">
      <h2 className="text-4xl px-16 py-4 font-khula font-semibold text-white tracking-tighter border-1 border-white" style={{ borderWidth: '0.5px' }}>
  Learning made easy
</h2>
       
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        {/* <Card /> */}
        
      </div>
    </section>
  );
};

export default Content;
