const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

type ImageTransform = {
  width?: number;
  height?: number;
  quality?: number | "auto";
  format?: "auto" | "webp" | "avif" | "jpg" | "png";
  crop?: "fill" | "fit" | "limit" | "thumb" | "scale";
  gravity?: "auto" | "face" | "center";
  blur?: number;
};

export function cloudinaryUrl(
  publicId: string,
  transforms: ImageTransform = {}
): string {
  const {
    width,
    height,
    quality = "auto",
    format = "auto",
    crop = "fill",
    gravity = "auto",
  } = transforms;

  const parts: string[] = [];
  if (width) parts.push(`w_${width}`);
  if (height) parts.push(`h_${height}`);
  if (crop) parts.push(`c_${crop}`);
  if (gravity) parts.push(`g_${gravity}`);
  parts.push(`q_${quality}`, `f_${format}`);

  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${parts.join(",")}/${publicId}`;
}

export function cloudinaryBlurUrl(publicId: string): string {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_20,q_10,f_auto,e_blur:1000/${publicId}`;
}

type VideoTransform = {
  width?: number;
  height?: number;
  quality?: number | "auto";
  format?: "auto" | "mp4" | "webm";
  crop?: "fill" | "fit" | "limit" | "scale";
};

export function cloudinaryVideoUrl(
  publicId: string,
  transforms: VideoTransform = {}
): string {
  const {
    width,
    height,
    quality = "auto",
    format = "auto",
    crop = "fill",
  } = transforms;

  const parts: string[] = [];
  if (width) parts.push(`w_${width}`);
  if (height) parts.push(`h_${height}`);
  if (crop) parts.push(`c_${crop}`);
  parts.push(`q_${quality}`, `f_${format}`);

  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/${parts.join(",")}/${publicId}`;
}

export function cloudinaryVideoThumbnail(
  publicId: string,
  transforms: ImageTransform = {}
): string {
  const {
    width,
    height,
    quality = "auto",
    format = "auto",
    crop = "fill",
    gravity = "auto",
  } = transforms;

  const parts: string[] = [];
  if (width) parts.push(`w_${width}`);
  if (height) parts.push(`h_${height}`);
  if (crop) parts.push(`c_${crop}`);
  if (gravity) parts.push(`g_${gravity}`);
  parts.push(`q_${quality}`, `f_${format}`);

  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/${parts.join(",")}/so_0/${publicId}.jpg`;
}

export function cloudinaryLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  const q = quality || 75;
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_${width},q_${q},f_auto,c_limit/${src}`;
}
