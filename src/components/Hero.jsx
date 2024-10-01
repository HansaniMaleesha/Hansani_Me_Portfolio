// import content

import { content } from "../../Content.jsx";
const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex  md:flex-row flex-col-reverse  justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear  -z-10"
        >
          <h1 className="rotate-90 absolute mt-20 top-[30%] right-[-15%] text-[#EAF2FA]">
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>

        {/* first col */}
<div className=" " data-aos="fade-down">
  <h2>{hero.title}</h2>
  <br />
  <div className="flex justify-end">
    <a href="../../public/mycv/HansaniMaleesha_SE.pdf" download="Hansani Maleesha SE">
      <button className="btn">{hero.btnText}</button>
    </a>
  </div>
  <div className="flex flex-col gap-10 mt-10">
    {hero.hero_content.map((content, i) => (
      <div
        key={i}
        data-aos="fade-down"
        data-aos-delay={i * 300}
        className={`flex items-center w-80 gap-5
          ${i === 1 && " flex-row-reverse text-right"}`}
      >
        <h3>{content.count}</h3>
        <p>{content.text}</p>
      </div>
    ))}
  </div>

  {/* Add social links section after the content */}
  <div className="flex gap-5 mt-10">
    {hero.logos.map((logo, index) => (
      <a key={index} href={logo.url} target="_blank" rel="noopener noreferrer">
        <img
          src={logo.logo}
          alt={logo.name}
          className="w-10 h-10" 
        />
      </a>
    ))}
  </div>
</div>

        {/* sec col */}
        <div className="md:h-[37rem] h-96">
        <div className="w-64 h-64  rounded-full overflow-hidden border-4 border-primary flex justify-center items-center">
            <img
              src={hero.image}
              data-aos="slide-up"
              alt="..."
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
