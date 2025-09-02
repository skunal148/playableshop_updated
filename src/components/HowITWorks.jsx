// src/components/HowItWorks.jsx
import "../styles/HowItWorks.css";

export default function HowItWorks() {
    return (
      <section className="how-it-works">
        <h2>How it works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-icon">✓</div>
            <h3>Share Your Brief</h3>
            <p>
              Provide your campaign objectives, creative direction, and target
              platforms. We’ll align on a custom strategy tailored to your brand.
            </p>
          </div>
          <div className="step">
            <div className="step-icon">✏️</div>
            <h3>Custom Design & Development</h3>
            <p>
              We craft a bespoke playable ad designed to engage, perform, and
              meet your marketing goals.
            </p>
          </div>
          <div className="step">
            <div className="step-icon">🚀</div>
            <h3>Preview & Approvals</h3>
            <p>
              Review an interactive preview, test the experience, and share
              feedback before final approval.
            </p>
          </div>
          <div className="step">
            <div className="step-icon">📤</div>
            <h3>Platform‑Ready Export</h3>
            <p>
              We export the final creative for seamless integration across major
              ad platforms.
            </p>
          </div>
        </div>
      </section>
    );
  }