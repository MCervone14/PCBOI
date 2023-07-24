interface LobbyLayoutProps {
  children: React.ReactNode;
}

export default async function LobbyLayout({ children }: LobbyLayoutProps) {
  return (
    <main className="min-h-screen min-w-screen justify-center items-center relative">
      {children}
    </main>
  );
}
