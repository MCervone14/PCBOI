import { Icons } from "@/components/Icons";

export function getRatingFace(rating: number) {
  if (rating <= 60) {
    return (
      <Icons.frown className="w-6 h-6" color="orange" aria-hidden="true" />
    );
  } else if (rating <= 80) {
    return <Icons.meh className="w-6 h-6 " color="yellow" aria-hidden="true" />;
  } else if (rating <= 90) {
    return <Icons.smile className="w-6 h-6" color="green" aria-hidden="true" />;
  } else if (rating <= 100) {
    return (
      <Icons.smilePlus className="w-6 h-6" color="purple" aria-hidden="true" />
    );
  } else {
    return <p>No Rating</p>;
  }
}
