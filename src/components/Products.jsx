// src/components/Products.jsx
import "../styles/Products.css";
export default function Products() {
    return (
      <section className="products" id="products">
        <h2>OUR PRODUCTS</h2>
        <p>Vestibulum venenatis volutpat arcu, et auctor massa eleifend at. </p>
        <p>Aliquam in dui nisl. Phasellus sit amet vulputate mi, in porta tortor.</p>
        <div className="product-grid">
          <div className="product-card">
            <button>Button</button>
          </div>
          <div className="product-card">
            <button>Button</button>
          </div>
        </div>
      </section>
    );
  }
  