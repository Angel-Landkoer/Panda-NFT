// import styles
import "./Cards.scss";

export function Cards({title, paragraph }) {
  return (
    <>
      <div className="cards">
        <figure>
          <img
            src="https://github.com/Angel-Landkoer/The-pictures/blob/master/reac-Pandas_NFT/IconPlaceholder.png?raw=true"
            alt=""
          />
        </figure>
        <h3>{title}</h3>
        <p>{paragraph}</p>
      </div>
    </>
  );
}
