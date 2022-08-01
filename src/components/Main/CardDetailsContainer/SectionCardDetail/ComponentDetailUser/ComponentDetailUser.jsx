import "./ComponentDetailUser.scss";

export function ComponentDetailUser({ creator, imagen }) {
  return (
    <>
      <section className="componentDetailUser">
        <figure className="sectionImageUser">
          <img src={imagen} alt="algo" />
        </figure>
        <div className="sectionUserCreator">
          <span>Creator</span>
          <span>
            <b>{creator}</b>
          </span>
        </div>
      </section>
    </>
  );
}
