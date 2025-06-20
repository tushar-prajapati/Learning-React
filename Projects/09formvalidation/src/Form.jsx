import React from 'react'
import './style.css'
import { useState } from 'react'

const Form = () => {
    const [username, setUsername ] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [errorUsername, setErrorUsername] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('');

    const [userColor, setUserColor] = useState('');
    const [emailColor, setEmailColor] = useState('');
    const [passwordColor, setPasswordColor] = useState('');
    const [confirmPasswordColor, setConfirmPasswordColor] = useState('');

    const validate =(e)=>{
        e.preventDefault();

        if(username.length>8){
            setErrorUsername('');
            setUserColor('green');
        } else {
            setErrorUsername('Username must be of atleast 8 characters.')
            setUserColor('red')
        }

        if(email.includes('@gmail.com')){
            setErrorEmail('')
            setEmailColor('green')
        }else{
            setErrorEmail('Incorrect email')
            setEmailColor('red')
        }

        if(password.length>8){
            setErrorPassword('');
            setPasswordColor('green')
        }else{
            setErrorPassword('Password should be atleast 8 characters long.');
            setPasswordColor('red')
        }

        if(password!='' && confirmPassword === password){
            setErrorConfirmPassword('')
            setConfirmPasswordColor('green')
        } else{
            setErrorConfirmPassword('Passwords do not match.')
            setConfirmPasswordColor('red')
        }
    }


  return (
    <>
    <div className="card">
        <div className="card-image">

        </div>
        <form>
            <input type="text" placeholder='Name' style={{borderColor: userColor}} value={username} onChange={(e)=>setUsername(e.target.value)} />
            <p className="error">{errorUsername}</p>

            <input type="email" placeholder='Email' style={{borderColor: emailColor}} value={email} onChange={(e)=>setEmail(e.target.value)} />
            <p className="error">{errorEmail}</p>

            <input type="password" placeholder='Password' style={{borderColor: passwordColor}} value={password} onChange={(e)=>setPassword(e.target.value)} />
            <p className="error">{errorPassword}</p>

            <input type="password" placeholder='Confirm Password' style={{borderColor: confirmPasswordColor}} value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} />
            <p className="error">{errorConfirmPassword}</p>

            <button className="submit-btn" onClick={validate}>Submit</button>
        </form>
    </div>
    </>
  )
}

export default Form