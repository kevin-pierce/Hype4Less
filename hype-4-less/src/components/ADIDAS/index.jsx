import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const AdidasProdPage = () => {
    const [prodData, setProdData] = useState({ products: []});

    useEffect(() => {
        const fetchData = async () => {
            const allData = await axios('http://127.0.0.1:5000/shoepic/api/prod/v1.0/sales/tiro/');
            
            console.log(allData.data.adidasData)
            setProdData(allData.data.adidasData);
        };
        fetchData();
    }, []);

    console.log(prodData);
    return (
        <div>
            <ul>
                {prodData.map(item => (
                    <li key={item["prodName"]}>
                        <a href={item["prodLink"]}>{item["prodName"]}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AdidasProdPage;

            