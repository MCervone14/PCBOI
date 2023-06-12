import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import SupabaseProvider from "@/providers/SupabaseProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import UserProvider from "@/providers/UserProvider";

export const metadata = {
  title: "Gaming Review Site",
  description: "A review site for gaming",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <Sidebar>
              <Navbar />
              {children}
              <Footer />
            </Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
