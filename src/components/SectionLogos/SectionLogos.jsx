// import styles
import "./SectionLogos.scss";

export function SectionLogos({ logos }) {
  return (
    <>
      <section className="logos">
        {logos.map((logo, i) => {
          return (
            <figure key={`logo${i}`}>
              <img src={logo} alt={`logo${i}`} />
            </figure>
          );
        })}
      </section>
    </>
  );
}
