import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import Empresas from "../../img/empresas.jpg"
import Newsletter from "../../components/Newsletter/Newsletter";
import "./Home.scss";
const cookies = new Cookies();

const Home = () => {
  const [cookie, setCookie] = useState("");

  useEffect(() => {
    let galleta = cookies.get("news");

    if (galleta == undefined) {
      /*     alert("no existe cookie") */
      /*  cookies.set("news","true")
     setCookie(false) */
    } else {
      /*    alert("existe cookie") */
    }
  }, []);

  return (
    <div className="Home">
      {cookie == false ? <Newsletter /> : ""}
      <div className="container-home">
      <section className="bgh-1">
          <h1>Bienvenid@</h1>

          <p>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </section>
        <section className="bgh-2">
          <h1>INICIO</h1>

          <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            
          </p>
        </section>
        <section  className="bgh-3">
          <h1>Empresas con las que trabajamos</h1>

          <p>
            <img src={Empresas}></img>
            
          </p>
        </section>
      </div>
    </div>
  );
};

export default Home;
