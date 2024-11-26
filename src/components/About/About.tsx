import { skillsList, soicalLinks } from "../data";
import HeadingText from "../HeadingText";

const About = () => {

  /* ----------RENDER  ---------- */
  const Skills = skillsList.map((item, idx) => {
    return (
      <span key={idx} className="text-mainColor capitalize mx-1 ">
        #{item.skill}
      </span>
    );
  });

  const Links = soicalLinks.map((item, idx) => {
    return (
      <div
        key={idx}
        className="link  backdrop-blur-md bg-black/90 dark:bg-gray-800 dark:hover:bg-gray-900 text-white my-4 w-10 h-10 rounded-full center-flex cursor-pointer"
      >
        <a href={item.Link}>{item.icon}</a>
      </div>
    );
  });

  return (
    <section id="about">
      <div className="container mx-auto pt-20 lg:pt-32 ">
        <div className="about-content flex-1 px-2">
         
         <HeadingText heading="about" />
          <h2 className="capitalize text-xl md:text-4xl font-bold my-3 text-center lg:text-left">
            {" "}
            Ahmed Hossam
          </h2>
          <p className="capitalize leading-7 text-sm md:text-lg">
            I'm Ahmed, a 22-year-old front-end developer hailing from city of
            Alexandria, Egypt. With a strong foundation in HTML5, CSS3, and
            JavaScript, specializes in building dynamic and responsive web
            applications using React.js. Tailwind CSS and typeScript allowing to
            create friendly-user-interfaces. I got also communication skills to
            collaborate effectively with team members and clients
          </p>
          <br />
          <p className="capitalize leading-7 text-sm md:text-lg">
            Driven by a passion for innovation and design, committed to
            delivering seamless user experiences by combining technical
            proficiency with creative problem-solving. my ability to adapt to
            new challenges and stay updated with the latest trends in web
            development makes me a valuable contributor to any team or project.
            Whether it's building intuitive dashboards, dynamic portfolios, or
            scalable applications, I strive to turn ideas into reality with
            precision and dedication.
          </p>

          <span className="skills inline-block my-4">{Skills}</span>

          <div className="flex justify-between items-center space-x-5">
            <div className="work flex-1 text-center capitalize">
              <h3 className="mb-2 font-bold tracking-wide">work</h3>
              <p>front-end developer</p>
            </div>

            <div className="education flex-1 text-center capitalize">
              <h3 className="mb-2 font-bold tracking-wide">education</h3>
              <div className="flex items-center">
                <img
                  src="https://miuegypt.edu.eg/wp-content/uploads/logo-miu.png"
                  alt="university-img"
                  className="w-1/4"
                />
                <p>misr international university </p>
              </div>
            </div>
          </div>

          <div className="social-links flex items-center space-x-4">
            {Links}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;
