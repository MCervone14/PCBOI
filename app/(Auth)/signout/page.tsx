import LogOutButton from "@/components/auth/LogoutButton";
import TitleHeader from "@/components/TitleHeader";
import Shell from "@/components/Shell";
import { Card } from "@/components/ui/card";

const SignOutPage = () => {
  return (
    <Shell layout="auth" className="z-10">
      <Card className="p-10">
        <TitleHeader
          title="Sign out"
          description="Are you sure you want to sign out?"
          size="sm"
          className="text-center z-100 mb-10"
        />
        <LogOutButton />
      </Card>
    </Shell>
  );
};

export default SignOutPage;
