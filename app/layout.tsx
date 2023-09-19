import "./globals.css";

import { Toaster } from "@/components/ui/toaster";
import SiteNav from "@/components/layouts/SiteNav";
import SiteFooter from "@/components/layouts/SiteFooter";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Video Game Info | PCBOI",
  description: "A site for PC game enthusiasts",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background antialiased")}>
        <SiteNav />
        {children}
        <SiteFooter />
        <Toaster />
      </body>
    </html>
  );
}
