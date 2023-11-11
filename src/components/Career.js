import React from 'react'
import bg from "../images/siemens.jpg"

const Career = () => {

    const backgroundStyles = {
        height: '100vh', 
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection:"column",
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
      };

  return (
    <div style={backgroundStyles}>
    <h1>Work with Siemens</h1>
    <h2>Currently there are no open position!!</h2>
    </div>
  )
}

export default Career