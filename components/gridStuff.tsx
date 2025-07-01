import { JSX } from "react";

export function Grid({ children }: { children: JSX.Element | JSX.Element[] }) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {children}
    </ul>
  );
}

export function ItemContainer({
  children,
}: {
  children: string | JSX.Element | (string | JSX.Element)[];
}) {
  return (
    <li className="max-w-xs justify-center justify-items-center gap-4 text-center align-top">
      {children}
    </li>
  );
}
