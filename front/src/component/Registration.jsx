import React from 'react'
import '../styles/registration.css'

const Registration = () => {
  return (
    <div className="container">
        <div className="title">Registration</div>
        <form action="#">
            <div className="user_details">
                <div className="input_pox">
                    <span className="datails">Full Name</span>
                    <input type="text" placeholder="enter your name" required/>
                </div>
                <div className="input_pox">
                    <span className="datails">Username</span>
                    <input type="text" placeholder="enter your Username" required/>
                </div>
                <div className="input_pox">
                    <span className="datails">Email</span>
                    <input type="text" placeholder="enter your Email" required/>
                </div>
                <div className="input_pox">
                    <span className="datails">Phone Number</span>
                    <input type="text" placeholder="enter your Phone" required/>
                </div>
                <div className="input_pox">
                    <span className="datails">Password</span>
                    <input type="text" placeholder="enter your Password" required/>
                </div>
                <div className="input_pox">
                    <span className="datails">Confirm Password</span>
                    <input type="text" placeholder="Confirm your Password" required/>
                </div>
            </div>
            <div className="gender_details">
                <input type="radio" name="gender" id="dot-1"/>
                <input type="radio" name="gender" id="dot-2"/>
                <input type="radio" name="gender" id="dot-3"/>
                <span className="gender_title"> Gender</span>
                <div className="category">
                    <label for="dot-1">
                        <span className="dot one"></span>
                        <span className="gender">Mail</span>
                    </label>
                    <label for="dot-2">
                        <span className="dot two"></span>
                        <span className="gender">Femail</span>
                    </label>
                    <label for="dot-3">
                        <span className="dot three"></span>
                        <span className="gender">Perer not to say</span>
                    </label>
                </div>
            </div>
            <div className="button">
                <input type="submit" value="Register"/>
            </div>
        </form>
    </div>
  )
}

export default Registration
