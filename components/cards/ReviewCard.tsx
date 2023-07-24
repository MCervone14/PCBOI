import Image from "next/image";
import React from "react";

import Link from "next/link";

const ReviewCard = (doc: any) => {
  return (
    <div
      className="flex flex-col my-4 mx-auto shadow-[0_3px_7px_-1px_rgba(0, 0, 0, .1)] mb-[1.6%] group bg-primary rounded-sm overflow-hidden z-0
    md:flex-row md:max-w-[700px]
    "
    >
      <div className="relative h-[200px] z-0 md:basis-[40%] md:h-auto">
        <Image
          className="transition transform absolute top-0 left-0 right-0 bottom-0 object-cover bg-center"
          alt="review image"
          src={doc.image}
          fill
          aria-hidden="true"
        />
        <ul className="absolute top-0 bottom-0 left-[-100%] m-auto transition bg-[rgba(0,0,0,.6)]  px-2.5 w-full list-none group-hover:left-0 ">
          <li className="text-center">
            <span className="opacity-80 text-2xl font-extrabold  text-pink-500">
              Author
            </span>{" "}
            <p className="flex flex-col text-center">M6C23</p>
          </li>
          <li className="flex flex-col text-center">
            <span className="opacity-80 text-2xl font-extrabold  text-pink-500">
              Date
            </span>{" "}
            Aug. 24, 2015
          </li>
          <li>
            <ul className="m-auto p-0 list-none flex flex-col justify-center">
              <span className="opacity-80 text-2xl text-center font-extrabold text-pink-500">
                Tags{" "}
              </span>
              <div className="flex justify-evenly flex-wrap">
                {doc.tags.map((tag: any) => (
                  <li className="inline-block mr-1 underline" key={tag}>
                    <Link
                      href={`/review/tag/${tag}`}
                      className="hover:text-blue-500 hover:underline"
                    >
                      {tag}
                    </Link>
                  </li>
                ))}
              </div>
            </ul>
          </li>
        </ul>
      </div>
      <div className="p-4 bg-primary relative z-1 md:basis-[60%]">
        <h1 className="text-2xl font-extrabold text-black">{doc.title}</h1>
        <h2 className="text-xs uppercase text-[#a2a2a2] mt-1">
          {doc.review_type}
        </h2>
        <p className="text-slate-800 py-2 mb-2">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
          dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque
          ad aliquam facilis numquam. Veritatis, sit.
        </p>
        <p className="align-right">
          <Link
            href={`${doc.slug}`}
            className="text-yblue absolute right-5 bottom-3 hover:text-background hover:underline "
          >
            Read More
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
