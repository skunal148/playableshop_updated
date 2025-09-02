// src/components/Work.jsx
import "../styles/Work.css";
export default function Work() {
    return (
      <section className="work" id="work">
        <h2>OUR WORK</h2>
        <p style={{textAlign: 'center'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p style={{textAlign: 'center'}}>
        Vestibulum venenatis volutpat arcu, et auctor massa eleifend at. Aliquam in dui nisl.
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
        </div>
        <button className="see-more">See More</button>
      </section>
    );
  }
  