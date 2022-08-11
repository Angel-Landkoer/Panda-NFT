// import styles
import "./Details.scss";

// import components
import { CardDetailsContainer } from "../../components/CardDetailsContainer/CardDetailsContainer";

export function Details() {
  return (
    <>
      <main>
        <section className="mainDatails">
          <CardDetailsContainer />
        </section>
      </main>
    </>
  );
}
