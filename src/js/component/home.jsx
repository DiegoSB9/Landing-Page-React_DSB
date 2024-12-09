import React from "react";
import NavBar from "../../js/NavBar";
import Jumbotron from "../../js/Jumbotron";
import CardSection from "../../js/CardSection";
import Footer from "../../js/Footer";

// Crear tu componente Home
const Home = () => {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div>
                <Jumbotron />
            </div>
            <div>
                <CardSection />
            </div>
            <div>
                <Footer />
            </div>
        </div>
        
    );
};

export default Home;