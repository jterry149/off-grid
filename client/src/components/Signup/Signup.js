import React, { Component } from "react";
import { Modal, ModalBody } from "reactstrap";

import "./styles.css";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      modalOpen: false
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  toggleModal = () => this.setState({ modalOpen: !this.state.modalOpen });

  render() {
    return (
      <div className="container">
        <button onClick={this.toggleModal}>Signup</button>
        <Modal isOpen={this.state.modalOpen} toggle={this.toggleModal}>
          <ModalBody className="modal-body">
            <h2>Sign up</h2>

            <form action="action_page.php">
              <div className="imgcontainer">
                <img src="./Images/avatar.jpg" alt="Avatar" class="avatar" />

                <div class="container">
                  <label for="uname">
                    <b>Username</b>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Username"
                    name="uname"
                    required
                  >
                    <label for="psw">
                      <b>Password</b>
                    </label>
                    <input
                      type="password"
                      placeholder="Enter Password"
                      name="psw"
                      required
                    >
                      <button type="submit">Login</button>
                      <label>
                        <input
                          type="checkbox"
                          checked="checked"
                          name="remember"
                        >
                          {" "}
                          Remember me
                          <div
                            class="container"
                            style="background-color:#f1f1f1"
                          >
                            <button type="button" class="cancelbtn">
                              Cancel
                            </button>
                            <span class="psw">
                              Forgot <a href="#">password?</a>
                            </span>
                          </div>
                          <input
                            type="text"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                          />
                          <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                          />
                          <button onClick={this.toggleModal}>Close</button>
                        </input>
                      </label>
                    </input>
                  </input>
                </div>
              </div>
            </form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Signup;
