import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const quotes = [
  { brand: "Ritz-Carlton (Marriott)", quote: "Guest delight so strong, Marriott built its luxury crown on it." },
  { brand: "Four Seasons Hotels & Resorts", quote: "Luxury defined by service, not just rooms." },
  { brand: "Marriott International", quote: "Global scale built on measuring every guest smile." },
  { brand: "Hilton Worldwide", quote: "Consistency in satisfaction turned loyalty into empire." },
  { brand: "Hyatt Hotels", quote: "Personal touches powered global growth." },
  { brand: "Southwest Airlines", quote: "Friendly skies fueled by customer trust." },
  { brand: "Disney Cruise Line", quote: "Magic at sea that keeps families coming back." },
  { brand: "Royal Caribbean International", quote: "Innovation plus satisfaction = cruise dominance." },
  { brand: "Chick-fil-A", quote: "Top satisfaction scores turned into top sales per store." },
];

export default function BrandCarousel() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Inspired by the Best in Service
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Great companies are built on exceptional customer experiences. ARS<sup className="text-xs text-slate-300">360</sup> provides the tools to measure, manage, and reward the service that sets you apart.
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
            autoplay: { delay: 4000 }
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent className="md:basis-1/2 lg:basis-1/3">
            {quotes.map((item, index) => (
              <CarouselItem key={index}>
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-center border border-gray-200 bg-white shadow-lg">
                    <CardContent className="p-6 text-center">
                      <p className="text-lg font-semibold text-teal-400 mb-3">{item.brand}</p>
                      <blockquote className="text-sm text-gray-500 italic">
                        "{item.quote}"
                      </blockquote>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-white border-gray-200 text-gray-700 hover:bg-gray-100" />
          <CarouselNext className="bg-white border-gray-200 text-gray-700 hover:bg-gray-100" />
        </Carousel>
      </div>
    </section>
  );
}