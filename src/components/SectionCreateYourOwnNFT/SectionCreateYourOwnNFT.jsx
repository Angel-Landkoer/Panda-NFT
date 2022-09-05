// import styles
import "./SectionCreateYourOwnNFT.scss";

export function SectionCreateYourOwnNFT({ sectionCreateYourOwnNFT }) {
  return (
    <>
      {sectionCreateYourOwnNFT.map((item, i) => {
        return (
          <section key={`yourOwn${i}`} className="sectionCreateYourOwnNFT">
            <h3>{item.title}</h3>
            <p>{item.paragraph}</p>
            <button>{item.btn}</button>
          </section>
        );
      })}
    </>
  );
}
