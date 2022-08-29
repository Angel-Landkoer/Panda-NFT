// import styles
import "./Modal.scss";

export function Modal({ children }) {
  return (
    <>
      <section className="containerModal">{children}</section>
    </>
  );
}
