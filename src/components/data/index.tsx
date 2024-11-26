import {
  Facebook,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import {
  IContact,
  IEducation_Courses,
  IForm,
  IProjects,
  ISkills,
  ISoicalLinks,
} from "../../interface/interface";

export const skillsList: ISkills[] = [
  {
    skill: "html",
    src: "./R.jpg",
  },
  {
    skill: "css",
    src: "./R.png",
  },
  {
    skill: "javaScript",
    src: "OIP.jpg",
  },
  {
    skill: "tailwind css",
    src: "OIP (1).jpg",
  },
  {
    skill: "typeScript ",
    src: "typescript-logo.png",
  },
  {
    skill: "react js",
    src: "OIP (2).jpg",
  },
];

export const skillsList2: ISkills[] = [
  {
    skill: "React Query",
    src: "./images/1_NvNjVbjTCT_qqloPnR098w.png",
  },
  {
    skill: "React Hook Form",
    src: "./images/maxresdefault.jpg",
  },
  {
    skill: "Git",
    src: "./images/OIP.jpg",
  },
  {
    skill: "Github",
    src: "./images/github.png",
  },
  {
    skill: "Axios",
    src: "./images/OIP (1).jpg",
  },
  {
    skill: "React Router",
    src: "./images/react-router-dom-feature-img.jpg",
  },
];

export const soicalLinks: ISoicalLinks[] = [
  {
    Link: "https://github.com/Ahmed-Hossam1",
    icon: <Github />,
    name: "Github",
  },
  {
    Link: "www.linkedin.com/in/ahmed-hossam-28918128b",
    icon: <Linkedin />,
    name: "LinkedIn",
  },
  {
    Link: "https://facebook.com",
    icon: <Facebook />,
    name: "Facebook",
  },
];

export const Education_CoursesList: IEducation_Courses[] = [
  {
    title: "misr international University",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla tempora odit quae quisquam ullam itaque laborum laboriosam eius architecto ipsam",
  },
  {
    title: "html css javascript",
    place: "elzer web school",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla tempora odit quae quisquam ullam itaque laborum laboriosam eius architecto ipsam",
  },
  {
    title: "react js typescript",
    place: "udemy",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla tempora odit quae quisquam ullam itaque laborum laboriosam eius architecto ipsam",
  },
  {
    title: "git&github",
    place: "elzer web school",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla tempora odit quae quisquam ullam itaque laborum laboriosam eius architecto ipsam",
  },
];

export const projects_Html_css_List: IProjects[] = [
  {
    title: "project 5",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore totam perferendis numquam at illo quibusdam fugiat molestiae asperiores blanditiis soluta.",
    image: "./images/Screenshot (197).png",
    links: {
      demo: "https://project-5-iota-cyan.vercel.app/",
      github: "https://github.com/Ahmed-Hossam1/project-5/tree/main",
    },
  },
  {
    title: "project 4",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore totam perferendis numquam at illo quibusdam fugiat molestiae asperiores blanditiis soluta.",
    image: "./images/Screenshot (196).png",
    links: {
      demo: "https://project-4-neon.vercel.app/",
      github: "https://github.com/Ahmed-Hossam1/project-4/tree/main",
    },
  },
  {
    title: "shosey app",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore totam perferendis numquam at illo quibusdam fugiat molestiae asperiores blanditiis soluta.",
    image: "./images/Screenshot (174).png",
    links: {
      demo: "https://real-project-1.vercel.app/",
      github: "https://github.com/Ahmed-Hossam1/real-project-1/tree/main",
    },
  },
  {
    title: "project 3",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore totam perferendis numquam at illo quibusdam fugiat molestiae asperiores blanditiis soluta.",
    image: "./images/Screenshot (173).png",
    links: {
      demo: "https://project-3-gules.vercel.app/",
      github: "https://github.com/Ahmed-Hossam1/project-3/tree/main",
    },
  },

  {
    title: "project 1",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore totam perferendis numquam at illo quibusdam fugiat molestiae asperiores blanditiis soluta.",
    image: "./images/Screenshot (184).png",
    links: {
      demo: "https://project-2-virid.vercel.app/",
      github: "https://github.com/Ahmed-Hossam1/project-2/tree/main",
    },
  },
];

export const projects_javaScript_List: IProjects[] = [
  {
    title: "wealthome",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore totam perferendis numquam at illo quibusdam fugiat molestiae asperiores blanditiis soluta.",
    image: "./images/Screenshot (175).png",
    links: {
      demo: "https://wealthome-sigma.vercel.app/",
      github: "https://github.com/Ahmed-Hossam1/wealthome/tree/main",
    },
  },
  {
    title: "cool games",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore totam perferendis numquam at illo quibusdam fugiat molestiae asperiores blanditiis soluta.",
    image: "./images/Screenshot (177).png",
    links: {
      github: "https://github.com/Ahmed-Hossam1/",
    },
  },
  {
    title: "IPhone Page",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore totam perferendis numquam at illo quibusdam fugiat molestiae asperiores blanditiis soluta.",
    image: "./images/Screenshot (185).png",
    links: {
      demo: "https://iphone-pi-five.vercel.app/",
      github: "https://github.com/Ahmed-Hossam1/IPhone/tree/main",
    },
  },
];

export const projects_React_List: IProjects[] = [
  {
    title: "Movie-App",
    desc: "movieo app is a modern website built with modern technologies like reactjs, tailwind, Router DOM ,daisyui the user can engaging with the website and see the movie detail, Tv series, search for secpic movie, see movie review and login or create an account ✨fully responsive design with tailwind css🎨 Enhanced with React Js and tailwind css",
    image: "./images/Screenshot (178).png",
    links: {
      demo: "https://movie-app-seven-flax.vercel.app/",
      github: "https://github.com/Ahmed-Hossam1/Movie-App/tree/main",
    },
  },
  {
    title: "bonik-E-commerce",
    desc: " An innovative e-commerce platform built with React.js and styled using Tailwind CSS, designed to provide a seamless shopping experience with a clean, responsive, and visually appealing interface. Leveraging React.js for dynamic, fast-loading pages and Tailwind CSS for consistent, modern styling, this website offers users an intuitive browsing experience across all devices. The site’s efficient structure and aesthetic design make product discovery and purchase straightforward, enhancing the overall customer journey from browsing to checkout",
    image: "./images/Screenshot (165).png",
    links: {
      demo: "https://bonik-e-commerce-app-react.vercel.app/",
      github:
        "https://github.com/Ahmed-Hossam1/bonik-E-commerce-app-React/tree/main",
    },
  },
  {
    title: "dashboard",
    desc: "a dynamic dashboard created with React.js, Tailwind CSS, TypeScript, and Nivo Charts. The dashboard aims to offer a visually appealing and interactive experience, presenting data-driven insights through customizable charts and visualizations.React.js: Enhances user experience with responsiveness and fluidity. Tailwind CSS: Offers a modern design with streamlined styling. TypeScript: Improves reliability and maintenance through robust type definitions. Nivo Charts: Provides flexible and interactive charting solutions for data visualization.",
    image: "./images/Screenshot (187).png",
    links: {
      demo: "https://dashboard-seven-nu-75.vercel.app/",
      github: "https://github.com/Ahmed-Hossam1/Dashboard/tree/main",
    },
  },
  {
    title: "products-builder",
    desc: "products-builder app a simple app for creating updating and delete products",
    image: "./images/Screenshot (188).png",
    links: {
      demo: "https://products-builder-theta.vercel.app/",
      github: "https://github.com/Ahmed-Hossam1/products-Builder/tree/main",
    },
  },
  {
    title: "gym",
    desc: "A simple Landing Page for Gym exercise built with react Js and tailwind css Fully Responsive",
    image: "./images/Screenshot (186).png",
    links: {
      demo: "https://gym-black-six.vercel.app/",
      github: "https://github.com/Ahmed-Hossam1/GYM",
    },
  },
  {
    title: "hoobank",
    desc: "A simple Landing Page built with react Js and tailwind css Fully Responsive",
    image: "./images/Screenshot (166).png",
    links: {
      demo: "https://hoobank-react-three.vercel.app/",
      github: "https://github.com/Ahmed-Hossam1/hoobank-React/tree/main",
    },
  },
];

export const FormInputs: IForm[] = [
  {
    name: "firstName",
    placeholder: "First Name",
    type: "text",
    validation: {
      required: true,
    },
  },
  {
    name: "lastName",
    placeholder: "Last Name ",
    type: "text",
    validation: {
      required: true,
    },
  },
  {
    name: "email",
    placeholder: "Email",
    type: "email",
    validation: {
      required: true,
      pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
    },
  },
];

export const ContactInfo: IContact[] = [
  {
    icon: <Phone />,
    contact: "(+20) 01284457379",
  },
  {
    icon: <Mail />,
    contact: "medosamsam919@gmail.com",
  },
  {
    icon: <MapPin />,
    contact: "Alexandria, Egypt",
  },
  {
    icon: <MessageCircle />,
    contact: "(+20) 01284457379",
  },
];
