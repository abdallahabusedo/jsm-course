import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilter from "@/components/filters/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import { Question } from "@/types/global";
import Link from "next/link";

const questions: Question[] = [
  {
    _id: "1",
    title: "How to learn react ",
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
    author: {
      name: "John Doe",
      _id: "1",
      image:
        "https://i.pinimg.com/236x/d1/4a/b5/d14ab57b9ddcfa1240ffabd13f8b609c.jpg",
    },
    upVotes: 10,
    answers: 2,
    views: 100,
    createAt: new Date("2023-09-01"),
  },
  {
    _id: "2",
    title: "How to learn Javascript ",
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
    author: {
      name: "abdallah",
      _id: "2",
      image:
        "https://i.pinimg.com/236x/d1/4a/b5/d14ab57b9ddcfa1240ffabd13f8b609c.jpg",
    },
    upVotes: 10,
    answers: 2,
    views: 100,
    createAt: new Date("2021-09-01"),
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
        {filteredQuestions.map((question: Question) => (
          <QuestionCard key={question._id} question={question} />
        ))}
      </div>
    </>
  );
};

export default Home;
