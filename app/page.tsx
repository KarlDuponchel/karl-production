import Image from "next/image";

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

// Public ID de l'image uploadée sur Cloudinary (Media Library → ton image)
const PUBLIC_ID = "v1781607750/kvernufoss_xlgc9r.jpg";

// f_auto = format optimal (AVIF/WebP) · q_auto = qualité optimale
const src = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto/${PUBLIC_ID}`;

export default function Home() {
  return (
    <div className="relative flex-1 w-full">
      <Image
        src={src}
        alt="Vue aérienne au drone"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Filtre noir pour assombrir l'image — ajuste l'opacité (/40) au besoin */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
    </div>
  );
}
