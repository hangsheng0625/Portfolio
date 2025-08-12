import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";
import MyServices from "@/components/MyServices";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Background />
      <Navbar />
      <Header />
      <AboutMe />
      {/* <MyServices /> */}
      <Contact />
    </>
  );
}
