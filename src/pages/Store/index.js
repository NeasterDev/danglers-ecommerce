import React from "react";
import { ProductCard } from "../../components/ProductCard";
import genericProduct from '../../images/Dice_.jpeg';
export const Store = () => {
    const productDescription = "This product is very good and I think you should buy it"

    // remember productcard has to be in container > row, col-definitions on productcard
    return (
        <div className="container">
            <div className="row">
                <ProductCard productName="Fuzzy Dice" productDescription={productDescription} imageSrc={genericProduct} />
                <ProductCard productName="Fuzzy Dice" productDescription={productDescription} imageSrc={genericProduct} />
                <ProductCard productName="Fuzzy Dice" productDescription={productDescription} imageSrc={genericProduct} />
                <ProductCard productName="Fuzzy Dice" productDescription={productDescription} imageSrc={genericProduct} />
                <ProductCard productName="Fuzzy Dice" productDescription={productDescription} imageSrc={genericProduct} />
            </div>
        </div>
    )
}