import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import Blogs from "@/components/Blogs";

export default function BlogsPage() {
  return (
    <>
      <Background />
      <Navbar />
      <Blogs />
    </>
  );
}

export const metadata = {
  title: "My Blogs - hangsheng",
  description:
    "Read my latest blog posts about web development, technology, and programming insights.",
};
