import Link from "next/link";
import OfferList from "./OfferList";
import { ServicePrice } from "@/stripe/pricingData";

const PricingBox = ({ product }: { product: ServicePrice }) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div
        className="relative z-10 mb-10 overflow-hidden rounded-xl bg-white px-8 py-10 shadow-[0px_0px_40px_0px_rgba(0,0,0,0.08)] dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-14"
        data-wow-delay=".1s"
      >
        {product.isPopular && (
          <p className="absolute right-[-50px] top-[60px] inline-block -rotate-90 rounded-bl-md rounded-tl-md bg-primary px-5 py-2 text-base font-medium text-white">
            Popular
          </p>
        )}
        <span className="mb-2 block text-sm font-semibold uppercase tracking-widest text-primary">
          {product.tagline}
        </span>
        <span className="mb-4 block text-2xl font-bold text-dark dark:text-white">
          {product.nickname}
        </span>
        <p className="mb-8 text-sm font-medium leading-relaxed text-body-color dark:text-dark-6">
          {product.description}
        </p>

        <div className="mb-[40px]">
          <h3 className="mb-5 text-lg font-semibold text-dark dark:text-white">
            What&apos;s Included
          </h3>
          <div className="mb-10">
            {product.offers.map((offer, i) => (
              <OfferList key={i} text={offer} />
            ))}
          </div>
        </div>
        <div className="w-full">
          <Link
            href={product.ctaHref}
            className="inline-block w-full rounded-md bg-primary px-7 py-3 text-center text-base font-semibold text-white transition duration-300 hover:bg-primary/90"
          >
            {product.cta}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingBox;
