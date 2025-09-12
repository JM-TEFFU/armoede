import React, { useState, useEffect } from "react";
import "./Header.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="header-container">
          {/* Logo */}
          <div className="logo">
            <img src="/logo192.png" alt="Armoede Logo" className="logo-img" />
            <h1 className="logo-text">Armoede Trust</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav">
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about-us">About Us</a></li>
              <li><a href="#work">Our Work & Impact</a></li>
              <li><a href="#opportunities">Opportunities</a></li>
              <li><a href="#news-resources">News & Resources</a></li>
              <li><a href="#involved">Get Involved</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </nav>

          {/* Mobile menu toggle */}
          <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <ul>
              <li><a href="#home" onClick={toggleMobileMenu}>Home</a></li>
              <li><a href="#about-us" onClick={toggleMobileMenu}>About Us</a></li>
              <li><a href="#work" onClick={toggleMobileMenu}>Our Work & Impact</a></li>
              <li><a href="#opportunities" onClick={toggleMobileMenu}>Opportunities</a></li>
              <li><a href="#news-resources" onClick={toggleMobileMenu}>News & Resources</a></li>
              <li><a href="#involved" onClick={toggleMobileMenu}>Get Involved</a></li>
              <li><a href="#contact" onClick={toggleMobileMenu}>Contact Us</a></li>
            </ul>
          </div>
        )}
      </header>

      {/* Floating Donate Button */}
      <a href="#donate" className="floating-donate-btn">Donate</a>
    </>
  );
};

export default Header;
