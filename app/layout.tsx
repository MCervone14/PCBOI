import "./globals.css";
import "@/styles/embla.css";
import { ClerkProvider, currentUser } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import SiteNav from "@/components/layouts/SiteNav";
import SiteFooter from "@/components/layouts/SiteFooter";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Gaming Review Site",
  description: "A review site for gaming",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
  authModal: React.ReactNode;
}) {
  const user = await currentUser();

  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn("min-h-screen bg-background antialiased")}>
          <SiteNav user={user} />
          {children}
          <SiteFooter />
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
