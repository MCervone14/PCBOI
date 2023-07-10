import type { HandleOAuthCallbackParams } from "@clerk/types";

import SSOCallback from "@/components/auth/SSOCallback";
import Shell from "@/components/Shell";

export interface SSOCallbackPageProps {
  searchParams: HandleOAuthCallbackParams;
}

const SSOCallbackPage = ({ searchParams }: SSOCallbackPageProps) => {
  return (
    <Shell layout="auth">
      <SSOCallback searchParams={searchParams} />
    </Shell>
  );
};

export default SSOCallbackPage;
