// src/components/Products.jsx
import "../styles/Products.css";
export default function Products() {
    return (
      <section className="products" id="products">
        <h2>OUR PRODUCTS</h2>
        <p>Why settle for static banners when you can give your audience something to play with?</p>
        <div className="product-grid">
          <div className="product-card">
            <h3>Playables for Brands</h3>
            <button>Button</button>
          </div>
          <div className="product-card">
            <h3>Playables for Brands</h3>
            <button>Button</button>
          </div>
        </div>
      </section>
    );
  }
  