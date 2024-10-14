// import content
import { createElement } from "react";
import { content } from "../../Content.jsx";

const Skills = () => {
  const { skills } = content;

  return (
    <section className="overflow-hidden" id="skills">
      <div className="min-h-screen relative md:flex-row flex-col-reverse justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full w-full left-0 bg-primaryLinear -z-10"
        ></div>

        {/* content */}
        <div className="md:container px-5 py-14">
          <h2 className="title" data-aos="fade-down">
            {skills.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {skills.subtitle}
          </h4>
          <br />
          <div className="flex flex-wrap gap-4 justify-center">
            {skills.skills_content.map((skill, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 400}
                className="bg-white relative group w-full flex items-center gap-3 p-3 max-w-xs rounded-md border-2 border-slate-200"
              >
                <div>
                  <img
                    src={skill.logo}
                    alt="..."
                    className="w-10 group-hover:scale-125 duration-200"
                  />
                </div>
                <div>
                  <h6>{skill.name}</h6>
                  <p className="italic">{skill.para}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
