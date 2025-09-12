import React, { useState, useEffect } from "react";
import "./Footer.css";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-cards-container">

          <div className="footer-card">
            <h4>About Armoede Trust</h4>
            <p>Empowering communities through education, skills, and opportunity. We create programs that uplift local communities and transform lives.</p>
          </div>

          <div className="footer-card">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about-us">About Us</a></li>
              <li><a href="#work-impact">Our Work & Impact</a></li>
              <li><a href="#opportunities">Opportunities</a></li>
              <li><a href="#get-involved">Get Involved</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-card">
            <h4>Contact</h4>
            <p>Email: info@armoede.org.za</p>
            <p>Phone: +27 12 345 6789</p>
            <p>Address: 123 Armoede Street, Limpopo, South Africa</p>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Armoede Community Development Trust. All Rights Reserved.</p>
        </div>
      </footer>

      {showScroll && (
        <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
          ↑
        </button>
      )}
    </>
  );
};

export default Footer;
