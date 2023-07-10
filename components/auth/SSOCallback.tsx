"use client";

import { useEffect } from "react";
import { useClerk } from "@clerk/nextjs";

import { Icons } from "@/components/Icons";
import { type SSOCallbackPageProps } from "@/app/(Auth)/sso-callback/page";

const SSOCallback = ({ searchParams }: SSOCallbackPageProps) => {
  const { handleRedirectCallback } = useClerk();

  useEffect(() => {
    void handleRedirectCallback(searchParams);
  }, [handleRedirectCallback, searchParams]);

  return (
    <div
      className="flex items-center justify-center"
      role="status"
      aria-label="Loading"
      aria-describedby="loading-description"
    >
      <Icons.spinner className="w-16 h-16 animate-spin" aria-hidden="true" />
    </div>
  );
};

export default SSOCallback;
