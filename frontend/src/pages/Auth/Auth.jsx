import React from 'react'
import  './Auth.css'
import Logo from '../../img/logo.png'

const Auth = () => {
  return (
    <div className="Auth">
        <div className="a-left">
            <img src={Logo} alt="" />
            <div className="Webname">
                <h1>LD Media</h1>
                <h6>Connect and Explore the World</h6>
            </div>
        </div>

        < LogIn/>
    </div>
  )
}

function LogIn() {
    return (
        <div className="a-right">
            <form action="" className="infoForm authForm">


                <h3>Log In</h3>

                <div>
                    <input type="text" placeholder='Username' className='infoInput' name='username'/>
                </div>

                <div>
                    <input type="text" placeholder='Password' className='infoInput' name='password'/>
                    
                </div>

                <div>

                    <span style={{fontSize: '12px'}}>Don't have an account Sign up</span>
                
                    <button className='button infoButton' type='submit'>
                            Login 
                        </button>
                </div>
            </form>
        </div>
    )
}

function SignUp() {

    return (
        <div className="a-right">
            <form action="" className="infoForm authForm">


                <h3>Sign up</h3>

                <div>
                    <input type="text" placeholder='First Name' className='infoInput' name='firstname'/>
                    <input type="text" placeholder='Last Name' className='infoInput' name='lastname'/>
                </div>

                <div>
                    <input type="text" placeholder='Username' className='infoInput' name='username'/>
                </div>

                <div>
                    <input type="text" placeholder='Password' className='infoInput' name='password'/>
                    <input type="text" placeholder='Confirm Password' className='infoInput' name='comfirmpass'/>
                </div>

                <div>
                    <span style={{fontSize: '12px'}}>Already have an account. Login!</span>
                    
                </div>
                <button className='button infoButton' type='submit'>
                        Signup 
                    </button>
            </form>
        </div>
    )
}

export default Auth