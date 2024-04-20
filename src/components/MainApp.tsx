import Hero from "./Hero";
import Experience from "./Experience";
import Qualification from "./Qualification";
import Achievements from "./Achievements";
import Skills from "./Skills";

const MainApp = () => {
  return (
    <div className="w-full min-h-screen p-2">
      <Hero />
      <Experience />
      <Qualification />
      <Achievements />
      <Skills />
    </div>
  );
};

export default MainApp;
