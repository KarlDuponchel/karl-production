import { r2Url } from "@/lib/r2";

export default function History() {
  return (
    <section className="w=full">
        <div className="py-10 px-4 md:px-12 md:py-10 text-mossy-olive-900 bg-lime-cream-50">
            <h1 className="font-heading text-2xl md:text-6xl tracking-wider">Mon histoire</h1>
            <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-28 lg:items-start">
                <video
                src={r2Url("presentation1.mp4")}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="mt-8 w-full lg:max-w-sm rounded-xl border-4 border-mossy-olive-800"
                />
                <div className="hidden lg:block w-1 bg-mossy-olive-800 self-stretch" />
                <div className="mt-4 lg:mt-8 text-sm md:text-base lg:text-md">
                    <p>
                        Je m'appelle Karl Duponchel, je suis un développeur web, photographe, et télépilote drones & FPV.
                    </p>
                    <br/>
                    <p>
                        Avant tout, ma passion c'est le web. Depuis que j'ai rejoint mon entreprise, j'ai découvert le monde de la vidéo et plus précisément les prises de vues aériennes.
                    </p>
                    <br/>
                    <p>Cela a commencé par l'acquisition d'un DJI Mini 3, simple d'utilisation. Mais je me suis vite vu limité par ses fonctionnalités. J'ai donc décidé de m'investir davantage dans l'univers drones. C'est là que j'ai découvert le drone FPV.</p>
                    <br/>
                    <p>Pour m'entrainer, j'ai opté pour un tiny whoop, drone plus petit qu'une main d'adulte, ensuite j'ai fabriqué mon premier drone FPV 5 pouces, puis un 7 pouces. Depuis, ils me suivent dans tout mes voyages, c'est pourquoi je suis heureux de vous partager mes plus belles photos et vidéos.</p>
                    <br/>
                    <p>Entre montagnes, plages et fôrets, j'ai pris des photos de tout le monde, de tous les pays, de toutes les cultures, et de toutes les expériences. Merci.</p>
                </div>
            </div>
        </div>
        <div className="bg-mossy-olive-950 m-auto">
            <h3 className="text-lime-50 text-center text-lg md:text-2xl py-6 px-4 md:px-12 font-heading">
                A travers l'Europe, l'Afrique et l'Asie, lorem ipsum coco lorem ipsum coco lorem ipsum coco lorem ipsum coco.
            </h3>
        </div>
    </section>
    )
}