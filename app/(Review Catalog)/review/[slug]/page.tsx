import Image from "next/image";
import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { MDXContent } from "@/components/MDXContent";
import Shell from "@/components/Shell";

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
    <Shell className="flex flex-col justify-center">
      <div className="mt-20 w-full">
        <div>
          <div className="text-5xl mb-2 text-center">{doc.title}</div>
          <div className="flex flex-col mb-10">
            <div className="flex gap-10 mx-48">
              <p className="text-sm">by M6C23</p>
              <p className="text-sm">April 28th, 2023</p>
            </div>
          </div>
        </div>
        <Image
          src="/prospector.jpg"
          alt="dummy alt"
          width={1000}
          height={1000}
          className="object-cover mb-10 mx-auto"
        />
      </div>
      <div className="flex flex-1 w-3/4 mdxImage">
        <MDXContent code={doc.body.code} />
      </div>
    </Shell>
  );
};

export default ReviewItemPage;
