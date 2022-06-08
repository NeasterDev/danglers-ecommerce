import React from "react";

export const ProductCard = ({productName, productDescription, imageSrc}) => {

    return (
        <div className="card text-white bg-dark w-25 m-4">
            <img src={imageSrc} class="card-img-top" alt="..."></img>
            <div className="card-body">
                <h4 className="card-title">{productName}</h4>
                <p className="card-text">{productDescription}</p>
                <h3>$5</h3>
                <button className="btn btn-light">Purchase</button>
            </div>
        </div>
    )
}