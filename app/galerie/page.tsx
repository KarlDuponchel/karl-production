import { listMedia } from "@/lib/r2-server";
import MediaLightbox from "@/components/MediaLightbox";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Galerie | Karl Duponchel",
  description: "Photos et vidéos de voyages et prises de vues aériennes",
};

export default async function GaleriePage() {
  const { images, videos } = await listMedia();

  return (
    <main className="min-h-screen pt-28 pb-16 px-4 md:px-12 bg-lime-50">
      <h1 className="font-heading text-3xl md:text-6xl tracking-wider mb-10 text-mossy-olive-900">
        Galerie
      </h1>

      <MediaLightbox images={images} videos={videos} />

      {images.length === 0 && videos.length === 0 && (
        <p className="text-foreground-soft text-lg mt-8">Aucun média trouvé dans le bucket.</p>
      )}
    </main>
  );
}
