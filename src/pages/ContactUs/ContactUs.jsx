import React, { useState } from "react";
import { FiX, FiMapPin, FiMail } from "react-icons/fi";
import "./ContactUs.css";

const ContactUs = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Thank you! Your message has been submitted.");
    setFormData({ name: "", email: "", message: "" });
  };

  const cards = [
    {
      id: 1,
      title: "Send Us a Message",
      icon: <FiMail />,
      short: "Fill out the contact form to reach us.",
      modalType: "form",
      gradient: "linear-gradient(135deg, #FFD700, #FFC107)",
    },
    {
      id: 2,
      title: "Our Location",
      icon: <FiMapPin />,
      short: "View our office location on the map.",
      modalType: "map",
      gradient: "linear-gradient(135deg, #00C9A7, #00BFA6)",
    },
  ];

  return (
    <section id="contact" className="contact-us-section">
      <h2>Contact Us</h2>
      <p>Reach out to Armoede Community Development Trust. We’d love to hear from you.</p>

      {/* Cards */}
      <div className="cards-container">
        {cards.map((card) => (
          <div
            key={card.id}
            className="contact-card"
            style={{ background: card.gradient }}
            onClick={() => setActiveModal(card.id)}
          >
            <div className="card-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.short}</p>
            <button>Open</button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeModal && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="modal-header">
              <h3>{cards.find((c) => c.id === activeModal).title}</h3>
              <button className="close-btn" onClick={() => { setActiveModal(null); setStatus(""); }}>
                <FiX />
              </button>
            </div>
            <div className="modal-body scrollable-modal">
              {cards.find((c) => c.id === activeModal).modalType === "form" ? (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <label>Name</label>
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <label>Email</label>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      placeholder="Write your message here"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                    <label>Message</label>
                  </div>
                  <button type="submit" className="submit-btn">
                    Send Message
                  </button>
                  {status && <p className="status-message">{status}</p>}
                </form>
              ) : (
                <div className="map-container">
                  <iframe
                    title="map"
                    src="https://maps.google.com/maps?q=-23.12345,29.98765&z=15&output=embed"
                    width="100%"
                    height="400"
                    style={{ border: 0, borderRadius: "12px" }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                  <div className="contact-info">
                    <p>
                      Phone: +27 123 456 7890 <br />
                      Email: info@armoede.org <br />
                      Office Hours: Mon – Fri, 08:00 – 17:00
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactUs;
