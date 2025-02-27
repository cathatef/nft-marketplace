import react from "react";
import Hero from "../components/Hero";
import Options from "../components/Options"
import Slider from "../components/Slider"
import Footer from "../components/Footer"
import "../styles/Home.css";
import CardList from "../components/CardList";
import { hotDropsData } from "../constants/MockupData";



const Home = () => {


  return (
    <div id="home">
      <Hero list={hotDropsData} />

      <p id="card-list-header-text"> Hot Drops </p>
      <div id="list-container">
        <CardList list={hotDropsData} />
      </div>

      <Options/>

      <Slider/>

      <Footer/>
    </div>
  );
};

export default Home;
