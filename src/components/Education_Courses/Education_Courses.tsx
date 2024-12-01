import { useEffect } from "react";
import { Education_CoursesList } from "../data";
import HeadingText from "../HeadingText";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
const Education_Courses = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const Education_CoursesL = Education_CoursesList.map((item, idx) => {
    return (
      <div
        key={idx}
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay={idx * 200}
        className="box  max-w-sm mx-auto md:max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700 relative before:content[;] before:absolute before:left-0 before:top-0 before:w-0 before:h-full before:bg-gradient-to-r before:from-red-950 before:via-red-900  dark:before:hover:w-full before:transition-all before:duration-300 z-10 before:-z-10"
      >
        <div>
          <h2 className="mb-2  text-2xl font-bold tracking-tight text-gray-900 dark:text-white capitalize ">
            {item.title}
          </h2>

          <h5 className="mb-2 capitalize">{item.place}</h5>
        </div>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {item.desc}
        </p>
      </div>
    );
  });
  return (
    <section id="education_courses">
      <div className="container mx-auto">
        <HeadingText heading="education & courses" />

        <div className="grid grid-cols-1 md:grid-cols-2  gap-5">
          {Education_CoursesL}
        </div>
      </div>
    </section>
  );
};

export default Education_Courses;
