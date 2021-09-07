import logo from './logo.svg';
import './App.scss';
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Main from "../src/components/Main";
import {BrowserRouter} from "react-router-dom"
function App() {
  return (
    <div>
         
         <BrowserRouter>
         <Header></Header>
      <Main></Main>
     
      </BrowserRouter>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
