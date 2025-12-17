import "./Main.css";
import Hero from "../assets/hero.jpg";
import Bruchetta from "../assets/bruchetta.svg"
import GreekSalad from "../assets/greek salad.jpg"
import LemonDessert from "../assets/lemon dessert.jpg"

function Main({ className }) {
  return (
    <main className={className}>
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
            <button className="reserve-btn">Reserve a Table</button>
          </div>

          <div className="hero-image">
            <img src={Hero} alt="Little Lemon restaurant" />
          </div>
        </div>
      </section>

      <section className="specials">
        <section className="specials">
          {/* First row: Title on the left, Button on the right*/}
          <div className="specials-header">
            <h2 className="specials-title">Specials</h2>
            <button className="menu-button">Online menu</button>
          </div>

          {/*Second row: Three cards*/}
          <div className="specials-cards">
            <article className="card">
              <img src={GreekSalad} alt="Special dish 1" />
              <div>
                <h3 className="card-title">Greek Salad</h3>
                <p className="price">$12.99</p>
              </div>              
              <p className="card-description">Short description of the dish.</p>
              <h3 className="order-button">Order a Delivery</h3>
            </article>

            <article className="card">
              <img src={Bruchetta} alt="Special dish 2" />
              <div>
                <h3 className="card-title">Bruschetta</h3>
                <p className="price">$5.99</p>
              </div>              
              <p className="card-description">Short description of the dish.</p>
              <h3 className="order-button">Order a Delivery</h3>
            </article>

            <article className="card">
              <img src={LemonDessert} alt="Special dish 3" />
              <div>
                <h3 className="card-title">Lemon Desert</h3>
                <p className="price">$5.00</p>
              </div>              
              <p className="card-description">Short description of the dish.</p>
              <h3 className="order-button">Order a Delivery</h3>
            </article>
          </div>
        </section>
      </section>

      <section className="testimonials"></section>

      <section className="about-Chicago-branch"></section>
    </main>
  );
}

export default Main;
