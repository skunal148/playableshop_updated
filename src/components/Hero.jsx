import "../styles/Hero.css";
import CardStack from "./CardStack";  
export default function Hero() {
  return (
    <section className="hero" id="home">
      <h1>PLAYABLE SHOP</h1>
      <CardStack/>
      <h3>Create Playable Ads That Convert.</h3>
      <p>Interactive playable ads, powered by data</p>
      <p>Track users and get actionable insights</p>
    </section>
  );
}
