import React from 'react';
import '../styles/login.css';

const Login = () => {
    return (
        <>
            <div id="particles-js" className="snow"></div>

            <main>
                <div className="left-side"></div>

                <div className="right-side">
                    <form>
                        {/* <div className="btn-group">
                            <button className="btn">
                                <img className="logo" src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/d1c98974-c62d-4071-8bd2-ab859fc5f4e9" alt="" />
                                <span>Sign in with Google</span>
                            </button>
                            <button className="btn">
                                <img className="logo" src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/59c1561b-8152-4d05-b617-0680a7629a0e" alt="" />
                                <span>Sign in with Apple</span>
                            </button>
                        </div>

                        <div className="or">OR</div> */}

                        <label for="email">Email</label>
                        <input type="text" placeholder="Enter Email" name="email" required />

                        <label for="password">Password</label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            required />

                        <button type="submit" className="login-btn">Sign in</button>
                        <div className="links">
                            <p>Forgot password?</p>
                            <p>Do not have an account?</p>
                        </div>
                    </form>
                </div>

            </main>
        </>
    )
}

export default Login
