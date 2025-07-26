import React from "react";
import { InfiniteMovingCards } from '@/components/ui/InfiniteMovingCards';
import {Icon} from "@/components/ui/Icon"

const testimonials = [
  {
    quote: 'Amazing library, super fast setup!',
    name: 'Jane Doe',
    title: 'CEO, Example Co.',
  },
  {
    quote: 'Loved the animations and design.',
    name: 'John Smith',
    title: 'Founder, Another Co.',
  },
  {
    quote: 'Amazing library, super fast setup!',
    name: 'Jane Doe',
    title: 'CEO, Example Co.',
  },
  {
    quote: 'Loved the animations and design.',
    name: 'John Smith',
    title: 'Founder, Another Co.',
  },
  {
    quote: 'Amazing library, super fast setup!',
    name: 'Jane Doe',
    title: 'CEO, Example Co.',
  },
  {
    quote: 'Loved the animations and design.',
    name: 'John Smith',
    title: 'Founder, Another Co.',
  },
  {
    quote: 'Amazing library, super fast setup!',
    name: 'Jane Doe',
    title: 'CEO, Example Co.',
  },
  {
    quote: 'Loved the animations and design.',
    name: 'John Smith',
    title: 'Founder, Another Co.',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-12 px-4 flex flex-col items-center justify-center mx-4 bg-black rounded-2xl shadow-md gap-20">
      <div className="flex flex-col items-center justify-center gap-2">
       <div className="border border-white/[0.2] flex flex-col items-start mx-auto p-6 relative">
              <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white " />
              <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white " />
              <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white " />
              <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white " />
      
      
              <h2 className="text-4xl font-khula font-semibold text-white ">
                Loved by people everywhere
              </h2>
      
            </div></div>
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="fast"
        pauseOnHover={false}
      />
      
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="fast"
        pauseOnHover={false}
      />
    </section>
    
  );
}
