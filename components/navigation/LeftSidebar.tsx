import React from "react";
import NavLink from "./navbar/NavLink";
import Link from "next/link";
import ROUTES from "@/constants/routes";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const LeftSidebar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky top-0 left-0 h-screen flex flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <div className="flex-1 flex flex-col gap-6">
        <NavLink />
      </div>
      <div className="flex flex-col gap-3">
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
            <span className="primary-text-gradient max-lg:hidden">Login</span>
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
      </div>
    </section>
  );
};

export default LeftSidebar;
