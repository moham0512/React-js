import React from "react";
import "./SignUp.css";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      message: "",
      validatePass: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      validateEmail: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    };

    this.firstNameChangeHandler = this.firstNameChangeHandler.bind(this);
    this.lastNameChangeHandler = this.lastNameChangeHandler.bind(this);
    this.emailChangeHandler = this.emailChangeHandler.bind(this);
    this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  firstNameChangeHandler(event) {
    this.setState({ firstName: event.target.value });
  }

  lastNameChangeHandler(event) {
    this.setState({ lastName: event.target.value });
  }

  emailChangeHandler(event) {
    this.setState({ email: event.target.value });
  }

  passwordChangeHandler(event) {
    this.setState({ password: event.target.value });
  }

  submitHandler(event) {
    if (this.state.firstName.length < 5) {
      event.preventDefault();
      this.setState({ message: "* نام وارد شده معتبر نمی باشد!" });
    } else if (this.state.lastName.length < 5) {
      event.preventDefault();
      this.setState({ message: "* نام خانوادگی وارد شده معتبر نمی باشد!" });
    } else if (!this.state.validateEmail.test(this.state.email)) {
      event.preventDefault();
      this.setState({ message: "* لطفا یک ایمیل معتبر وارد کنید!" });
    } else if (!this.state.validatePass.test(this.state.password)) {
      event.preventDefault();
      this.setState({ message: "* لطفا یک کلمه عبور معتبر وارد کنید!" });
    }
  }

  render() {
    const { firstName, lastName, email, password } = this.state;
    return (
      <form id="su-form">
        <div>
          <input
            type="text"
            name="First_Name"
            placeholder="نام"
            value={firstName}
            onChange={this.firstNameChangeHandler}
          />
          <input
            type="text"
            name="Last_Name"
            placeholder="نام خانوادگی"
            value={lastName}
            onChange={this.lastNameChangeHandler}
          />
        </div>
        <input
          type="email"
          name="Email"
          placeholder="ایمیل"
          value={email}
          onChange={this.emailChangeHandler}
        />
        <input
          type="password"
          name="Password"
          placeholder="کلمه عبور"
          value={password}
          onChange={this.passwordChangeHandler}
        />
        <br />
        <p>{this.state.message}</p>
        <button type="submit" onClick={this.submitHandler}>
          ثبت نام
        </button>
      </form>
    );
  }
}

export default SignUp;
