import Image from "next/image";
import Link from "next/link";
import Theme from "./Theme";
import MobileNavigation from "./MobileNavigation";
import { auth } from "@/auth";
import UserAvatar from "@/components/UserAvatar";

const Navbar = async () => {
  const session = await auth();
  return (
    <nav className="fixed top-0 z-50 w-full p-6 sm:px-12 flex-between gap-5 background-light900_dark200 shadow-light-300 dark:shadow-none">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/images/site-logo.svg"
          alt="DevFlow logo"
          width={23}
          height={23}
        />
        <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev<span className="text-primary-500">Flow</span>
        </p>
      </Link>

      <p>Global Search</p>

      <div className="flex-between gap-5">
        <Theme />

        {session?.user?.id && (
          <UserAvatar
            id={session.user.id}
            name={session.user.name!}
            imageUrl={session.user.image!}
          />
        )}

        <MobileNavigation />
      </div>
    </nav>
  );
};

export default Navbar;
