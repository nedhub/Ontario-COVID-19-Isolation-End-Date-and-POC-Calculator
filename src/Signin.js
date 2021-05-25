import React, { useRef} from 'react';
import { auth } from './fire';
import './Signin.css';




const Signin = () => {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const signUp = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword( 
            emailRef.current.value, 
            passwordRef.current.value
        ).then(user=>{
            console.log(user)
        }).catch(err => {
            console.log(err)
        })
    }



    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword( 
            emailRef.current.value, 
            passwordRef.current.value
        ).then(user=>{
            console.log(user)
        }).catch(err => {
            console.log(err)
        })
    }



    





    return (
        <div className="signin">
            {/* <form action="">
                <h1>Sign in</h1>
                <input ref={emailRef} type="email"/>
                <input ref={passwordRef} type="password"/>
                <button onClick={signIn}>Sign in</button>
                <h6>Not yet registered? <span 
                onClick={signUp}
                className="signin__link">Sign up</span></h6>
            </form> */}

            {
                <div class="container" id="container">
                <div class="form-container sign-up-container">
                    <form action="#">
                        <h1>Create Account</h1>
                        <div class="social-container">
                            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Sign Up</button>
                    </form>
                </div>
                <div class="form-container sign-in-container">
                    <form action="#">
                        <h1>Sign in</h1>
                        
                        <span>or use your account</span>
                        <input ref={emailRef} type="email" placeholder="Email" />
                        <input ref={passwordRef} type="password" placeholder="Password" />
                        <a href="#">Forgot your password?</a>
                        <button onClick={signIn}>Sign In</button>
                    </form>
                </div>
                <div class="overlay-container">
                    <div class="overlay">
                        <div class="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button class="ghost" id="signIn">Sign In</button>
                        </div>
                        <div class="overlay-panel overlay-right">
                            <h1>Hello, Please Login</h1>
                            <p>Ontario COVID-19 Isolation End Date and POC Calculator </p>
                            <button onClick={signUp} class="ghost" id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
            
            
            }




            
        </div>
    )
}

export default Signin
