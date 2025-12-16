import "./Main.css";
import Hero from "../assets/hero.png";

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

      <section className="specials"></section>

      <section className="testimonials"></section>

      <section className="about-Chicago-branch"></section>
    </main>
  );
}

export default Main;
