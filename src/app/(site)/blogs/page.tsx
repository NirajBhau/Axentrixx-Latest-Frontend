import SingleBlog from "@/components/Blog/SingleBlog";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development & AI Automation Blog | Expert Insights by Axentrixx",
  description: "Deep-dive into modern web development, AI automation trends, and digital transformation strategies. Expert insights for startups and enterprises in India, the USA, and globally.",
  alternates: {
    canonical: "/blogs",
  },
};

const Blog = () => {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug", "author", "authorImage", "tags", "designation"]);

  return (
    <>
      <Breadcrumb
        pageName="Latest Tech Insights & Digital Strategy"
        pageDescription="Expert-led articles on modern web development, AI-driven automation, and scalable cloud solutions for high-growth businesses."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="mb-12 max-w-[800px]">
            <h1 className="mb-6 text-3xl font-bold text-dark dark:text-white sm:text-4xl">
              Web Development, AI Automation, and Digital Transformation Insights
            </h1>
            <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
              Welcome to the Axentrixx knowledge hub, where we share deep-dive web development insights and AI automation blogs designed to help startups and established enterprises thrive in the digital age. Our team of senior engineers and product strategists provides website optimization tips, tech trend analysis, and actionable advice on building scalable software solutions.
              <br /><br />
              Whether you are looking for the latest in Next.js development, custom AI model integration, or robust cloud infrastructure strategies, our content is crafted to build your topical authority and technical edge. Axentrixx works with businesses across India, the USA, and worldwide to deliver state-of-the-art digital experiences that rank, convert, and scale. Stay ahead of the competition with our curated technical deep-dives.
            </p>
          </div>
          <div className="-mx-4 flex flex-wrap justify-center">
            {posts.map((blog, i) => (
              <div key={i} className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3">
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
