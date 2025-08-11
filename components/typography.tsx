import { JSX } from "react";

export function Para({
  children,
}: {
  children: string | JSX.Element | (JSX.Element | string)[];
}) {
  return <p className="my-4">{children}</p>;
}
