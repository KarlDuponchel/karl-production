import Image from "next/image"

import { r2Url } from "@/lib/r2";

const src = r2Url("kvernufoss.avif")

export default function HeroHeader() {
  return (
    <div className="relative h-screen w-full">
      <Image
        src={src}
        alt="Vue aérienne au drone"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4 flex-col gap-6">
        <h1 className="font-heading text-5xl md:text-8xl uppercase tracking-wider text-lime-50">Capturer l'excellence</h1>
        <hr className="w-1/6 border-lime-50/70 border" />
        <p className="mt-0 text-lg md:text-2xl italic text-lime-50">Développeur web, photographe, vidéaste, et télépilote drones & FPV</p>
      </div>
    </div>
  )
}