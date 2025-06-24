import React, { useState } from 'react'
import  './Auth.css'
import Logo from '../../img/logo.png'

const Auth = () => {

    const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="Auth">
        {/* left side */}
        <div className="a-left">
            <img src={Logo} alt="" />
            <div className="Webname">
                <h1>LD Media</h1>
                <h6>Connect and Explore the World</h6>
            </div>
        </div>
        {/* right side */}
        <div className="a-right">
            <form action="" className="infoForm authForm">


                <h3>{isSignUp ? "Sign Up":"Log In"}</h3>

            {isSignUp && 
                <div>     
                    <input type="text" placeholder='First Name' className='infoInput' name='firstname'/>
                    <input type="text" placeholder='Last Name' className='infoInput' name='lastname'/>
                </div>
                }
                

                <div>
                    <input type="text" placeholder='Username' className='infoInput' name='username'/>
                </div>

                <div>
                    <input type="text" placeholder='Password' className='infoInput' name='password'/>
                {isSignUp && 
                    <input type="text" placeholder='Confirm Password' className='infoInput' name='comfirmpass'/>
                }
                    
                </div>

                <div>
                    <span style={{fontSize: '12px', cursor: 'pointer'}} onClick={() => setIsSignUp((prev) => !prev)}>
                        {isSignUp ? "Already have an account. Login!" : "Don't have an account Sign up"}
                    </span>
                    
                </div>
                <button className='button infoButton' type='submit'>
                    {isSignUp ? "Signup" : "Log In"} 
                    </button>
            </form>
        </div>
    </div>
  )
}


export default Auth