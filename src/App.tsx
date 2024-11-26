import { useSelector } from "react-redux";
import Nav from "./components/Nav/Nav";
import { RootState } from "./Store/store";
import { useEffect } from "react";
import About from "./components/About/About";
import Education_Courses from "./components/Education_Courses/Education_Courses";
import MySkills from "./components/MySkills/Skills";
import MyWorks from "./components/Works/Works";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import { Toaster } from "react-hot-toast";

function App() {
  const isDark = useSelector((state: RootState) => state.darkMode.isDark);
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="App  dark:bg-black dark:text-white/80 overflow-hidden ">
      <Nav />
      <Hero />
      <About />
      <Education_Courses />
      <MySkills />
      <MyWorks />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
