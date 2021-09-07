import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import Close from "../../img/close.png"

import "./Newsletter.scss";
const cookies = new Cookies();
const Newsletter = () => {
  const [mail, setMail] = useState("");
  const [showMail, setShowMail] = useState("");
  const [showNews, setShowNews] = useState("");

  useEffect(() => {
    let galleta = cookies.get("news");

    if (galleta == undefined) {
   
      /*     alert("no existe cookie") */
      /*  cookies.set("news","true")
     setCookie(false) */
      setShowNews(false);
    } else {
    
      setShowNews(true);
      /*    alert("existe cookie") */
    }
  }, []);

  const handleSubmit = (e) => {
    setMail(e.target.value);
    e.preventDefault();
  };

  const submit = () => {
    let test = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(mail);

    if (test) {
      setShowMail(true);
    } else {
      setShowMail(false);
    }
  };

  const message = () => {
    if (mail === "") {
      return ` `;
    } else if (showMail) {
      /*  cookies.remove("news") */
      cookies.set("news", "true");
      setInterval(function(){  setShowNews(true);; }, 2000);
      return `Te has suscrito con éxito con el email : ${mail}`;
    } else if (showMail == "fail") {
      return `Introduce un email válido`;
    } else if (showMail === false) {
      return `Introduce un email válido`;
    }
  };

  const showDiv = () => {
    return (
      <div className="Newsletter">
       <img src={Close} onClick={()=>setShowNews(true)}></img>
        <p>
          
          <h3>
            Únete a nosotros para estar a la última de los próximos descuentos
            de la compañía
          </h3>
        </p>

        <label>
          {" "}
          <h2>Introduce tu Email</h2>
        </label>

        <input
          name="email"
          type="email"
          required
          onChange={handleSubmit}
        ></input>

        <button onClick={() => submit()} type="submit">
          Subscribirse
        </button>

        <p className="info">{message()}</p>
      </div>
    );
  };
  return <div>
    {showNews? "": showDiv() }
  </div>;
};

export default Newsletter;
