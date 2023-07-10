import Image from "next/image";
import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { MDXContent } from "@/components/MDXContent";

interface ReviewItemPageProps {
  params: {
    slug: string;
  };
}

async function getDocFromParams(slug: string) {
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);

  if (!doc) notFound();

  return doc;
}

const ReviewItemPage = async ({ params }: ReviewItemPageProps) => {
  const doc = await getDocFromParams(params.slug);

  if (!doc) {
    notFound();
  }

  return (
    <article className="h-full">
      <div className="mt-20 w-full">
        <div>
          <div className="text-5xl mb-2">{doc.title}</div>
          <div className="flex flex-col mb-10">
            <div className="flex gap-10">
              <p className="text-sm">by Michael Cervone</p>
              <p className="text-sm">April 28th, 2023</p>
            </div>
          </div>
        </div>
        <Image
          src="/prospector.jpg"
          alt="dummy alt"
          width={1920}
          height={1080}
          className="object-cover mb-10"
        />
      </div>
      <div className="flex flex-1 w-3/4 mx-auto">
        <MDXContent code={doc.body.code} />
      </div>
    </article>
  );
};

export default ReviewItemPage;
