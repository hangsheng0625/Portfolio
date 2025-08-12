import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import Projects from "@/components/Projects";

export default function ProjectsPage() {
  return (
    <>
      <Background />
      <Navbar />
      <div className="pt-20">
        {" "}
        {/* Add padding to account for fixed navbar */}
        <Projects />
      </div>
    </>
  );
}

export const metadata = {
  title: "My Projects - hangsheng",
  description:
    "Explore my portfolio of web development projects and technical solutions.",
};
