import { useState } from "react";
import {
  projects_Html_css_List,
  projects_javaScript_List,
  projects_React_List,
} from "../data";
import HeadingText from "../HeadingText";
import Card from "../UI/Card";

const Works = () => {
  /*---------STATE-----------*/
  const [toggled, setToggled] = useState<number>(1);

  /*---------FUNCTION-----------*/
  const handleTab = (index: number) => {
    setToggled(index);
  };
  /*---------RENDERING-----------*/
  const Render_Html_Css = projects_Html_css_List.map((item, idx) => {
    return (
      <Card
        key={idx}
        image={item.image}
        title={item.title}
        links={{ demo: item.links.demo, github: item.links.github }}
        des={item.desc}
      />
    );
  });

  const Render_Html_Css_JavaScript = projects_javaScript_List.map(
    (item, idx) => {
      return (
        <Card
          key={idx}
          image={item.image}
          title={item.title}
          links={{ demo: item.links.demo, github: item.links.github }}
          des={item.desc}
        />
      );
    }
  );

  const Render_projects_React_List = projects_React_List.map((item, idx) => {
    return (
      <Card
        key={idx}
        image={item.image}
        title={item.title}
        links={{ demo: item.links.demo, github: item.links.github }}
        des={item.desc}
      />
    );
  });

  return (
    <section id="works">
      <div className="container mx-auto">
        <HeadingText heading="my works" />

        <div className="tab_list grid space-x-1">
          <div
            className={`tab cursor-pointer bg-red-400  ${
              toggled === 1 ? "active" : ""
            }  text-white capitalize mb-3 `}
            onClick={() => handleTab(1)}
          >
            all
          </div>
          <div
            className={`tab cursor-pointer bg-red-400 ${
              toggled === 2 ? "active" : ""
            }  text-white capitalize mb-3`}
            onClick={() => handleTab(2)}
          >
            html & css
          </div>
          <div
            className={`tab cursor-pointer bg-red-400 ${
              toggled === 3 ? "active" : ""
            }  text-white capitalize mb-3`}
            onClick={() => handleTab(3)}
          >
            javascript
          </div>
          <div
            className={`tab cursor-pointer bg-red-400 ${
              toggled === 4 ? "active" : ""
            }  text-white capitalize mb-3`}
            onClick={() => handleTab(4)}
          >
            react
          </div>
        </div>

        <div className="content-tabs">
          <div
            className={`all  ${
              toggled === 1
                ? "active-content"
                : toggled === 2
                ? "active-content"
                : toggled === 3
                ? "active-content"
                : toggled === 4
                ? "active-content"
                : ""
            } grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5`}
          >
            {toggled === 1 ? (
              <>
                {Render_Html_Css_JavaScript}
                {Render_projects_React_List}
                {Render_Html_Css}
              </>
            ) : toggled === 2 ? (
              <>{Render_Html_Css}</>
            ) : toggled === 3 ? (
              <>{Render_Html_Css_JavaScript}</>
            ) : toggled === 4 ? (
              <>{Render_projects_React_List}</>
             ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
