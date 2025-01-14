import HomeFilter from "@/components/filters/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Link from "next/link";

const questions = [
  {
    _id: "1",
    title: "How to learn react ",
    description: "I want to learn react but i dont know where to start",
    tags: [
      {
        _id: "1",
        name: "React",
      },
      {
        _id: "2",
        name: "Javascript",
      },
    ],
    author: { name: "John Doe", _id: "1" },
    upVotes: 10,
    downVotes: 2,
    views: 100,
    createAt: new Date(),
  },
  {
    _id: "2",
    title: "How to learn Javascript ",
    description: "I want to learn Javascript but i dont know where to start",
    tags: [
      {
        _id: "1",
        name: "React",
      },
      {
        _id: "2",
        name: "Javascript",
      },
    ],
    author: { name: "abdallah", _id: "2" },
    upVotes: 10,
    downVotes: 2,
    views: 100,
    createAt: new Date(),
  },
];

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}
const Home = async ({ searchParams }: SearchParams) => {
  const { query = "", filter = "" } = await searchParams;
  const filteredQuestions = questions.filter((question) =>
    question.title.toLowerCase().includes(query?.toLowerCase())
  );

  return (
    <>
      <section className="flex flex-col-reverse justify-between w-full gap-4 sm:flex-row sm:items-center ">
        <h1 className="h1-bold text-dark100_light900">All Question</h1>
        <Button
          className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900"
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch
          imgSrc="/icons/search.svg"
          placeholder="Search questions"
          otherClasses="flex-1"
          route="/"
        />
      </section>
      <HomeFilter />
      <div className="flex flex-col w-full gap-6 mt-10">
        {filteredQuestions.map((question) => (
          <h1 key={question._id}>{question.title}</h1>
        ))}
      </div>
    </>
  );
};

export default Home;
