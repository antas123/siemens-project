import React from 'react'
import bg from "../images/bg2.jpg"


const About = () => {

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
        color: 'white',
      };

  return (
    <div style={backgroundStyles}>
    <h1>About us</h1>
    <h4 style={{padding:"2em"}} >Siemens Limited is a technology company focused on industry, infrastructure, digital transformation,
     transport as well as transmission and generation of electrical power. It is the flagship listed company 
     of Siemens AG in India. The company’s business structure is well oriented in meeting the needs of the industry
      in improving efficiency, quality, flexibility and speed. With its wide-ranging portfolio, market-oriented 
      organization structure, global technology leadership and strong local competence, the company is in a good 
      position to partner with the country in sustainable growth.</h4>
  </div>
  )
}

export default About