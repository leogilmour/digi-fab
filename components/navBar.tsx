"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({
  href,
  children,
  target,
}: {
  href: string;
  children: string;
  target?: "_blank";
}) {
  return (
    <Link
      href={href}
      className={`text-background hover:text-df-accent tracking-widest ${usePathname() == href ? "underline" : ""}`}
      target={target}
    >
      {children}
    </Link>
  );
}

function SecondaryNavLink({
  href,
  children,
  target,
}: {
  href: string;
  children: string;
  target?: "_blank";
}) {
  return (
    <Link
      href={href}
      className={`hover:text-df-accent text-xs tracking-widest`}
      target={target}
    >
      {children}
    </Link>
  );
}

export function NavBar() {
  return (
    <>
      <div className="bg-df-shade-lighter fixed mx-auto h-[44px] w-full">
        <div className="w-full">
          <div className="z-1 mx-auto flex w-full max-w-5xl justify-between p-[10px] text-center">
            <NavLink
              href="https://nathanmelenbrink.github.io/intro-dig-fab/index.html"
              target="_blank"
            >
              PHYS S-12 2025
            </NavLink>
            <div className="flex justify-center gap-5">
              <NavLink href="/">HOME</NavLink>
              <NavLink href="/about">ABOUT</NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="block h-[44px] w-full"></div>
    </>
  );
}

export function WeekNavBar({ week }: { week: number }) {
  const weekLinks = [
    { next: "02-2d-design-cutting" },
    { previously: `01-intro`, next: "03-fabrication" },
    { previously: `02-2d-design-cutting`, next: "04-programming" },
    { previously: `03-fabrication`, next: "05-3d-design" },
    { previously: `04-programming`, next: "06-electronic-inputs" },
    { previously: `05-3d-design`, next: "07-outputs" },
    { previously: `06-electronic-inputs` },
    // { previously: `06-electronic-inputs`, next: "08-cnc" },
    // { previously: `07-outputs`, next: "09-networking" },
    // { previously: `08-cnc`, next: "10-machine-building" },
    // { previously: `09-networking`, next: "projects/final-project" },
  ];

  return (
    <>
      <div className="bg-df-shade fixed mx-auto h-[36px] w-full">
        <div className="w-full">
          <div className="z-1 mx-auto flex w-full max-w-5xl justify-between p-[10px] text-center">
            {week > 1 ? (
              weekLinks[week - 1]?.previously && (
                <SecondaryNavLink href={`/${weekLinks[week - 1].previously}`}>
                  ⇦ PREVIOUSLY
                </SecondaryNavLink>
              )
            ) : (
              <SecondaryNavLink href="/">⇦ HOME</SecondaryNavLink>
            )}
            {week < weekLinks.length && weekLinks[week - 1]?.next ? (
              <SecondaryNavLink href={`/${weekLinks[week - 1]?.next}`}>
                NEXT UP ⇨
              </SecondaryNavLink>
            ) : (
              <SecondaryNavLink href="/projects/final-project">
                FINAL PROJECT ⇨
              </SecondaryNavLink>
            )}
          </div>
        </div>
      </div>
      <div className="block h-[36px] w-full"></div>
    </>
  );
}
