import BaseLayout from "layouts/BaseLayout";
import { Link } from "react-router-dom";
import { FormEvent, useState } from "react";
import { isValidEmail } from "utils/checkEmail";

export default function Register() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!isValidEmail(email)) {
      setError("Invalid email address");
    } else {
      // Just to keep original messenge from this page
      setError("That email is already taken");
    }
  };

  return (
    <BaseLayout>
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign up</h1>
              <p className="text-xs-center">
                <Link to="/login">Have an account?</Link>
              </p>

              {error &&
                <ul className="error-messages">
                  <li>{error}</li>
                </ul>
              }

              <form onSubmit={handleSubmit}>
                <fieldset className="form-group">
                  <input className="form-control form-control-lg" type="text" placeholder="Your Name" />
                </fieldset>
                <fieldset className="form-group">
                  <input onChange={(event) => setEmail(event.target.value)} className="form-control form-control-lg" type="text" placeholder="Email" />
                </fieldset>
                <fieldset className="form-group">
                  <input className="form-control form-control-lg" type="password" placeholder="Password" />
                </fieldset>
                <button type="submit" className="btn btn-lg btn-primary pull-xs-right">Sign up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </ BaseLayout>
  );
}
