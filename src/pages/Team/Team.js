import React, { useEffect, useState } from "react";
import "./Team.scss";
import axios from "axios";

const Team = () => {
  const [characters, setCharacters] = useState("");

  useEffect(() => {
    axios("http://futuramaapi.herokuapp.com/api/v2/characters").then(
      (resultado) => {
        let characterClean = resultado.data.filter(
          (char) => char.Status != "Unknown"
        );
        let characterClean2 = characterClean.filter(
          (char) => (char.Status = "Alive")
        );

        let characterClean3 = characterClean2.filter(
          (char) => char.Age != "Unknown"
        );

        setCharacters(characterClean3);
      }
    );
  }, []);

  return (
    <div className="Team">
      <h2>Equipo técnico</h2>

      <div className="team-container">
        {characters
          ? characters.map((item, i) => (
              <div className="team">
                <h4>
                  {item.Name}({item.Species})
                </h4>
                <img src={item.PicUrl}></img>
                <h5> {item.Profession}</h5>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Team;
