
export type Service = {
  id: number;
  title: string;
  slug: string;
  paragraph: string;
  image: string;
  details?: {
    intro: string;
    content: string;
    points?: {
      title: string;
      description: string;
    }[]
  };
  problemSection?: {
    title: string;
    content: string;
  };
  solutionSection?: {
    title: string;
    content: string;
  };
  industries?: string[];
  technologies?: string[];
  faqs?: {
    question: string;
    answer: string;
  }[];
  seoMetadata?: {
    title: string;
    description: string;
  };
};
