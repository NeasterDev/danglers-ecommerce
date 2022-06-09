import React from "react";
import diceImg from '../../images/dice_BG.jpeg';

export const About = () => {
    return (
        <div id="about" className="container mt-1 p-4">
            <div className="d-flex justify-content-center">
                <h1 className="p-4 top-border">About Danglers</h1>
            </div>
            <div className="d-flex flex-column">
                <div className="mx-1 col">
                    <p className="about-desc"> Here at Danglers we pride ourselves on making the highest quality, locally-sourced, items and 
                        trinkets to dangle from your rear-view mirror in your car. That's why we have been selling danglers since 
                        the first set of fuzzy dice was created, in 1952. So what are you waiting for? Add style and personality to
                        your car today with one of our fine danglers!
                    </p>
                </div>
                <div className="mx-1 col">
                    <img className="max-w-100" src={diceImg}></img>
                </div>
            </div>
        </div>
    )
}