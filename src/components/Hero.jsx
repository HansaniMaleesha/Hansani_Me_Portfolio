// import content

import { content } from "../../Content.jsx";
const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex  md:flex-row flex-col-reverse justify-center items-center " >
         <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full w-full top-0 right-0 bg-primaryLinear  -z-10"
        >
          
        </div> 

        {/* first col */}
        <div className="min-h-screen relative flex md:flex-row flex-col-reverse justify-between items-center" >
        {/* First Column */}
          <div className="flex flex-col " data-aos="fade-down" >
              <h1 className=" top-10 justify-center items-center  text-[#EAF2FA] " style={{marginBottom:"10px"}}>
                {hero.firstName}{" "}
                <span className="text-dark_primary">{hero.LastName}</span>
              </h1>
              <h6 className="justify-center items-center">{hero.title}</h6>
              <br />
    <div className="flex ">
     
    </div>
    <div className="flex flex-col gap-5">
      {hero.hero_content.map((content, i) => (
        <div
          key={i}
          data-aos="fade-down"
          data-aos-delay={i * 300}
          className={`flex w-80 gap-5 ${i === 1 && "flex-row-reverse"}`}
        >
          <h3>{content.count}</h3>
          <p>{content.text}</p>
        </div>
      ))}
       <a href="#contact">
        <button className="btn justify-end">{hero.btnText}</button>
      </a>
    </div>

    {/* Add social links section after the content */}
    <div className="flex gap-5 mt-10 justify-center items-center">
      {hero.logos.map((logo, index) => (
        <a key={index} href={logo.url} target="_blank" rel="noopener noreferrer">
          <img src={logo.logo} alt={logo.name} className="w-10 h-10" />
        </a>
      ))}
    </div>
  </div>

  {/* Second Column */}
  <div className="md:h-[37rem] h-96 flex justify-center items-center" style={{marginLeft:"30px"}} >
    <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary flex justify-center items-center">
      <img src={hero.image} data-aos="slide-up" alt="..." className="w-full h-full object-cover" />
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default Hero;
