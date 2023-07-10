import Footer from "@/components/Footer";
import ReviewLayout from "@/components/layouts/ReviewLayout";

export default function ReviewLayoutPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <ReviewLayout>{children}</ReviewLayout>
    </div>
  );
}
