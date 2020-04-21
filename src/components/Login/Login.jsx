import React, { Component } from "react";
import Header from "../Header/Header";

class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <form>
            <div className="col-md-3">
              {" "}
              <div className="form-group">
                <input
                  type="text"
                  placeholder="UserName"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Password"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  type="button"
                  className="btn btn-primary"
                  placeholder="Submit"
                  value="Submit"
                />
              </div>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
export default Login;
