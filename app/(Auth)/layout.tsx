import Image from "next/image";
import background from "../../public/gamelist-covers-background.jpg";

interface AuthLayoutProps {
  children: React.ReactNode;
  authModal: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="min-h-screen min-w-screen justify-center items-center relative">
      <Image
        src={background}
        alt="game art background"
        fill
        placeholder="blur"
        className="z-[-10] object-cover brightness-[.1]"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      <div>{children}</div>
    </main>
  );
}
