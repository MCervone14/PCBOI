import { Icons } from "@/components/Icons";

export function getRatingFace(rating: number) {
  if (rating <= 60) {
    return (
      <Icons.frown className="w-6 h-6 text-orange-600" aria-hidden="true" />
    );
  } else if (rating <= 80) {
    return <Icons.meh className="w-6 h-6 text-yellow-400" aria-hidden="true" />;
  } else if (rating <= 90) {
    return (
      <Icons.smile className="w-6 h-6 text-green-300" aria-hidden="true" />
    );
  } else if (rating <= 100) {
    return (
      <Icons.smilePlus className="w-6 h-6 text-purple-500" aria-hidden="true" />
    );
  } else {
    return <p>No Rating</p>;
  }
}
