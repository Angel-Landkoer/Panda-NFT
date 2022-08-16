// import styles
import "./Company.scss";

export function Company({ company }) {
  return (
    <>
      <section className="company">
        <h4>Company</h4>
        <ul>
          {company.map((companytext, i) => {
            return <li key={`company${i}`}>{companytext}</li>;
          })}
        </ul>
      </section>
    </>
  );
}
