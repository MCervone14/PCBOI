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
import SignUpForm from "@/components/forms/SignUpForm";
import Shell from "@/components/Shell";
import CloseModal from "@/components/CloseModal";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign up for an account",
};

export default function SignUpPage() {
  return (
    <Shell layout="auth">
      <Card>
        <CardHeader className="space-y-1 relative">
          <CardTitle className="text-2xl">Sign up</CardTitle>
          <CloseModal />
          <CardDescription>
            Choose your preferred sign up method
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <OAuthSignIn />
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-primary" />
            </div>
          </div>
          <SignUpForm />
        </CardContent>
        <CardFooter className="grid gap-4">
          <div className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              aria-label="Sign in"
              href="/signin"
              className="text-primary underline-offset-4 transition-colors hover:underline"
            >
              Sign in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </Shell>
  );
}