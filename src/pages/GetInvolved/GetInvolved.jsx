import React, { useState, useEffect } from "react";
import { FiX, FiCreditCard, FiGift, FiUserCheck, FiUsers } from "react-icons/fi";
import { loadStripe } from "@stripe/stripe-js"; // Stripe
import "./GetInvolved.css";

// Initialize Stripe
const stripePromise = loadStripe("YOUR_STRIPE_PUBLISHABLE_KEY"); // replace with your key

const GetInvolved = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [donationAmount, setDonationAmount] = useState("");

  const cards = [
    {
      id: 1,
      title: "Volunteer",
      icon: <FiUsers />,
      short: "Join our programs and help the community.",
      gradient: "linear-gradient(135deg, #FF6EC7, #FF3CAC)",
      form: (
        <form className="involved-form">
          <label>Name:</label>
          <input type="text" placeholder="Your Name" required />
          <label>Email:</label>
          <input type="email" placeholder="Your Email" required />
          <label>Phone:</label>
          <input type="tel" placeholder="Phone Number" required />
          <label>Message:</label>
          <textarea placeholder="Why do you want to volunteer?" required />
          <button type="submit">Submit</button>
        </form>
      ),
    },
    {
      id: 2,
      title: "Donate",
      icon: <FiCreditCard />,
      short: "Support our initiatives financially.",
      gradient: "linear-gradient(135deg, #FFD700, #FFC107)",
      form: (
        <form
          className="involved-form"
          onSubmit={async (e) => {
            e.preventDefault();
            if (!donationAmount || donationAmount <= 0) {
              alert("Enter a valid donation amount.");
              return;
            }
            const stripe = await stripePromise;
            const response = await fetch("/create-checkout-session", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ amount: donationAmount * 100 }), // Stripe expects cents
            });
            const session = await response.json();
            const result = await stripe.redirectToCheckout({
              sessionId: session.id,
            });
            if (result.error) alert(result.error.message);
          }}
        >
          <label>Name:</label>
          <input type="text" placeholder="Your Name" required />
          <label>Email:</label>
          <input type="email" placeholder="Your Email" required />
          <label>Amount (ZAR):</label>
          <input
            type="number"
            placeholder="Donation Amount"
            value={donationAmount}
            onChange={(e) => setDonationAmount(e.target.value)}
            required
          />
          <button type="submit">Donate</button>
        </form>
      ),
    },
    {
      id: 3,
      title: "Sponsorship",
      icon: <FiGift />,
      short: "Partner with us for long-term support.",
      gradient: "linear-gradient(135deg, #6C63FF, #A390FF)",
      form: (
        <form className="involved-form">
          <label>Company Name:</label>
          <input type="text" placeholder="Your Company" required />
          <label>Contact Person:</label>
          <input type="text" placeholder="Full Name" required />
          <label>Email:</label>
          <input type="email" placeholder="Email" required />
          <label>Message:</label>
          <textarea placeholder="Tell us how you want to sponsor" required />
          <button type="submit">Submit</button>
        </form>
      ),
    },
    {
      id: 4,
      title: "Corporate Partnership",
      icon: <FiUserCheck />,
      short: "Collaborate with us for social responsibility.",
      gradient: "linear-gradient(135deg, #00C9A7, #00BFA6)",
      form: (
        <form className="involved-form">
          <label>Company Name:</label>
          <input type="text" placeholder="Your Company" required />
          <label>Contact Person:</label>
          <input type="text" placeholder="Full Name" required />
          <label>Email:</label>
          <input type="email" placeholder="Email" required />
          <label>Message:</label>
          <textarea placeholder="How do you want to collaborate?" required />
          <button type="submit">Submit</button>
        </form>
      ),
    },
  ];

  useEffect(() => {
    document.body.style.overflow = activeModal ? "hidden" : "auto";
  }, [activeModal]);

  return (
    <section id="involved" className="get-involved-section">
      <h2>Get Involved</h2>
      <div className="cards-container">
        {cards.map((card) => (
          <div
            key={card.id}
            className="involved-card"
            style={{ background: card.gradient }}
          >
            <div className="card-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.short}</p>
            <button onClick={() => setActiveModal(card.id)}>Read More</button>
          </div>
        ))}
      </div>

      {activeModal && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="modal-header">
              <h3>{cards.find((c) => c.id === activeModal).title}</h3>
              <button className="close-btn" onClick={() => setActiveModal(null)}>
                <FiX />
              </button>
            </div>
            <div className="modal-body scrollable-modal">
              {cards.find((c) => c.id === activeModal).form}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GetInvolved;
