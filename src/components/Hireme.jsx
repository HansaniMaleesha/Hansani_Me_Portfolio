import { content } from "../../Content.jsx";

const Hireme = () => {
  const { Hireme } = content;

  return (
    <section className="bg-bg_light_primary">
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">
          {Hireme.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Hireme.subtitle}
        </h4>
        <br />
        <div className="flex items-center md:flex-row flex-col-reverse mt-4 gap-4">
  <div
    data-aos="fade-left"
    className="border-2 border-dark_primary max-w-[30rem] p-6 shadow-sm rounded-xl sm:min-w-[30rem]"
  >
    <p className="leading-7">{Hireme.para}</p>
    <br />
  </div>
  <button className="btn bg-dark_primary text-white py-2 px-4 md:ml-4">
    {Hireme.btnText}
  </button>
</div>

      </div>
    </section>
  );
};

export default Hireme;
