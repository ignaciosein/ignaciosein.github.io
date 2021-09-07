import React from 'react'
import {Link} from "react-router-dom";
import "./Nav.scss";
const Nav = () => {
  return (
    <div className="Nav">
       <tr>
         <td>

         <Link  to={"/"}>
                Inicio
              </Link>
         </td>
           
              
           
            <td>
            <Link   to={"/calculator"}>
              Calculadora
            </Link>
            </td>
            <td>
            
              <Link   to={"/team"}>
                Equipo
              </Link>
            </td>
            <td><Link   to={"/contact"}>
              Contacto
            </Link></td>
            </tr>
          
    </div>
  )
}

export default Nav
