// src/components/Work.jsx
import "../styles/Work.css";
export default function Work() {
    return (
      <section className="work" id="work">
        <h2>OUR WORK</h2>
        <p style={{textAlign: 'center'}}>
        Ads you don’t just watch — you play.
        </p>
        <p style={{textAlign: 'center'}}>
        Turn boring promotions into fun, interactive experiences.
        </p>
        <div className="work-grid">
          <div className="work-card"></div>
          <div className="work-card"></div>
          <div className="work-card"></div>
          <div className="work-card"></div>
          <div className="work-card"></div>
          <div className="work-card"></div>
          <div className="work-card"></div>
          <div className="work-card"></div>
          <div className="work-card"></div>
          <div className="work-card"></div>
        </div>
        <button className="see-more">See More</button>
      </section>
    );
  }