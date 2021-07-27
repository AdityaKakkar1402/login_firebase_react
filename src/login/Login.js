import React from 'react'
import { Box,Typography } from '@material-ui/core';


const Login = (props) => {

    const {email, setEmail,password, setPassword,handleLogin, handleSignup, hasAccount,setHasAccount,emailError,passwordError}=props;

    
    return (
        <>
        <Box className="hometitle">
              <Typography variant="h5">Inventory Management</Typography>
          </Box>

        <section className="login">
            
<div className="loginContainer">
            <label>Username</label>
            <input
            type="text"
            autoFocus
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <p className="errorMsg">{emailError}</p>
            <label>Password</label>
            <input type="password"
            required
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <p className="errorMsg">{passwordError}</p>
            <div className="btnContainer">
                {hasAccount ? (
                    <>
                    <button className="buttonk" onClick={handleLogin}>Sign in</button>
                   
                    </>


                 ) : (
                   <>
                   <button onClick={handleSignup}>Sign up</button> 
                    <p>Have an account ? <span onClick={()=> setHasAccount(!hasAccount)}>Sign in</span></p>
                    </>
                    

                 )}
            </div>
        </div>
            
        </section>
        </>
    )
}

export default Login
