import React, { useState } from 'react'
import "./LoginScreen.css"
import SignUpScreen from './SignUpScreen';

function LoginScreen() {
    const [signIn, setSignIn] = useState(false);

    return (
        <div className="loginScreen">
            <img src="https://wallpaperaccess.com/full/496360.jpg" alt="" />
         
            <div className="loginScreen__background">
                <button onClick={() => setSignIn(true)}
                    className="loginScreen__button">LOGIN</button>

                <div className="loginScreen__body">
                    {signIn ? (
                        <SignUpScreen />
                    ) : (
                        <>
                            <h1>Expect the Unexpected</h1>
                            <div className="loginScreen__input">
                                <input type="text" placeholder="Enter Your Name" />
                                <button onClick={() => setSignIn(true)} className="loginScreen__btn" type="submit">LET'S GO</button>
                            </div>

                        </>
                    )}

                </div>
            </div>
        </div >
    )
}

export default LoginScreen
