"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

import type { Database } from "@/types_db";

export default function SupabaseProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [supabaseClient] = useState(() =>
    createClientComponentClient<Database>()
  );
  const router = useRouter();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange(() => {
      router.refresh();
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router, supabaseClient]);

  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  );
}
