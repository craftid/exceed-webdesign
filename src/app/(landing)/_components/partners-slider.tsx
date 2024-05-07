import Marquee from "@/components/common/marquee"

export function PartnerSlider() {
  return (
    <Marquee baseVelocity={1}>
      <h2 className="text-shadow-custom bg-transparent text-center text-lg font-black uppercase text-gray-200 md:text-xl lg:text-3xl xl:text-4xl 2xl:text-[58px]">
        Are You a Musician, Creator, or a Professional Athlete?
      </h2>
    </Marquee>
  )
}
