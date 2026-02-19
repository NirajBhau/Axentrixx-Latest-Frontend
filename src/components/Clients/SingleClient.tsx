import Image from "next/image";
import Link from "next/link";
import { Client } from "@/types/client";

const SingleClient = ({ client }: { client: Client }) => {
  const { title, link, logoWhite } = client;
  return (
    <Link
      href={link}
      target="_blank"
      rel="nofollow noopner"
      className="relative z-50 mx-3 flex w-full max-w-[260px] items-center justify-center py-[15px] sm:mx-4 lg:max-w-[230px] xl:mx-6 xl:max-w-[250px] 2xl:mx-8 2xl:max-w-[260px]"
    >
      <div className="relative h-14 w-full opacity-100 grayscale-0 transition hover:grayscale-0">
        <Image
          src={logoWhite}
          alt={title}
          fill
          className="object-contain"
        />
      </div>
    </Link>
  );
};

export default SingleClient;
