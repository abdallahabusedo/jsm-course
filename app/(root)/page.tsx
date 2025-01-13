import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const Home = async () => {
  const session = await auth();
  console.log(session);

  return (
    <main>
      <h1 className="h1-bold background-light900_dark300 text-dark100_light900">
        Welcome to Next Js 15
      </h1>
      <form
        className="px-10 pt-[100px]"
        action={async () => {
          "use server";

          await signOut({ redirectTo: ROUTES.LOGIN });
        }}
      >
        <Button type="submit">Logout</Button>
      </form>
    </main>
  );
};

export default Home;
