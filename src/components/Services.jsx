import { content } from "../../Content.jsx";
import Modal from "react-modal";
import { useState } from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "35rem", // Increased width
    width: "90%",
    padding: "2rem", // Added padding for better spacing
  },
  overlay: {
    padding: "2rem",
  },
};
Modal.setAppElement("#root");

const Services = () => {
  const { services } = content;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectProject, setSelectProject] = useState(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section id="services" className="overflow-hidden">
      <div className="min-h-screen relative md:flex-row flex-col-reverse justify-center items-center">
        <div
          data-aos="slide-right"
          data-aos-delay="1200"
          className="absolute h-full w-full left-0 bg-primaryLinear -z-10"
        ></div>

        {/* Modal */}
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
          <div className="flex items-center gap-2">
            <img className="h-10" src={selectProject?.logo} alt={selectProject?.title} />
            <h6>{selectProject?.title}</h6>
          </div>
          <br />
          <p className="text-justify">{selectProject?.description}</p> {/* Justified text */}
          <br />

          {/* Links to GitHub and LinkedIn */}
          {selectProject?.github && (
            <a href={selectProject.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Visit GitHub
            </a>
          )}
          <br />
          {selectProject?.linkedin && (
            <a href={selectProject.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Visit LinkedIn
            </a>
          )}
          <br />

          <div className="flex justify-end">
            <button onClick={closeModal} className="btn">
              Close
            </button>
          </div>
        </Modal>

        <div className="md:container px-5 py-14">
          <h2 className="title pb-2" data-aos="fade-down">
            {services.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {services.subtitle}
          </h4>
          <br />
          <div className="flex gap-5 justify-between flex-wrap group py-3">
            {services.service_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 600}
                className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm hover:!blur-none"
                onClick={() => {
                  setSelectProject({
                    title: content.title,
                    logo: content.logo,
                    description: content.description,
                    github: content.github,    // Assuming GitHub link is part of the content object
                    linkedin: content.linkedin,  // Assuming LinkedIn link is part of the content object
                  });
                  openModal();
                }}
              >
                <img src={content.logo} alt={content.title} className="w-16 h-16 mx-auto" />
                <h6 className="my-3">{content.title}</h6>
                <p className="leading-7">{content.para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
