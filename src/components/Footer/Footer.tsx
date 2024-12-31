import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-title">Tammy Food</h2>
          <p className="footer-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          <div className="footer-socials">
            <a href="#" className="social-link">F</a>
            <a href="#" className="social-link">I</a>
            <a href="#" className="social-link">T</a>
            <a href="#" className="social-link">Y</a>
          </div>
        </div>
        <div className="footer-section">
          <h2 className="footer-title">Quick Link</h2>
          <ul className="footer-links">
            <li><a href="#" className="footer-link">About Us</a></li>
            <li><a href="#" className="footer-link">Menu</a></li>
            <li><a href="#" className="footer-link">Blog</a></li>
            <li><a href="#" className="footer-link">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2 className="footer-title">News Letter</h2>
          <p className="footer-text">Subscribe to our newsletter to get our latest update & news</p>
          <form className="footer-form">
            <input type="email" className="footer-input" placeholder="Your email address" />          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;