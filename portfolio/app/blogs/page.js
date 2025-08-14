import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import Blogs from "@/components/Blogs";
import PageTransition from "@/components/PageTransition";

export default function BlogsPage() {
  return (
    <>
      <Background />
      <Navbar />
      <PageTransition>
        <div className="pt-20">
          {/* Add padding to account for fixed navbar */}
          <Blogs />
        </div>
      </PageTransition>
    </>
  );
}

export const metadata = {
  title: "My Blogs - hangsheng",
  description:
    "Read my latest blog posts about web development, technology, and programming insights.",
};
