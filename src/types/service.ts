
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
};
