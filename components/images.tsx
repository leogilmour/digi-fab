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

export function PlainMediumImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={240}
      height={240}
      className="shadow-df-shade mt-4 rounded-md shadow-xl"
    />
  );
}
export function PlainLargeImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={500}
      height={500}
      className="shadow-df-shade mt-4 rounded-md shadow-xl"
    />
  );
}

export function MobileImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={320}
      height={320}
      className="shadow-df-shade mt-4 rounded-md shadow-md"
    />
  );
}
