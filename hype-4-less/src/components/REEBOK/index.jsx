import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import ProductCard from "../PRODUCT-CARD/index";

const ProductsWrapper= styled.div`
    margin-left:20px;
    margin-right:20px;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 15px;
    column-gap: 25px;
`

const ReebokProdPage = () => {
    const [prodData, setProdData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {

            setIsLoading(true);
            const allData = await axios('https://shoepic-backend.herokuapp.com/shoepic/api/prod/v1.0/sales/reebok/ ');     // PRODUCTION
            //https://shoepic-backend.herokuapp.com/shoepic/api/prod/v1.0/sales/reebok/   
            //http://127.0.0.1:5000/shoepic/api/prod/v1.0/sales/reebok/                  
            
            setProdData(Object.values(allData.data.reebokData));
            setIsLoading(false);
        };
        fetchData();
    }, []);

    
    return (
        <div>
            {isLoading ? (
                <h1>Is loading...</h1>
            ) 
            : 
            (
                <ProductsWrapper>
                    {prodData.map(item => (
                        <ProductCard prodName = {item["prodName"]}
                                     prodImg = {item["prodImg"]}
                                     prodCW = {item["prodCW"]}
                                     salePrice = {item["prodReducedPrice"]}
                                     oldPrice = {item["prodOriginalPrice"]}
                                     prodLink = {item["prodLink"]}
                                     dealType = {parseFloat(item["salePercent"].slice(0, -1)) >= 50.0 ? "hotDeal" : ""}
                                     />
                    ))}
                </ProductsWrapper>
            )}
        </div>
    );
}

export default ReebokProdPage;