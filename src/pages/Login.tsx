import { signin } from "auth/api-auth";
import { authenticate } from "auth/auth-helpers";
import BaseLayout from "layouts/BaseLayout";
import { FormEvent, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { RequestUser } from "services/user-service";

export default function Login() {
  const [user, setUser] = useState<RequestUser>({
    email: '',
    password: ''
  });
  const [error, setError] = useState("");
  const history = useHistory();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (user.email !== '' && user.password !== '') {
      signin(user.email, user.password)
        .then(data => {
          authenticate(data)
          history.replace('/');
        })
        .catch(error => {
          setError(error.message);
        });
    } else {
      setError("Fields cannot be empty!");
    }
  };
  return (
    <BaseLayout>
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign in</h1>
              <p className="text-xs-center">
                <Link to="/register">Dont have an account?</Link>
              </p>

              {error &&
                <ul className="error-messages">
                  <li>{error}</li>
                </ul>
              }

              <form onSubmit={handleSubmit}>
                <fieldset className="form-group">
                  <input onChange={(event) => setUser({ ...user, email: event.target.value })} className="form-control form-control-lg" type="text" placeholder="Email" />
                </fieldset>
                <fieldset className="form-group">
                  <input onChange={(event) => setUser({ ...user, password: event.target.value })} className="form-control form-control-lg" type="password" placeholder="Password" />
                </fieldset>
                <button type="submit" className="btn btn-lg btn-primary pull-xs-right">Sign in</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </ BaseLayout>
  );
}
