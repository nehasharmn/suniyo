import React, { useState, createContext, useContext, useCallback, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const CarouselContext = createContext(null);

const useCarousel = () => {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
};

const Carousel = ({ children, opts = {}, ...props }) => {
  const { loop = false, autoplay = null } = opts;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const carouselContent = React.Children.toArray(children).find(child => child.type === CarouselContent);
  const items = carouselContent ? React.Children.toArray(carouselContent.props.children) : [];
  const itemsCount = items.length;

  const scrollPrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex(prev => loop ? (prev - 1 + itemsCount) % itemsCount : Math.max(0, prev - 1));
  }, [itemsCount, loop]);

  const scrollNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex(prev => loop ? (prev + 1) % itemsCount : Math.min(itemsCount - 1, prev + 1));
  }, [itemsCount, loop]);
  
  useEffect(() => {
    if (autoplay && autoplay.delay) {
        const timer = setInterval(scrollNext, autoplay.delay);
        return () => clearInterval(timer);
    }
  }, [scrollNext, autoplay]);

  const canScrollPrev = loop || currentIndex > 0;
  const canScrollNext = loop || currentIndex < itemsCount - 1;

  const value = { 
    currentIndex, 
    items, 
    direction, 
    scrollPrev, 
    scrollNext, 
    canScrollPrev, 
    canScrollNext 
  };

  return (
    <CarouselContext.Provider value={value}>
      <div className={cn("relative", props.className)}>{children}</div>
    </CarouselContext.Provider>
  );
};

const CarouselContent = ({ className, ...props }) => {
  const { items, currentIndex, direction } = useCarousel();

  // Find out how many items to show based on responsive classes
  let itemsToShow = 1;
  if (className?.includes('lg:basis-1/3')) itemsToShow = 3;
  else if (className?.includes('md:basis-1/2')) itemsToShow = 2;

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  // We need to show a slice of items
  const getVisibleItems = () => {
      const visible = [];
      for(let i = 0; i < itemsToShow; i++) {
          const index = (currentIndex + i) % items.length;
          visible.push(items[index]);
      }
      return visible;
  }
  
  // This logic is simplified and may not perfectly replicate multi-item slide effect
  // But it will show multiple items and paginate through them one by one.

  return (
    <div className="overflow-hidden relative h-full">
        <div className={cn("flex", className)} {...props}>
          {getVisibleItems()}
        </div>
    </div>
  );
};

const CarouselItem = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("min-w-0 shrink-0 grow-0 basis-full", className)} {...props} />
));

const CarouselPrevious = React.forwardRef(({ className, ...props }, ref) => {
  const { scrollPrev, canScrollPrev } = useCarousel();
  return (
    <Button
      ref={ref}
      variant="outline"
      size="icon"
      className={cn("absolute h-8 w-8 rounded-full -left-12 top-1/2 -translate-y-1/2", className)}
      onClick={scrollPrev}
      disabled={!canScrollPrev}
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
});

const CarouselNext = React.forwardRef(({ className, ...props }, ref) => {
  const { scrollNext, canScrollNext } = useCarousel();
  return (
    <Button
      ref={ref}
      variant="outline"
      size="icon"
      className={cn("absolute h-8 w-8 rounded-full -right-12 top-1/2 -translate-y-1/2", className)}
      onClick={scrollNext}
      disabled={!canScrollNext}
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  );
});

export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, useCarousel };