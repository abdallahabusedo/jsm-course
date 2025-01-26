import ROUTES from "@/constants/routes";
import Link from "next/link";

const QuestionDetails = async ({ params }: RouteParams) => {
  const { id } = await params;
  return (
    <div>
      QuestionDetails : {id}
      <Link
        className="text-white mt-9 cursor-pointer"
        href={ROUTES.EDIT_QUESTION(id)}
      >
        Edit Question
      </Link>
    </div>
  );
};

export default QuestionDetails;
