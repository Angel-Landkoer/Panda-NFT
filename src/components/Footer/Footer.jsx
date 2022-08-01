// import components
import { LogoContext } from "./LogoContext/LogoContext";
import { Resources } from "./Resources/Resources";
import { Company } from "./Company/Company";
import { Contact } from "./Contact/Contact";

// import styles
import "./Footer.scss";

export function Footer() {
  return (
    <>
      <footer>
        <section className="footer">
          <LogoContext />
          <Resources />
          <Company />
          <Contact />
          <div className="contentP">
            <p>2021 All Right Reserved</p>
          </div>
        </section>
      </footer>
    </>
  );
}
