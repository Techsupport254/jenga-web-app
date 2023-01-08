import React from "react";
import "./Footer.css";


const Footer = () => {
  const backToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
//show back to top when scroll is started
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.querySelector(".BackToTop").style.display = "block";
    } else {
      document.querySelector(".BackToTop").style.display = "none";
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully");
  };

  return (
    <div className="Footer Animated">
      <div className="FooterContainer">
        <div className="Contacts">
          <h3 className="heading">Contacts</h3>
          <div className="ContactsContainer">
            <div className="Contact"><i className="fas fa-phone"></i> +254796851114</div>
            <div className="Contact"><i className="fab fa-whatsapp"></i> +254796851114</div>
            <div className="Contact"><i className="fas fa-envelope"></i>kiruivictor097@gmail.com</div>
            <div className="Contact"><i className="fas fa-map-marker-alt"></i> Nairobi, Kenya</div>
          </div>
        </div>
        <div className="ContactCard">
          <h3 className="heading">Send a message</h3>
          <form>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
            ></input>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
            ></input>
            <textarea
              id="subject"
              name="subject"
              placeholder="Message"
            ></textarea>
            <button className="Submit"
              type="submit"
              value="Submit"
              onClick={handleSubmit}
            >
              <span>Submit</span>
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
        <div className="SocialMedia">
          <h3 className="heading">Follow us on:</h3>
          <div className="SocialIcons">
            <a href="https://www.facebook.com/">
              <i className="fab fa-facebook-f"></i>
              Facebook
            </a>
            <a href="https://www.instagram.com/">
              <i className="fab fa-instagram"></i>
              Instagram
            </a>
            <a href="https://www.youtube.com/">
              <i className="fab fa-youtube"></i>
              Youtube
            </a>
            <a href="https://www.twitter.com/">
              <i className="fab fa-twitter"></i>
              Twitter
            </a>
            <a href="https://www.linkedin.com/">
              <i className="fab fa-linkedin"></i>
              Linkedin
            </a>
          </div>
        </div>
        <div className="Partnerships">
          <h3 className="heading">Partnerships</h3>
          <div className="PartnershipContainer">
            <a href="https://www.google.com/">
              <i className="fab fa-google"></i>
              Google
            </a>
            <a href="https://www.microsoft.com/">
              <i className="fab fa-microsoft"></i>
              Microsoft
            </a>
            <a href="https://www.apple.com/">
              <i className="fab fa-apple"></i>
              Apple
            </a>
            <a href="https://www.amazon.com/">
              <i className="fab fa-amazon"></i>
              Amazon
            </a>
            <a href="https://www.paypal.com/">
              <i className="fab fa-paypal"></i>
              Paypal
            </a>
          </div>
        </div>
      </div>
      <div className="BackToTop" onClick={backToTop}>
        <i className="fas fa-arrow-up"></i>
        Back to top
      </div>
    </div>
  );
};

export default Footer;
