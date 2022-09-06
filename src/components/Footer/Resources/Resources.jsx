// import styles
import "./Resources.scss";

export function Resources({ resources }) {
  return (
    <>
      <section className="resources">
        <h4>Resources</h4>
        <ul>
          {resources.map((resource, i) => {
            return <li key={`resource-${i}`}>{resource}</li>;
          })}
        </ul>
      </section>
    </>
  );
}
