import React from "react";
import { ProductCard } from "../../components/ProductCard";
import genericProduct from '../../images/Dice_.jpeg';
export const Store = () => {
    return (
        <div className="container">
            <div className="d-flex flex-container">
                <ProductCard productName="Fuzzy Dice" productDescription="This product is so good" imageSrc={genericProduct}></ProductCard>
                <ProductCard productName="Fuzzy Dice" productDescription="This product is so good" imageSrc={genericProduct}></ProductCard>
                <ProductCard productName="Fuzzy Dice" productDescription="This product is so good" imageSrc={genericProduct}></ProductCard>
                <ProductCard productName="Fuzzy Dice" productDescription="This product is so good" imageSrc={genericProduct}></ProductCard>
            </div>
            <div className="d-flex flex-container">
                <ProductCard productName="Fuzzy Dice" productDescription="This product is so good" imageSrc={genericProduct}></ProductCard>
                <ProductCard productName="Fuzzy Dice" productDescription="This product is so good" imageSrc={genericProduct}></ProductCard>
                <ProductCard productName="Fuzzy Dice" productDescription="This product is so good" imageSrc={genericProduct}></ProductCard>
                <ProductCard productName="Fuzzy Dice" productDescription="This product is so good" imageSrc={genericProduct}></ProductCard>
            </div>
            <div className="d-flex flex-container">
                <ProductCard productName="Fuzzy Dice" productDescription="This product is so good" imageSrc={genericProduct}></ProductCard>
                <ProductCard productName="Fuzzy Dice" productDescription="This product is so good" imageSrc={genericProduct}></ProductCard>
                <ProductCard productName="Fuzzy Dice" productDescription="This product is so good" imageSrc={genericProduct}></ProductCard>
                <ProductCard productName="Fuzzy Dice" productDescription="This product is so good" imageSrc={genericProduct}></ProductCard>
            </div>
        </div>
    )
}