// import styles
import "./ComponentDetailUser.scss";

export function ComponentDetailUser({ user }) {
  return (
    <>
      <section className="componentDetailUser">
        <figure className="sectionImageUser">
          <img
            src={
              user.pictureU ? (
                user.pictureU
              ) : (
                <span>Aún no se encuentra el autor</span>
              )
            }
            alt="imagen"
          />
        </figure>
        <div className="sectionUserCreator">
          <span>Creator</span>
          <span>
            <b>
              {user.nameU ? (
                user.nameU
              ) : (
                <span>Aún no se encuentra el autor</span>
              )}
            </b>
          </span>
        </div>
      </section>
    </>
  );
}
