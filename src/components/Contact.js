import React from 'react'
import bg from "../images/bg3.jpg"

const Contact = () => {

    const backgroundStyles = {
        height: '100vh', 
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        // backgroundAttachment: 'fixed',
       
        display: 'flex',
        flexDirection:"column",
        justifyContent: 'center',
        alignItems: 'center',
        color: '#DDF2FD',
      };

  return (
    <div style={backgroundStyles}>
        <h1>Contact us</h1>
        <h2>Thank you for considering us as your business partner, <br></br>  you can reach out to us at xyz@siemens.com</h2>
    </div>
  )
}

export default Contact