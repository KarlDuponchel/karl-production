const R2_PUBLIC_URL = process.env.NEXT_PUBLIC_R2_PUBLIC_URL;

export function r2Url(key: string): string {
  return `${R2_PUBLIC_URL}/${key}`;
}

export function r2Loader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  // Next.js image optimization handles resize/format via its built-in optimizer.
  // Return the raw R2 URL — Next.js will proxy and optimize it.
  return `${R2_PUBLIC_URL}/${src}`;
}
