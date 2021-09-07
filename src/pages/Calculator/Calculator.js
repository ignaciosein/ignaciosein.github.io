import React, { useState } from "react";
import Calcs from "../../components/Countrys/Countrys";
import Cookies from 'universal-cookie';
import "./Calculator.scss";
 


const Calculator = () => {
  const [countrys, setCountrys] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [cp, setCp] = useState("");
  const [weigth, setWeigth] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [value, setValue] = useState("");
  const [countryTax, setCountryTax] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [error, setError]=useState("")

  const cityChange = (e) => setCity(e.target.value);
  const stateChange = (e) => setState(e.target.value);
  const cpChange = (e) => setCp(e.target.value);
  const weigthChange = (e) => setWeigth(e.target.value);
  const lengthChange = (e) => setLength(e.target.value);
  const widthChange = (e) => setWidth(e.target.value);
  const heightChange = (e) => setHeight(e.target.value);
  const valueChange = (e) => setValue(e.target.value);

  const submit = () => {
    if (
      city &&
      state &&
      countrys &&
      cp &&
      weigth &&
      length &&
      width &&
      height &&
      value
    ) {
      calc();
      setError("")
    } else if (!city) {
      setError("Introduce una ciudad")
    } else if (!state) {
      setError("Introduce un estado o provincia")

    } else if (!countrys) {
      setError("Elige un país")

    } else if (!cp) {
      setError("Introduce el código postal")

    } else if (!weigth) {
      setError("Introduce peso(kg)")

    } else if (!length) {
      setError("Introduce longitud(cm)")

    } else if (!width) {
      setError("Introduce ancho(cm)")

    } else if (!height) {
      setError("Introduce alto(cm)")

    } else if (!value) {
      setError("Introduce el valor del paquete(€)")
      ;
    }
  };

  const calc = () => {
    let peso = weigth * 0.5;
    let longitud = length * 0.2;
    let ancho = width * 0.16;
    let alto = height * 0.12;
    let valor = value;

    let total = peso + longitud + ancho + alto + valor * countryTax;

    let totales = parseFloat(Math.round(total * 100) / 100).toFixed(2);
    setTotalPrice(totales);
  };

  const saveCountry = (city) => {
    if (city != "Spain") {
      setCountrys(city);
      setCountryTax(3);
    } else {
      setCountrys(city);
      setCountryTax(0.5);
    }
  };

  return (
    <div className="Calculator">
       <Calcs name="pais" datos={(countrys) => saveCountry(countrys)} />
       <input type="text" name="city" onChange={cityChange} required placeholder="Introduce tu ciudad"></input>
       <input type="text" name="state" onChange={stateChange} required placeholder="Introduce estado o provincia"></input>
       <input type="number" name="cp" onChange={cpChange} required placeholder="Introduce código postal"></input>

      <div className="line"></div>
       <input type="text" name="weigth" onChange={weigthChange} required placeholder="Introduce peso(kg)"></input>
 
      <input type="text" name="length" onChange={lengthChange} required placeholder="Introduce longitud(cm)"></input>
 
      <input type="text" name="width" onChange={widthChange} required placeholder="Introduce ancho(cm)"></input>
 
      <input type="text" name="height" onChange={heightChange} required placeholder="Introduce alto(cm)"></input>
 
      <input type="text" name="value" onChange={valueChange} required placeholder="Introduce valor(€)"></input>

      <button type="submit" onClick={submit}>
        Calcular envío
      </button>
      <p className="totalPrice">
        {totalPrice ? `Su envío costaría ${totalPrice}€ y se enviaría a ${city}(${countrys})` : ""}
        {error? error : ""}
      </p>
    </div>
  );
};

export default Calculator;
