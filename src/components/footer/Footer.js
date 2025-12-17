import "./Footer.css";
import Logo from "../../assets/Logo.svg"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/*} Left image/logo */}
        <div className="footer-logo">
          <img src={Logo} alt="Company Logo" />
        </div>

        {/* Right columns */}
          <div className="footer-column">
           <p>Experience authentic Mediterranean cuisine in the heart of Chicago. Fresh ingredients, bold flavors, and warm hospitality await you.</p>
          </div>

          <div className="footer-column">
            <p>Our specials include Greek Salad, Bruschetta, and Lemon Dessert — crafted with care and available for dine-in or delivery.</p>
          </div>

          <div className="footer-column">
            <p>Visit our Chicago branch for cozy atmosphere and exceptional service. Contact us for reservations or catering inquiries.</p>
          </div>
      </div>
    </footer>
  );
}

export default Footer;
