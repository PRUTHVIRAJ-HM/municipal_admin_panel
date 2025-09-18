import { ReactNode } from "react";

export default function Placeholder({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-4xl rounded-xl border bg-card p-10 text-center shadow-sm">
      <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
      <p className="mt-2 text-muted-foreground">
        This page is ready to be filled. Tell me what you want here and I will
        build it.
      </p>
      {children}
    </div>
  );
}
