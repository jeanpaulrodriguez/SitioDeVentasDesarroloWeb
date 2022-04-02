import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase';
import './Login.css'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPasword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
            //fancy firebase login
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
            //it successfully created a new user with email and password
            console.log(auth);
                if (auth) {
                    history.push('/')
            }
        })
        .catch(error => alert(error.message))
            
        //fancy firebase register
    }

    return (
    <div className='login'>
        <Link to='/'>
        <img
        className="login__logo"
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png'>
        </img>
        </Link>
        
        <div className='login__container'>
            <h1>Sign in</h1>

            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPasword(e.target.value)} />

                <button type='submit' onClick={signIn}
                className='login__signInButton'>Sign In</button>
            </form>

            <p>
                By signing-in you agree to the Amazon Conditions of use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>

            <button onClick={register} 
            className='login__registerButton'>Create Your Amazon Account</button>
        </div>
         
    </div>
  )
}

export default Login