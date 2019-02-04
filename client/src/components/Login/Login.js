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

class Login extends Component {
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

  submitForm(e) {
    e.preventDefault();
    console.log(`Email: ${this.state.email}`);
  }

  render() {
    return (
      <div className="container">
        <Button onClick={this.toggleModal}>Login or Register</Button>
        <Modal isOpen={this.state.modalOpen} toggle={this.toggleModal}>
          <ModalBody className="modal-body">
            <h3>Sign in</h3>
            {/* QUESTION FOR TANNER BELOW - HOW TO SUBMIT EMAIL TO DATABASE? */}
            <Form className="form" onSubmit={e => this.submitForm(e)}>
              <Col>
                <FormGroup>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="myemail@email.com"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="passwords have at least 6 digits and one uppercase"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
              <Button>Log in</Button>
            </Form>
            <p />
            <span class="reg">
              Don't have an account? <a href="#">Sign up</a>
            </span>
            <p />
            <span class="psw">
              Forgot <a href="#">password?</a>
            </span>
            <p />
            <Button onClick={this.toggleModal}>Close</Button>
            <p />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Login;
