// import components
import { LogoContext } from "./LogoContext/LogoContext";
import { Resources } from "./Resources/Resources";
import { Company } from "./Company/Company";
import { Contact } from "./Contact/Contact";

// import styles
import "./Footer.scss";

export function Footer() {
  const resources = [
    "Help Center",
    "Platform Status",
    "Partners",
    "Gas-Free Marketplace",
    "BLog",
  ];

  const company = ["Our Team", "About Us", "Contact Us", "Carrer",];

  const contactLogos = [
    "fa-brands fa-facebook logoFacebook",
    "fa-brands fa-twitter logoTwitter",
    "fa-brands fa-square-instagram logoInstagram",
  ];

  return (
    <>
      <footer>
        <section className="footer">
          <LogoContext />
          <Resources resources={resources} />
          <Company company={company} />
          <Contact contactLogos={contactLogos} />
          <div className="contentP">
            <p>2021 All Right Reserved</p>
          </div>
        </section>
      </footer>
    </>
  );
}
