import { JSX } from "react";

export function Grid({ children }: { children: JSX.Element | JSX.Element[] }) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {children}
    </ul>
  );
}

export function TableGrid({
  columns,
  children,
}: {
  columns: number;
  children: JSX.Element | JSX.Element[];
}) {
  const gridClasses = [
    "grid-cols-1",
    "grid-cols-2",
    "grid-cols-3",
    "grid-cols-4",
    "grid-cols-5",
    "grid-cols-6",
  ];
  const getGridClass = gridClasses[columns - 1] || "grid-cols-1";

  return (
    <ul className={`grid-cols-1 md:${getGridClass} grid gap-4`}>{children}</ul>
  );
}

export function WideGrid({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">{children}</ul>;
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

export function WideContainer({
  children,
}: {
  children: string | JSX.Element | (string | JSX.Element)[];
}) {
  return (
    <li className="max-w-xl justify-center justify-items-center gap-4 align-top">
      {children}
    </li>
  );
}
