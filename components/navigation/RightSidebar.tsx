import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TagCard from "../cards/TagCard";

const hotQuestion = [
  { _id: "1", title: "how to use React?" },
  { _id: "2", title: "how to use Redux?" },
  { _id: "3", title: "how to use Next.js?" },
  { _id: "4", title: "how to use Tailwind CSS?" },
  { _id: "5", title: "how to use React Native?" },
];

const popularTags = [
  { _id: "1", name: "React", questions: 100 },
  { _id: "2", name: "Redux", questions: 100 },
  { _id: "3", name: "Next.js", questions: 100 },
  { _id: "4", name: "Tailwind CSS", questions: 100 },
  { _id: "5", name: "Javascript", questions: 100 },
];

const RightSidebar = () => {
  return (
    <section className="pt-36 custom-scrollbar background-light900_dark200 light-border sticky top-0 right-0 h-screen flex flex-col w-[350px] gap-6 overflow-y-auto border-l p-6 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Question</h3>

        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestion.map(({ _id, title }) => (
            <Link
              key={_id}
              href={ROUTES.PROFILE(_id)}
              className="flex justify-between cursor-pointer gap-7"
            >
              <p className="body-medium text-dark500_light700">{title}</p>
              <Image
                src="/icons/chevron-right.svg"
                width={20}
                height={20}
                alt="chevron"
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16 ">
        <h3 className="h3-bold text-dark200_light900">Popular Tags </h3>
        <div className="flex flex-col gap-4 mt-7">
          {popularTags.map(({ _id, name, questions }) => (
            <TagCard
              key={_id}
              _id={_id}
              name={name}
              questions={questions}
              showCount
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
