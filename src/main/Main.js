import "./Main.css";
import Hero from "../assets/hero.jpg";
import Bruchetta from "../assets/bruchetta.svg";
import GreekSalad from "../assets/greek salad.jpg";
import LemonDessert from "../assets/lemon dessert.jpg";
import John from "../assets/John.webp";
import Hannah from "../assets/Hannah.webp";
import Michael from "../assets/Michael.webp";
import Darius from "../assets/Darius.webp";
import MarioAdrianA from "../assets/Mario and Adrian a.webp";
import MarioAdrianB from "../assets/Mario and Adrian b.webp";
import { Link } from "react-router-dom";

function Main() {
  return (
    <main className="main">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              Experience authentic Mediterranean cuisine in the heart of
              Chicago. Fresh ingredients, bold flavors, and warm hospitality
              await you.
            </p>
            <Link to="/reservation">
              <button className="reserve-btn">Reserve a Table</button>
            </Link>
          </div>

          <div className="hero-image">
            <img src={Hero} alt="Little Lemon restaurant" />
          </div>
        </div>
      </section>

      <section className="specials">
        <div className="specials-content">
          {/* First row: Title on the left, Button on the right*/}
          <div className="specials-header">
            <h2 className="specials-title">Specials</h2>
            <button className="menu-button">Online menu</button>
          </div>

          {/*Second row: Three cards*/}
          <div className="specials-cards">
            <article className="card">
              <img src={GreekSalad} alt="Special dish 1" />
              <div className="title-price">
                <h3 className="card-title">Greek Salad</h3>
                <p className="card-price">$12.99</p>
              </div>
              <p className="card-description">
                Crisp lettuce, cucumbers, tomatoes, and olives topped with feta
                for a refreshing Mediterranean classic.
              </p>
              <button className="order-button">Order a Delivery</button>
            </article>

            <article className="card">
              <img src={Bruchetta} alt="Special dish 2" />
              <div className="title-price">
                <h3 className="card-title">Bruschetta</h3>
                <p className="card-price">$5.99</p>
              </div>
              <p className="card-description">
                Toasted bread layered with ripe tomatoes, garlic, and basil,
                drizzled with olive oil.
              </p>
              <button className="order-button">Order a Delivery</button>
            </article>

            <article className="card">
              <img src={LemonDessert} alt="Special dish 3" />
              <div className="title-price">
                <h3 className="card-title">Lemon Desert</h3>
                <p className="card-price">$5.00</p>
              </div>
              <p className="card-description">
                A zesty, sweet treat with bright citrus flavor and a smooth,
                creamy finish.
              </p>
              <button className="order-button">Order a Delivery</button>
            </article>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="testimonials-content">
          {/* Title centered */}
          <h2 className="testimonials-title">Testimonials</h2>
          {/* Testimonials grid */}
          <div className="testimonials-grid">
            <article className="testimonial-card">
              <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>

              <div className="testimonial-person">
                <div className="testimonial-image">
                  <img src={John} alt="portrait of John" />
                </div>
                <div className="testimonial-name">John Davis</div>
              </div>
              <p className="testimonial-comment">
                “Little Lemon always delivers fresh flavors and warm hospitality
                — my go‑to spot in Chicago!”
              </p>
            </article>
            <article className="testimonial-card">
              <div className="testimonial-rating">⭐⭐⭐⭐</div>
              <div className="testimonial-person">
                <div className="testimonial-image">
                  <img src={Michael} alt="portrait of Michael" />
                </div>
                <div className="testimonial-name">Michael Thompson</div>
              </div>
              <p className="testimonial-comment">
                “The specials are crafted with care. The Greek Salad is
                refreshing and perfectly balanced.”
              </p>
            </article>

            <article className="testimonial-card">
              <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
              <div className="testimonial-person">
                <div className="testimonial-image">
                  <img src={Hannah} alt="portrait of Hannah" />
                </div>
                <div className="testimonial-name">Hannah</div>
              </div>
              <p className="testimonial-comment">
                “Bruschetta here is unbeatable — crisp, flavorful, and
                beautifully presented every time.”
              </p>
            </article>

            <article className="testimonial-card">
              <div className="testimonial-rating">⭐⭐⭐</div>
              <div className="testimonial-person">
                <div className="testimonial-image">
                  <img src={Darius} alt="portrait of Darius" />
                </div>
                <div className="testimonial-name">Darius Johnson</div>
              </div>
              <p className="testimonial-comment">
                “The Lemon Dessert is a bright, zesty finish that keeps me
                coming back again and again.”
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="chicago-branch">
        <div className="container">
          <div className="chicago-grid">
            {/* Left column: text content */}
            <div className="chicago-text">
              <h2 className="branch-title">Little Lemon</h2>
              <h3 className="branch-subtitle">Chicago</h3>
              <p className="branch-description">
                Welcome to our Chicago branch! We bring authentic Mediterranean
                flavors with a modern twist. Enjoy fresh ingredients, cozy
                atmosphere, and exceptional service right in the heart of the
                city.
              </p>
            </div>

            {/* Right column: overlapping images */}
            <div className="chicago-images">
              <img
                src={MarioAdrianA}
                alt="Little Lemon Chicago interior"
                className="image-top"
              />
              <img
                src={MarioAdrianB}
                alt="Little Lemon Chicago dish"
                className="image-bottom"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
