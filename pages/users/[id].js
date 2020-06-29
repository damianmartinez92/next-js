import { useRouter } from "next/router";
import fetch from "isomorphic-fetch";

import Container from "../../components/container";

const User = ({ user }) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Container>
      {user ? (
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header text-center">
                <img
                  src={user.avatar}
                  alt="Profile"
                  style={{ borderRadius: "50%" }}
                />
              </div>
              <div className="card-body text-center">
                <h3>
                  {user.id}. {user.first_name} {user.last_name}
                </h3>
                <p>Email: {user.email}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header text-center">
                <h5>¡Ups! No se encontró ningún usuario</h5>
              </div>
              <div className="card-body text-center">
                <p>Por favor, verifique el número de usuario.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

User.getInitialProps = async (ctx) => {
  const res = await fetch(`https://reqres.in/api/users/${ctx.query.id}`);
  const resJSON = await res.json();
  // console.log(resJSON)
  return { user: resJSON.data };
};

export default User;
