import React from "react";
import { Footer } from "../../components/Footer";
import { Hero } from "../../components/Hero";
import { About } from "../../components/About";

export const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <div className="container">
                <About></About>
                <Footer></Footer>
            </div>
        </div>
    )
}