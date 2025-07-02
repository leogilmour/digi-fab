"use client";

import Link from "next/link";

export function ButtonLink({
  href,
  children,
  download,
}: {
  href?: string;
  children: string;
  download: boolean;
}) {
  // download file
  if (download) {
    return (
      <a
        download={download}
        href={href}
        className={`text-df-accent border-df-accent hover:bg-df-accent hover:text-background flex h-10 cursor-pointer items-center justify-center rounded-full border border-solid px-4 text-sm font-medium transition-colors hover:border-transparent sm:h-12 sm:px-5 sm:text-base`}
      >
        {children}
      </a>
    );
  }
  // button ready!
  else if (href) {
    return (
      <Link
        href={href}
        className={`text-df-accent border-df-accent hover:bg-df-accent hover:text-background flex h-10 cursor-pointer items-center justify-center rounded-full border border-solid px-4 text-sm font-medium transition-colors hover:border-transparent sm:h-12 sm:px-5 sm:text-base`}
      >
        {children}
      </Link>
    );
  } else {
    // button not yet clickable
    return (
      <div
        className={`border-df-shade/[.5] text-df-shade flex h-10 cursor-not-allowed items-center justify-center rounded-full border border-solid px-4 text-sm font-medium transition-colors sm:h-12 sm:px-5 sm:text-base`}
      >
        {children}
      </div>
    );
  }
}
