import { Github, Link } from "lucide-react";

interface IProps {
  image: string;
  title: string;
  links: {
    demo?: string;
    github?: string;
  };
  des?: string;
}
const Card = ({ image, title, links, des }: IProps) => {
  return (
    <div className="card max-w-sm bg-base-100 w-96 shadow-x mx-auto dark:bg-gray-900">
      <figure>
        <img src={image} alt={title} />
      </figure>

      <div className="card-body">
        <div className="flex items-center justify-between">
          <h2 className="card-title capitalize dark:text-white font-bold">{title}</h2>
          <div className="links flex items-center space-x-3">
            <a href={links.demo} target="_blank" className="demo text-black dark:text-white ">
                <Link />
            </a>
            <a href={links.github} target="_blank" className="github text-black dark:text-white">
              <Github />
            </a>
          </div>
        </div>
        <p className="break-all capitalize leading-7 text-gray-500 dark:text-gray-400">{des?.slice(0, 100)}...</p>
      </div>
    </div>
  );
};

export default Card;
