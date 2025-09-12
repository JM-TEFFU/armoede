import React, { useState, useEffect } from "react";
import { FiBookOpen, FiRepeat, FiWifi, FiBriefcase, FiUsers, FiX } from "react-icons/fi";
import "./WorkImpact.css";

const programs = [
  {
    id: 1,
    title: "Study Centre",
    icon: <FiBookOpen />,
    gradient: "linear-gradient(135deg, #FFD700, #FFC107)",
    shortDesc: "Empowering students with educational resources and mentorship.",
    longDesc: "Our Study Centre provides access to libraries, computer labs, tutoring sessions, and mentorship programs. Students gain the skills and knowledge needed to succeed academically and professionally.",
  },
  {
    id: 2,
    title: "Circular Economy Hub",
    icon: <FiRepeat />,
    gradient: "linear-gradient(135deg, #6C63FF, #A390FF)",
    shortDesc: "Promoting sustainable business practices in the community.",
    longDesc: "The Circular Economy Hub helps local entrepreneurs and communities reduce waste and promote recycling initiatives. We run workshops and pilot projects to create sustainable income sources.",
  },
  {
    id: 3,
    title: "Community Wi-Fi",
    icon: <FiWifi />,
    gradient: "linear-gradient(135deg, #FF6EC7, #FF3CAC)",
    shortDesc: "Providing free internet access for education and development.",
    longDesc: "Our Community Wi-Fi project ensures connectivity in underserved areas, enabling students and local businesses to access online resources, training, and opportunities.",
  },
  {
    id: 4,
    title: "Skills Development",
    icon: <FiBriefcase />,
    gradient: "linear-gradient(135deg, #00C9A7, #00BFA6)",
    shortDesc: "Training programs to enhance employability and entrepreneurship.",
    longDesc: "We offer skills development programs in IT, trades, business, and leadership. Participants receive hands-on training and guidance to start businesses or secure employment.",
  },
  {
    id: 5,
    title: "Testimonials",
    icon: <FiUsers />,
    gradient: "linear-gradient(135deg, #FF8C42, #FF3C3C)",
    shortDesc: "Stories of people empowered by our community programs.",
    longDesc: "This card highlights real stories of community members who received support from our programs. Each testimonial shows the impact and inspiration our initiatives bring to individuals and families.",
  },
];

const WorkImpact = () => {
  const [openModal, setOpenModal] = useState(null);

  useEffect(() => {
    document.body.style.overflow = openModal !== null ? "hidden" : "auto";
  }, [openModal]);

  return (
    <section className="work-impact-section">
      <h2 className="fade-in">Our Work & Impact</h2>

      <div className="work-cards-container">
        {programs.map((program, index) => (
          <div
            key={program.id}
            className="work-card fade-in-up"
            style={{ background: program.gradient, animationDelay: `${index * 0.2}s` }}
          >
            <div className="card-icon">{program.icon}</div>
            <h3>{program.title}</h3>
            <p>{program.shortDesc}</p>
            <button className="read-more-btn" onClick={() => setOpenModal(program.id)}>
              Read More
            </button>
          </div>
        ))}
      </div>

      {openModal !== null && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="modal-header">
              <h3>{programs.find(p => p.id === openModal).title}</h3>
              <button className="close-btn" onClick={() => setOpenModal(null)}>
                <FiX />
              </button>
            </div>
            <div className="modal-body scrollable-modal">
              {programs
                .find(p => p.id === openModal)
                .longDesc.split("\n")
                .map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WorkImpact;
