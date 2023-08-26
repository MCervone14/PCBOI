import "./globals.css";

import { Toaster } from "@/components/ui/toaster";
import SiteNav from "@/components/layouts/SiteNav";
import SiteFooter from "@/components/layouts/SiteFooter";
import { cn } from "@/lib/utils";
// import { Caesar_Dressing } from "next/font/google";

// const Caesar = Caesar_Dressing({
//   weight: "400",
//   style: "normal",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "PCBOI | Video Game Info",
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
