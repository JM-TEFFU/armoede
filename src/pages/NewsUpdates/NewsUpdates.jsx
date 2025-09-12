import React, { useState, useEffect, useRef } from "react";
import { FiFileText, FiCalendar, FiUsers, FiDownload, FiImage, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./NewsUpdates.css";

const newsData = [
  {
    id: 1,
    title: "Community Event: Skills Workshop",
    category: "Events",
    gradient: "linear-gradient(135deg, #FF6EC7, #FF3CAC)",
    snippet: "A skills development workshop was held in Ga-Sekhaolelo...",
    details:
      "The workshop focused on teaching computer literacy, basic coding, and agricultural skills to local youth. Attendance was over 120 participants, with certificates awarded.",
  },
  {
    id: 2,
    title: "Press Release: Circular Economy Hub Launch",
    category: "Announcements",
    gradient: "linear-gradient(135deg, #6C63FF, #A390FF)",
    snippet: "We are proud to launch the Circular Economy Hub...",
    details:
      "The hub aims to recycle materials, create sustainable business opportunities, and empower local entrepreneurs. The launch event included keynote speakers and local media coverage.",
  },
  {
    id: 3,
    title: "Monthly Trust Report Released",
    category: "Reports",
    gradient: "linear-gradient(135deg, #FFD700, #FFC107)",
    snippet: "Our monthly report highlights progress across programmes...",
    details:
      "The report includes detailed statistics on Study Centre attendance, Wi-Fi hub usage, training sessions completed, and testimonials from beneficiaries. It is available for download on our website.",
  },
];

const NewsUpdates = () => {
  const [openModal, setOpenModal] = useState(null);
  const carouselRef = useRef(null);

  // Lock scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = openModal ? "hidden" : "auto";
  }, [openModal]);

  // Auto-slide carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: 320, behavior: "smooth" });
        if (carouselRef.current.scrollLeft + carouselRef.current.clientWidth >= carouselRef.current.scrollWidth) {
          carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };
  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <section id="news" className="news-updates-section">
      <h2 className="fade-in">News, Updates & Resources</h2>

      <div className="carousel-wrapper">
        <button className="carousel-btn left" onClick={scrollLeft}><FiChevronLeft /></button>
        <div className="news-cards-container horizontal-scroll" ref={carouselRef}>
          {newsData.map((item, index) => (
            <div
              key={item.id}
              className="news-card fade-in-up"
              style={{ background: item.gradient, animationDelay: `${index * 0.2}s` }}
            >
              <div className="card-icon">
                {item.category.includes("Announcements") && <FiFileText />}
                {item.category.includes("Meetings") && <FiUsers />}
                {item.category.includes("Events") && <FiCalendar />}
                {item.category.includes("Reports") && <FiDownload />}
                {item.category.includes("Media") && <FiImage />}
              </div>
              <h3>{item.title}</h3>
              <p>{item.snippet}</p>
              <button className="read-more-btn" onClick={() => setOpenModal(item.id)}>
                Read More
              </button>
            </div>
          ))}
        </div>
        <button className="carousel-btn right" onClick={scrollRight}><FiChevronRight /></button>
      </div>

      {openModal !== null && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="modal-header">
              <h3>{newsData.find(n => n.id === openModal).title}</h3>
              <button className="close-btn" onClick={() => setOpenModal(null)}>
                <FiX />
              </button>
            </div>
            <div className="modal-body scrollable-modal">
              <p>{newsData.find(n => n.id === openModal).details}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default NewsUpdates;
