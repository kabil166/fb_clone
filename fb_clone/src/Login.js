import { Button } from '@mui/material'
import React from 'react'
import './Login.css'
import {auth, provider} from "./firebase"

function Login() {

    const signin = () =>{
        auth.signInWithPopup(provider)
        .then(result=>console.log(result)).catch(error=>console.log("error"))
    }
    return (
        <div className='login'>
            <div className='login__logo'>
                <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt=""/>

                <img src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png" alt=""/>
            </div>
            <Button type="submit" onClick={signin}>Sign In</Button>
        </div>
    )
}

export default Login
