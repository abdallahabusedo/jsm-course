import ROUTES from "@/constants/routes";
import { getDevIconClassName } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";

const TagCard = ({
  _id,
  name,
  questions,
  showCount,
  compact,
  remove,
  isButton,
  handleRemove,
}: {
  _id: string;
  name: string;
  questions?: number;
  showCount?: boolean;
  compact?: boolean;
  isButton: boolean;
  remove?: boolean;
  handleRemove?: () => void;
}) => {
  const handleClick = (e: React.MouseEvent) => e.preventDefault();
  const iconClassName = getDevIconClassName(name);
  const content = (
    <>
      <Badge className="flex flex-row gap-2 px-4 py-2 uppercase rounded-md subtle-medium background-light800_dark300 text-light400_light500">
        <div className="space-x-2 flex-center">
          <i className={`${iconClassName}`}></i>
          <span>{name}</span>
        </div>
        {remove && (
          <Image
            src="/icons/close.svg"
            alt="close"
            width={12}
            height={12}
            onClick={handleRemove}
            className="object-contain cursor-pointer invert-0 dark:invert"
          />
        )}
      </Badge>

      {showCount && (
        <p className="small-medium text-dark500_light700">{questions}</p>
      )}
    </>
  );

  if (compact) {
    return isButton ? (
      <button onClick={handleClick} className="flex justify-between gap-2">
        {content}
      </button>
    ) : (
      <Link href={ROUTES.TAG(_id)} className="flex justify-between gap-2">
        {content}
      </Link>
    );
  }
};

export default TagCard;
