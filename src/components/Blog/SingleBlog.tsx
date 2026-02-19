import { Blog } from "@/types/blog";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, coverImage, excerpt, date, slug, author, authorImage, tags, designation } = blog;

  return (
    <div className="wow fadeInUp group relative overflow-hidden rounded-xl bg-white shadow-[0px_4px_20px_0px_rgba(0,0,0,0.08)] border border-gray-200 dark:bg-dark dark:border-dark-3 h-full flex flex-col" data-wow-delay=".1s">
      <Link href={`/blogs/${slug}`} className="relative block h-[220px] w-full overflow-hidden shrink-0">
        {tags && tags.length > 0 && (
          <span className="absolute left-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">
            {tags[0]}
          </span>
        )}
        <Image
          src={coverImage!}
          alt="image"
          fill
          className="w-full object-cover object-center transition group-hover:scale-110"
        />
      </Link>
      <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8 flex flex-col flex-1">
        <h3>
          <Link
            href={`/blogs/${slug}`}
            className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
          >
            {title}
          </Link>
        </h3>
        <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10 flex-1">
          {excerpt}
        </p>
        <div className="flex items-center mt-auto">
          <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
            <div className="mr-4">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                {authorImage ? (
                  <Image src={authorImage} alt="author" fill className="object-cover" />
                ) : (
                  <div className="w-full h-full bg-gray-300"></div>
                )}
              </div>
            </div>
            <div className="w-full">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                By {author}
              </h4>
              <p className="text-xs text-body-color">{designation}</p>
            </div>
          </div>
          <div className="inline-block">
            <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
              Date
            </h4>
            <p className="text-xs text-body-color">
              {format(new Date(date), "dd MMM, yyyy")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
