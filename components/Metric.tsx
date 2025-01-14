import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Metric = ({
  imgUrl,
  alt,
  value,
  title,
  href,
  textStyles,
  isAuthor,
  imgStyles,
}: {
  imgUrl: string;
  alt: string;
  value: string | number;
  title: string;
  href?: string;
  textStyles: string;
  isAuthor?: boolean;
  imgStyles?: string;
}) => {
  const metricContent = (
    <>
      <Image
        src={imgUrl}
        alt={alt}
        width={16}
        height={16}
        className={cn(imgStyles, "rounded-full object-contain")}
      />
      <p className={cn(textStyles, "flex items-center gap-1")}>
        {value}

        <span
          className={cn(
            isAuthor && "max-sm:hidden",
            "small-regular line-clamp-1"
          )}
        >
          {title}
        </span>
      </p>
    </>
  );
  return href ? (
    <Link href={href} className="gap-1 flex-center">
      {metricContent}
    </Link>
  ) : (
    <div className="gap-1 flex-center">{metricContent}</div>
  );
};

export default Metric;
