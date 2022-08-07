import React, { useRef } from "react";
import { auth } from "./firebase";
import "./SignUpScreen.css";

function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="signUpScreen">
      <form>
        <h1>LOGIN</h1>
        <input ref={emailRef} type="email" placeholder="Enter Your Email" />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Enter Your Password"
        />
        <button onClick={signIn} className="signUpScreen__btn" type="submit">
          Login
        </button>
        <p className="new">New Account?</p>
        <span onClick={register} className="signUpScreen__link">
          SignUp Now
        </span>
        <p className="signupscreen__notice">Note!</p>
        <span className="signupscreen__des">
          When You create new account and login second time then create and
          please click on back arrow of the browser <br /> Copyright ©
          Lamborghini S.p.A.
        </span>
      </form>
    </div>
  );
}

export default SignUpScreen;
