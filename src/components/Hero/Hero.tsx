import { Typewriter } from "react-simple-typewriter";
import Btn from "../UI/Btn";
import ParticlesDesign from "../UI/ParticlesDesign";
const Hero = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content  text-center relative z-10">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl md:text-5xl lg:text-6xl text-white font-bold capitalize">
            welcome to <br /> my{" "}
            <span className="mt-1 inline-block font-instrument italic text-mainColor">
              portfolio
            </span>{" "}
          </h1>
          <p className="mb-5 text-white">
            <div className="text-xl md:text-2xl lg:text-3xl">
              I'm{" "}
              <span className="text-mainColor text-instrument italic">
                Ahmed
              </span>{" "}
            </div>
            <div style={{ width: "100%", textAlign: "center" ,color : "white" }}>
              <Typewriter
                words={["Front-End Developer", "React Js"]}
                loop={false}
                
              />
            </div>
          </p>
          <Btn>
            <a href="#about">Get started</a>
          </Btn>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full min-h-screen  ">
        <ParticlesDesign />
      </div>
    </div>
  );
};

export default Hero;
