import React from "react";
import Box4 from "../../img/box4.jpg"
import "./About.scss";
const About = () => {
 
  const AddressMap=()=>{
    return (
        <div className="google-map-code">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d799563.5243456757!2d-4.257542752900488!3d38.48083397610331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6ea2933408cb11%3A0xdbad05ad6b1810f3!2sMRW%20La%20Carolina!5e0!3m2!1ses!2ses!4v1630969062780!5m2!1ses!2ses" width="100%" height="40%" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
    );
 }
  return (
    <div className="About">
      <section>
     
    
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi sint occaecati At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi sint occaecaticupiditate non provident,
      
  <div className="line"></div>

         {AddressMap()}
         <br></br>
        <p>Contact us 24/7 (English, Spanish,
        Japanese, Czech) es@code-express.com
        </p>
        
      </section>
    </div>
  );
};

export default About;
