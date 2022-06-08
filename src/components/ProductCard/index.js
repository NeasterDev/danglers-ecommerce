import React from "react";

export const ProductCard = ({productName, productDescription, imageSrc}) => {

    return (
        <div className="col col-sm-6 col-lg-4 col-xl-4">
            <div className="card text-white bg-dark m-4">
                <img src={imageSrc} class="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h4 className="card-title">{productName}</h4>
                    <p className="card-text">{productDescription}</p>
                    <h3>$5</h3>
                    <button className="btn btn-light">Purchase</button>
                </div>
            </div>
        </div>
    )
}