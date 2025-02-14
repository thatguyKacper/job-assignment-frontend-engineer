import { clearSession } from "auth/auth-helpers";
import BaseLayout from "layouts/BaseLayout";
import { useHistory } from "react-router-dom";

export default function Settings() {
  const history = useHistory();

  const handleLogout = () => {
    clearSession();
    history.replace('/');
  };

  return (
    <BaseLayout>
      <div className="settings-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Your Settings</h1>

              <form>
                <fieldset>
                  <fieldset className="form-group">
                    <input className="form-control" type="text" placeholder="URL of profile picture" />
                  </fieldset>
                  <fieldset className="form-group">
                    <input className="form-control form-control-lg" type="text" placeholder="Your Name" />
                  </fieldset>
                  <fieldset className="form-group">
                    <textarea className="form-control form-control-lg" rows={8} placeholder="Short bio about you" />
                  </fieldset>
                  <fieldset className="form-group">
                    <input className="form-control form-control-lg" type="text" placeholder="Email" />
                  </fieldset>
                  <fieldset className="form-group">
                    <input className="form-control form-control-lg" type="password" placeholder="Password" />
                  </fieldset>
                  <button className="btn btn-lg btn-primary pull-xs-right">Update Settings</button>
                </fieldset>
              </form>
              <hr />
              <button onClick={handleLogout} className="btn btn-outline-danger">
                Or click here to logout.
              </button>
            </div>
          </div>
        </div>
      </div>
    </ BaseLayout>
  );
}
