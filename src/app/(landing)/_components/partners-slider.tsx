import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function PartnerSlider() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="flex w-full "
    >
      <CarouselContent>
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className="basis-full">
            <h2 className="text-shadow-custom w-auto bg-transparent text-[58px] font-black uppercase text-gray-200">
              Are You a Musician, Creator, or a Professional Athlete?
            </h2>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
