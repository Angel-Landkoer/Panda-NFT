// import styles
import "./ComponentDetailUser.scss";

export function ComponentDetailUser({ user }) {
  return (
    <>
      <section className="componentDetailUser">
        <figure className="sectionImageUser">
          <img
            src={
              user.picture ? (
                user.picture.medium
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
              {user.name ? (
                user.name.first
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
