import React, { Component } from "react";
import { Modal, ModalBody } from "reactstrap";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import "./styles.css";

class LoginTest extends Component {
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
        <button onClick={this.toggleModal}>Login or Register</button>
        <Modal isOpen={this.state.modalOpen} toggle={this.toggleModal}>
          <ModalBody className="modal-body">
            <h3>LOGIN</h3>
            <input
              className="email"
              placeholder="email address"
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />

            <input
              className="password"
              placeholder="password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <p />

            <span class="psw">
              Forgot <a href="#">password?</a>
            </span>
            <p />
            <button onClick={this.toggleModal}>Enter</button>
            <button onClick={this.toggleModal}>Close</button>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default LoginTest;
