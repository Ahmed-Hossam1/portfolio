import { skillsList, skillsList2 } from "../data";
import HeadingText from "../HeadingText";
import SliderProvider from "../Slider/SliderProvider";

const MySkills = () => {
  const Skills = skillsList.map((item, idx) => {
    return (
      <div className="slide" key={idx}>
        <img
          key={idx}
          src={item.src}
          alt="skill-img"
          className="w-full h-40 object-contain"
        />
      </div>
    );
  });

  const Skills2 = skillsList2.map((item, idx) => {
    return (
      <div className="slide" key={idx}>
        <img
          key={idx}
          src={item.src}
          alt="skill-img"
          className="w-full h-40 object-contain"
        />
      </div>
    );
  });

  return (
    <section id="skills">
      <div className="container mx-auto">
        <HeadingText heading="my skills" />
        <SliderProvider className="scroll-right">
          {Skills}
          {Skills}
        </SliderProvider>
        <SliderProvider className="scroll-left">
          {Skills2}
          {Skills2}
        </SliderProvider>
      </div>
    </section>
  );
};

export default MySkills;
