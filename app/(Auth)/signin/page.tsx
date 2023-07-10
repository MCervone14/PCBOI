import { type Metadata } from "next";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import OAuthSignIn from "@/components/auth/OAuthSignIn";
import SignInForm from "@/components/forms/SignInForm";
import Shell from "@/components/Shell";
import CloseModal from "@/components/CloseModal";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your account",
};

const SignInPage = () => {
  return (
    <Shell layout="auth" className="border-2-primary ">
      <Card className="signin-glow">
        <CardHeader className="space-y-1 relative ">
          <CardTitle className="text-2xl">Sign In</CardTitle>
          <CloseModal />
          <CardDescription>
            Choose your preferred sign in method.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <OAuthSignIn />
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-primary" />
            </div>
          </div>
          <SignInForm />
        </CardContent>
        <CardFooter className="flex flex-wrap items-center space-x-2">
          <div className="flex-1 text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              aria-label="Sign up"
              className="text-primary underline-offset-4 transition-colors hover:underline"
            >
              Sign up
            </Link>
          </div>
          <Link
            href="/signin/reset-password"
            aria-label="Reset Password"
            className="text-sm text-primary underline-offset-4 transition-colors hover:underline"
          >
            Reset password
          </Link>
        </CardFooter>
      </Card>
    </Shell>
  );
};

export default SignInPage;