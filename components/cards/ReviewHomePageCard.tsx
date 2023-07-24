import Image from "next/image";

const ReviewHomePageCard = (doc: any) => {
  return (
    <div
      className={`flex justify-between w-[60vmin] h-[25em] my-[2rem] mx-auto border-[8px] transition relative overflow-hidden 
    border-blue-500 group ease-in-out duration-500`}
    >
      <div
        className={`relative flex w-full h-full py-4 px-[.75rem] bg-${doc.sidebar_color} z-100 transition group-hover:transform 
    group-hover:translate-x-[-30vmin] group-hover:z-0 ease-in-out duration-500`}
      >
        <div
          className="group-hover:border-none flex flex-col 
        justify-between w-[15vmin] h-full pt-[.5rem] pr-0 pb-0 pl-[.5rem] border-l-[3px] transition border-l-blue-500 ease-in-out duration-500"
        >
          <h1 className="animate delay-5 text-center z-20">{doc.title}</h1>
          <p className="animate delay-5  mb-[2.5rem] z-20">{doc.review_type}</p>
        </div>
        <div
          className={`group-hover:w-[40vmin] absolute top-0 right-0 w-[40vmin] h-[100%]
      bg-no-repeat z-10 group-hover:bg-left ease-in-out duration-500`}
        >
          <Image
            src={doc.image}
            alt={doc.title}
            fill
            className="ease-in-out duration-500 mx-auto bg-cover"
          />
        </div>
      </div>
      <div
        className="absolute top-0 right-0 w-[40vmin] h-full py-[3vmin] px-[4vmin] bg-white 
    text-slate-500 [box-shadow: inset 1px 1px 15px 0 rgba(0 0 0 / .4)] overflow-y-scroll ease-in-out duration-500"
      >
        <p>
          Trees are woody perennial plants that are a member of the kingdom{" "}
          <em>Plantae</em>. All species of trees are grouped by their genus,
          family, and order. This helps make identifying and studying trees
          easier.
        </p>
        <p>
          Apart from providing oxygen for the planet and beauty when they bloom
          or turn color, trees are very useful. Certain species of hardwood and
          softwood trees are excellent for timber, making furniture, and paper.
        </p>
        <p>
          When managed properly, trees are a good source of renewable energy and
          construction material.
        </p>
      </div>
    </div>
  );
};

export default ReviewHomePageCard;
