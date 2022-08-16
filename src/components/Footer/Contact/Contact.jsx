// import styles
import "./Contact.scss";

export function Contact({ contactLogos }) {
  return (
    <>
      <section className="contact">
        <h4>Contact</h4>
        <div className="text">
          <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
        </div>
        <div className="icons">
          {contactLogos.map((logo, i) => {
            return <i key={`contactLogo${i}`} className={logo}></i>;
          })}
        </div>
      </section>
    </>
  );
}
