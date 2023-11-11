import React, { useEffect } from 'react'
import { useNavigate} from 'react-router-dom';


const Protectedroute = (props) => {

   const {Component} = props
    const navigate = useNavigate();

    useEffect(()=>{
        let login = localStorage.getItem('userName');

        if(login===null)
        {
            navigate("login")
        }
    })
    

  return (
    <div>
     <Component/>
    </div>
  )
}

export default Protectedroute