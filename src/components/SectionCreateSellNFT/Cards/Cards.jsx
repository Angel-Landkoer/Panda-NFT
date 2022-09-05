// import styles
import "./Cards.scss";

export function Cards({ context }) {
  return (
    <>
      <div className="cards">
        <figure>
          <img src={context.img} alt="img" />
        </figure>
        <h3>{context.title}</h3>
        <p>{context.paragraph}</p>
      </div>
    </>
  );
}
