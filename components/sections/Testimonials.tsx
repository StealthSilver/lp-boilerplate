import React from "react";
import { InfiniteMovingCards } from '@/components/ui/InfiniteMovingCards';

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
      <h2 className="text-4xl px-16 py-4 font-khula font-semibold text-white tracking-tighter border-1 border-white" style={{ borderWidth: '0.5px' }}>
  Loved by people everywhere
</h2></div>
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
