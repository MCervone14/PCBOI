import * as React from "react";

import { cn } from "@/lib/utils";

interface ShellProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode;
  layout?: "default" | "dashboard" | "auth";
}

const Shell = ({
  children,
  layout = "default",
  className,
  ...props
}: ShellProps) => {
  return (
    <section
      className={cn(
        "items-center gap-8 min-h-screen pb-8 pt-6 md:py-8 ",
        layout === "default" && "container",
        layout === "auth" && "container max-w-lg",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};

export default Shell;
