import React, { useState, useEffect } from "react";
import { FiTarget, FiClock, FiBriefcase, FiX } from "react-icons/fi";
import "./AboutUs.css";

const AboutUs = () => {
  const cardsData = [
    {
      title: "Vision & Mission",
      icon: <FiTarget />,
      gradient: "linear-gradient(135deg, #FFD700, #FFC107)", // golden
      content: `Vision:
Armoede is a vibrant, resilient and sustainable community characterised by high entrepreneurial activities, pride in its heritage and love for its environment.

Mission:
Armoede will maximise opportunities for social and economic development by forging mutually beneficial partnerships and ensuring a peaceful and safe environment, and by retaining an attractive, sustainable and secure environment towards intergenerational prosperity.`,
    },
    {
      title: "History",
      icon: <FiClock />,
      gradient: "linear-gradient(135deg, #6C63FF, #A390FF)", // purple gradient
      content: `The Armoede community falls under Mogalakwena Local Municipality in Waterberg District, Limpopo. Known as Armoede after relocation to a portion of farm Armoede, the community is under Mapela Tribal Trust and guided by traditional leadership and municipal governance. Mogalakwena is one of 5 local municipalities in Waterberg District Municipality, with 2028 residents and 487 households (Census 2011).`,
    },
    {
      title: "Governance",
      icon: <FiBriefcase />,
      gradient: "linear-gradient(135deg, #FF6EC7, #FF3CAC)", // pink gradient
      content: `The Armoede Community Development Trust (ACDT) was established in 2016 to drive social and economic development through partnerships. Governance is based on strong corporate governance, led by independent and community trustees, and guided by the Integrated Community Development Plan.

Key Principles:
- Constitutionalism and Legislation
- Deed of Trustees imperatives
- Relevance, Practicality, Sustainability
- Financial viability, Equity (age, gender, ability)
- Empowerment, Broad-based ownership
- Accountability, Transparency`,
    },
  ];

  const [openModal, setOpenModal] = useState(null);

  useEffect(() => {
    document.body.style.overflow = openModal !== null ? "hidden" : "auto";
  }, [openModal]);

  return (
    <section className="about-us-section">
      {/* Floating Particles */}
      <div className="particles">
        {Array.from({ length: 60 }).map((_, i) => (
          <span
            key={i}
            className="particle"
            style={{
              "--size": `${Math.random() * 6 + 4}px`,
              "--top": `${Math.random() * 100}%`,
              "--left": `${Math.random() * 100}%`,
              "--duration": `${Math.random() * 15 + 10}s`,
              "--delay": `${Math.random() * 5}s`,
              "--color": `hsla(${Math.random() * 360}, 70%, 60%, 0.6)`,
            }}
          />
        ))}
      </div>

      <h2 className="fade-in">About Us</h2>

      {/* Cards */}
      <div className="about-cards">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="about-card fade-in-up"
            style={{ background: card.gradient, animationDelay: `${index * 0.2}s` }}
          >
            <div className="card-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.content.substring(0, 180)}...</p>
            <button className="read-more-btn" onClick={() => setOpenModal(index)}>
              Read More
            </button>
          </div>
        ))}
      </div>

      {/* Card Modal */}
      {openModal !== null && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="modal-header">
              <h3>{cardsData[openModal].title}</h3>
              <button className="close-btn" onClick={() => setOpenModal(null)}>
                <FiX />
              </button>
            </div>
            <div className="modal-body scrollable-modal">
              {cardsData[openModal].content.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Partner Logos */}
      <div className="partner-logos-container fade-in">
        <h3>Our Partners & Affiliations</h3>
        <div className="partner-logos">
          <img src="/assets/partners/anglo.webp" alt="Partner 1" />
          <img src="/assets/partners/valterra-platinum.svg" alt="Partner 2" />
          <img src="/assets/partners/cisco.webp" alt="Partner 3" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
