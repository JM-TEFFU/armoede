import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import AboutUs from "./pages/AboutUs/AboutUs";
import WorkImpact from "./pages/WorkImpact/WorkImpact";
import Opportunities from "./pages/Opportunities/Opportunities";
import NewsUpdates from "./pages/NewsUpdates/NewsUpdates";
import GetInvolved from "./pages/GetInvolved/GetInvolved";
import ContactUs from "./pages/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";

import "./App.css";
import "./components/Header/Header.css";
import "./pages/AboutUs/AboutUs.css";
import "./pages/WorkImpact/WorkImpact.css";
import "./pages/Opportunities/Opportunities.css";
import "./pages/NewsUpdates/NewsUpdates.css";
import "./pages/GetInvolved/GetInvolved.css";
import "./pages/ContactUs/ContactUs.css";

function App() {
  const [isCreedModalOpen, setIsCreedModalOpen] = useState(false);

  const openCreedModal = () => setIsCreedModalOpen(true);
  const closeCreedModal = () => setIsCreedModalOpen(false);

  useEffect(() => {
    document.body.style.overflow = isCreedModalOpen ? "hidden" : "auto";
  }, [isCreedModalOpen]);

  useEffect(() => {
    const handleLinkClick = (e) => {
      const href = e.target.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) targetElement.scrollIntoView({ behavior: "smooth" });
      }
    };
    document.querySelectorAll(".nav-links a, .mobile-menu a").forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });
    return () => {
      document.querySelectorAll(".nav-links a, .mobile-menu a").forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
    };
  }, []);

  return (
    <div className="homepage-bg">
      <Header showDonate={true} />

      <main className="content">
        {/* Hero Section */}
        <section id="home" className="hero">
          {/* Floating particles */}
          <div className="particles">
            {Array.from({ length: 120 }).map((_, i) => (
              <span
                key={i}
                className="particle"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 6 + 4}px`,
                  height: `${Math.random() * 6 + 4}px`,
                  background: `hsla(${Math.random() * 360}, 70%, 60%, 0.8)`,
                  animationDuration: `${Math.random() * 12 + 6}s`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>

          <h1 className="hero-title fade-in-up fade-delay-1">
            Welcome to Armoede Community Development Trust
          </h1>
          <p className="hero-subtitle fade-in-up fade-delay-2">
            Empowering communities through education, skills, and opportunity.
          </p>

          <button
            className="creed-btn"
            onClick={openCreedModal}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            Read Our Creed
          </button>
        </section>

        {/* Creed Modal */}
        {isCreedModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content fade-in-up">
              <h2>Our Creed</h2>
              <div className="creed-text">
                <p>
                  <strong>We, the people of Armoede refuse to be defined by our past
                  sufferings.</strong>
                </p>
                <p>Our current challenges serve to sharpen and harden our resolve to work towards a better tomorrow.</p>
                <p>We will re-write our script … We journey forward, towards a better community for ourselves, our children, grandchildren, great-grandchildren and generations to come.</p>
                <p>We are building an Armoede that will be a vibrant, resilient and sustainable community characterised by high entrepreneurial activities, pride in its heritage and love for its environment.</p>
                <p>We, the people of Armoede are not only building a better community for themselves but are co-workers with every citizen of our beautiful country. Together we will build and contribute to a South Africa that knows no poverty.</p>
                <p><strong>We are the agents of change and change will come in our lifetime!</strong></p>
              </div>
              <button className="close-btn" onClick={closeCreedModal}>
                Close
              </button>
            </div>
          </div>
        )}

        {/* Sections */}
        <section id="about-us" className="overlay-section"><AboutUs /></section>
        <section id="work" className="overlay-section"><WorkImpact /></section>
        <section id="opportunities" className="overlay-section"><Opportunities /></section>
        <section id="news" className="overlay-section"><NewsUpdates /></section>
        <section id="involved" className="overlay-section"><GetInvolved /></section>
        <section id="contact" className="overlay-section"><ContactUs /></section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
