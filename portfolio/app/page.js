import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";
import MyServices from "@/components/MyServices";
import Contact from "@/components/Contact";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  return (
    <>
      <Background />
      <Navbar />
      <PageTransition>
        <Header />
        <AboutMe />
        {/* <MyServices /> */}
        <Contact />
      </PageTransition>
    </>
  );
}
