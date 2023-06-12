"use client";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import useAuthModal from "@/hooks/useAuthModal";
import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function LoginRegister() {
  const supabaseClient = useSupabaseClient();
  const toggleAuth = useAuthModal((state) => state.toggleAuthModal);
  const router = useRouter();
  const { session } = useSessionContext();

  useEffect(() => {
    if (session) {
      console.log("logged in");
      router.refresh();
      toggleAuth();
    }
  }, [session, router, toggleAuth]);

  return (
    <Tabs defaultValue="Sign In" className="w-[400px] mx-auto">
      <h2 className="text-center font-bold text-lg">Sign In</h2>
      <TabsContent value="Sign In">
        <Card>
          <Auth
            supabaseClient={supabaseClient}
            magicLink
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: "#306AC0",
                    brandAccent: "#2E5090",
                  },
                },
              },
              style: {
                container: {
                  width: "90%",
                  margin: "auto",
                  paddingTop: "1rem",
                  paddingBottom: "1rem",
                },
              },
            }}
            theme="dark"
            providers={["google", "discord", "twitch"]}
          />
        </Card>
      </TabsContent>
    </Tabs>
  );
}
