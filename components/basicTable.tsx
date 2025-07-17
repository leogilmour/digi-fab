import { JSX } from "react";

export function Table({ children }: { children: JSX.Element[] }) {
  return (
    <table className="table-auto border-separate border-spacing-2 border">
      {children}
    </table>
  );
}

export function Td({ children }: { children: string | JSX.Element }) {
  return <td className="border-spacing-2 border p-1">{children}</td>;
}
