import React, { useState, useEffect } from "react";
import { FiBriefcase, FiBookOpen, FiX, FiDownload } from "react-icons/fi";
import "./Opportunities.css";

const opportunitiesData = [
  {
    id: 1,
    title: "Business Opportunities",
    icon: <FiBriefcase />,
    gradient: "linear-gradient(135deg, #FFD700, #FFC107)",
    shortDesc: "Calls for quotations, tenders, procurement policy updates...",
    longDesc: `Here you can find detailed information about current business opportunities including calls for quotations, tenders, procurement guidelines, and awarded bids for transparency. Stay updated with all business-related opportunities for our community.`,
    documents: [
      { name: "Tender Document 2025", url: "/assets/docs/tender2025.pdf" },
      { name: "Procurement Guidelines", url: "/assets/docs/procurement-guidelines.pdf" },
    ],
  },
  {
    id: 2,
    title: "Development Opportunities",
    icon: <FiBookOpen />,
    gradient: "linear-gradient(135deg, #6C63FF, #A390FF)",
    shortDesc: "Bursaries, internships, training, community projects...",
    longDesc: `This section provides details about bursaries, internships, skills development programs, community project participation, and partnerships available. Access resources and opportunities that help personal and professional growth.`,
    documents: [
      { name: "Bursary Info", url: "/assets/docs/bursary-info.pdf" },
      { name: "Internship Program", url: "/assets/docs/internship-program.pdf" },
    ],
  },
];

const Opportunities = () => {
  const [openModalId, setOpenModalId] = useState(null);

  useEffect(() => {
    document.body.style.overflow = openModalId ? "hidden" : "auto";
  }, [openModalId]);

  return (
    <section id="opportunities" className="opportunities-section">
      <h2 className="fade-in">Opportunities</h2>
      <div className="opportunities-cards">
        {opportunitiesData.map((item, index) => (
          <div
            key={item.id}
            className="opportunity-card fade-in-up"
            style={{ background: item.gradient, animationDelay: `${index * 0.2}s` }}
          >
            <div className="card-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.shortDesc}</p>
            <button className="read-more-btn" onClick={() => setOpenModalId(item.id)}>
              Read More
            </button>
          </div>
        ))}
      </div>

      {openModalId && (
        <div className="modal-overlay fade-in">
          <div className="modal-container">
            <div
              className="modal-header"
              style={{
                background: opportunitiesData.find(o => o.id === openModalId).gradient,
              }}
            >
              <div className="modal-icon">
                {opportunitiesData.find(o => o.id === openModalId).icon}
              </div>
              <h3>{opportunitiesData.find(o => o.id === openModalId).title}</h3>
              <button className="close-btn" onClick={() => setOpenModalId(null)}>
                <FiX />
              </button>
            </div>
            <div className="modal-body scrollable-modal">
              <p>{opportunitiesData.find(o => o.id === openModalId).longDesc}</p>
              {opportunitiesData.find(o => o.id === openModalId).documents.length > 0 && (
                <div className="documents-list">
                  <h4>Available Documents:</h4>
                  <ul>
                    {opportunitiesData
                      .find(o => o.id === openModalId)
                      .documents.map((doc, idx) => (
                        <li key={idx}>
                          <a
                            href={doc.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                            className="download-btn"
                          >
                            <FiDownload /> {doc.name}
                          </a>
                        </li>
                      ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Opportunities;
