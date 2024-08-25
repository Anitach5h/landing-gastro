import React from "react";
import Navbar from "../common/navbar/Navbar";
import Footer from "../common/footer/Footer";
import Welcome from "../components/welcome/Welcome";

export const Home = () => {
    return(
        <div>
        <Navbar />
        <Welcome />
        <Footer />
        </div>
    )
}