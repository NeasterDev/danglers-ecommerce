import React from "react";
import diceImg from '../../images/dice_BG.jpeg';

export const About = () => {
    return (
        <div className="container mt-1 p-4">
            <div className="d-flex justify-content-center">
                <h1 className="p-4 top-border">About Danglers</h1>
            </div>
            <div className="d-flex flex-column">
                <div className="mx-1 col">
                    <p className="about-desc"> Here at Danglers we pride ourselves on making the highest quality, locally-sourced, items and 
                        trinkets to dangle from your rear-view mirror in your car. Add style and personality to
                        your car with one of our fine danglers!
                    </p>
                </div>
                <div className="mx-1 col">
                    <img src={diceImg}></img>
                </div>
            </div>
        </div>
    )
}