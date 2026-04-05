import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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
    <section className="py-10 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Inspired by the Best in Service
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Great companies are built on exceptional customer experiences. Our platform gives you the tools to measure, manage, and reward the service that sets you apart.
          </p>
        </div>

        <div className="flex justify-center">
          <Carousel opts={{ align: "center", loop: true }} className="w-full max-w-4xl">
            <CarouselContent>
              {quotes.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-2/3">
                  <div className="p-1 h-full">
                    <Card className="h-full bg-white border border-slate-100 shadow-sm">
                      <CardContent className="p-8 text-center">
                        <p className="text-sm font-bold text-teal-600 mb-3">{item.brand}</p>
                        <blockquote className="text-base text-slate-500 italic leading-relaxed">"{item.quote}"</blockquote>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white border-slate-200 text-slate-600 hover:bg-slate-50" />
            <CarouselNext className="bg-white border-slate-200 text-slate-600 hover:bg-slate-50" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}