import Image from "next/image";

export function PlainSmallImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={160}
      height={160}
      className="shadow-df-shade mt-4 rounded-md shadow-2xl"
    />
  );
}
