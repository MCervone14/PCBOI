"use client";

import { Icons } from "./Icons";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const CloseModal = () => {
  const router = useRouter();
  return (
    <Button
      variant="default"
      className="h-5 w-5 rounded-md  absolute top-7 right-4"
      onClick={() => router.push(`${window.location.origin}`)}
      aria-label="close modal"
    >
      <Icons.close className="h-4 w-4 absolute" aria-hidden="true" />
    </Button>
  );
};

export default CloseModal;
