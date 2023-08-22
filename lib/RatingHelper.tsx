import Image from "next/image";

export function getRatingFace(rating: number) {
  if (rating < 60) {
    return (
      <Image
        src="/ratings-icons/double-arrow-d.png"
        alt="double arrow down rating"
        width={20}
        height={20}
      />
    );
  } else if (rating < 70) {
    return (
      <Image
        src="/ratings-icons/arrow-down.png"
        alt="arrow down rating"
        width={20}
        height={20}
      />
    );
  } else if (rating < 80) {
    return (
      <Image
        src="/ratings-icons/h-line2.png"
        alt="neutral rating"
        width={20}
        height={20}
      />
    );
  } else if (rating < 90) {
    return (
      <Image
        src="/ratings-icons/arrow-up.png"
        alt="arrow up rating"
        width={20}
        height={20}
      />
    );
  } else if (rating <= 100) {
    return (
      <Image
        src="/ratings-icons/double-arrow-u.png"
        alt="double arrow up rating"
        width={20}
        height={20}
      />
    );
  } else {
    return <p className="opacity-75">--</p>;
  }
}
