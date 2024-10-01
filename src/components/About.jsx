import { content } from "../../Content.jsx";

const About = () => {
  const { About } = content;
  return (
    <section id="about" className="overflow-hidden ">
       
      <div className="min-h-screen relative  md:flex-row flex-col-reverse justify-center items-center">
      <div
          data-aos="slide-right"
          data-aos-delay="1200"
          className="absolute h-full w-full left-0  bg-primaryLinear  -z-10"
          
        >
          
        </div> 
        <h2 className="title justify-center items-center " data-aos="fade-down">
          {About.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {About.subtitle}
        </h4>
        <br />
        <div
          className="duration-500 bg-bg_light_primary mx-auto border-2 p-8 
          rounded-2xl flex flex-col gap-6 border-slate-200 max-w-2xl"
          data-aos="fade-down"
        >
          <div className="w-full pt-5">
            <p className="sm:text-base text-sm text-center mx-auto max-w-md">
              {About.about_content[0].text}
            </p>
            <br />
            <div className="flex justify-center">
              <a href="../../public/mycv/HansaniMaleesha_SE.pdf" download="Hansani Maleesha SE">
                <button className="btn">{About.btnText}</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
