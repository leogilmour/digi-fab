export function FunH2({ children }: { children: string }) {
  return (
    <h2 className="text-df-shade-lighter my-4 font-[family-name:var(--font-geist-mono)] text-2xl tracking-wider">
      {children}
    </h2>
  );
}

export function H3({ children }: { children: string }) {
  return <h3 className="text-df-shade-lighter mb-8 text-2xl">{children}</h3>;
}

export function H4({ children }: { children: string }) {
  return <h4 className="my-8 text-xl">{children}</h4>;
}
