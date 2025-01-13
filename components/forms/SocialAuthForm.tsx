"use client";
import { toast } from "@/hooks/use-toast";
import Image from "next/image";
import { Button } from "../ui/button";
import ROUTES from "@/constants/routes";
import { signIn } from "next-auth/react";

const SocialAuthForm = () => {
  const buttonClassName =
    "background-dark400_light900 body-medium text-dark200_light800 rounded-2 min-h-12 flex-1 px-4 py-3.5";

  const handleLogin = async (provider: "github" | "google") => {
    try {
      await signIn(provider, {
        callbackUrl: ROUTES.HOME,
        redirect: false,
      });
    } catch (error) {
      console.log(error);

      toast({
        title: "Login failed",
        description:
          error instanceof Error
            ? error.message
            : "An error occurred during login",
        variant: "destructive",
      });
    }
  };
  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={buttonClassName} onClick={() => handleLogin("github")}>
        <Image
          src="/icons/github.svg"
          alt="GitHub logo"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Continue with GitHub</span>
      </Button>
      <Button className={buttonClassName} onClick={() => handleLogin("google")}>
        <Image
          src="/icons/google.svg"
          alt="Google logo"
          width={20}
          height={20}
          className=" mr-2.5 object-contain"
        />
        <span>Continue with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
