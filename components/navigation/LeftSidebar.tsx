import React from "react";
import NavLink from "./navbar/NavLink";
import Link from "next/link";
import ROUTES from "@/constants/routes";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { auth, signOut } from "@/auth";
import { LogOut } from "lucide-react";

const LeftSidebar = async () => {
  const session = await auth();
  const userId = session?.user?.id;
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky top-0 left-0 h-screen flex flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <div className="flex-1 flex flex-col gap-6">
        <NavLink userId={userId} />
      </div>
      <div className="flex flex-col gap-3">
        {userId ? (
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <Button
              type="submit"
              className="base-medium w-fit !bg-transparent px-4 py-3"
            >
              <LogOut className="size-5 text-black dark:text-white" />

              <span className="text-dark300_light900 max-lg:hidden">
                Logout
              </span>
            </Button>
          </form>
        ) : (
          <>
            <Button
              asChild
              className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none"
            >
              <Link href={ROUTES.LOGIN}>
                <Image
                  className="invert-colors lg:hidden"
                  src="/icons/account.svg"
                  width={20}
                  height={20}
                  alt="account"
                />
                <span className="primary-text-gradient max-lg:hidden">
                  Login
                </span>
              </Link>
            </Button>
            <Button
              asChild
              className="small-medium light-border-2 btn-tertiary min-h-[41px] text-dark400_light900 border w-full rounded-lg px-4 py-3 shadow-none"
            >
              <Link href={ROUTES.REGISTER}>
                <Image
                  className="invert-colors lg:hidden"
                  src="/icons/sign-up.svg"
                  width={20}
                  height={20}
                  alt="user"
                />
                <span className="max-lg:hidden">Register</span>
              </Link>
            </Button>
          </>
        )}
      </div>
    </section>
  );
};

export default LeftSidebar;
