import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

const r2 = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
});

export type R2Object = {
  key: string;
  url: string;
  size: number;
  lastModified: string;
};

const IMAGE_EXT = /\.(jpe?g|png|webp|avif|gif)$/i;
const VIDEO_EXT = /\.(mp4|webm|mov)$/i;

export async function listMedia(prefix?: string) {
  const command = new ListObjectsV2Command({
    Bucket: process.env.R2_BUCKET_NAME!,
    Prefix: prefix,
  });

  const response = await r2.send(command);
  const publicUrl = process.env.NEXT_PUBLIC_R2_PUBLIC_URL;

  const objects: R2Object[] = (response.Contents ?? [])
    .filter((obj) => obj.Key && (IMAGE_EXT.test(obj.Key) || VIDEO_EXT.test(obj.Key)))
    .map((obj) => ({
      key: obj.Key!,
      url: `${publicUrl}/${obj.Key}`,
      size: obj.Size ?? 0,
      lastModified: obj.LastModified?.toISOString() ?? "",
    }));

  return {
    images: objects.filter((o) => IMAGE_EXT.test(o.key)),
    videos: objects.filter((o) => VIDEO_EXT.test(o.key)),
  };
}
