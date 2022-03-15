import "./Login.css";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [message, setMessage] = useState("");

  function emailChangeHandler(event) {
    setEmail(event.target.value);
  }

  function passChangeHanlder(event) {
    setPass(event.target.value);
  }

  let validatePass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  let validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  function submitHanlder(event) {
    if (!validateEmail.test(email)) {
      event.preventDefault();
      setMessage(`* ایمیل وارد شده معتبر نمی باشد!`);
    } else if (!validatePass.test(pass)) {
      event.preventDefault();
      setMessage("* کلمه عبور وارد شده معتبر نمی باشد!");
    }
  }

  return (
    <form id="li-form">
      <input
        type="email"
        name="Email"
        placeholder="ایمیل"
        onChange={emailChangeHandler}
        value={email}
      />
      <input
        type="password"
        name="Password"
        onChange={passChangeHanlder}
        placeholder="کلمه عبور"
        value={pass}
      />
      <p>{message}</p>
      <button type="submit" onClick={submitHanlder}>
        ورود
      </button>
    </form>
  );
}

export default Login;
