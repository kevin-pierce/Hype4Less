import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const AdidasProdPage = () => {
    const [prodData, setProdData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {

            setIsLoading(true);
            const allData = await axios('http://127.0.0.1:5000/shoepic/api/prod/v1.0/sales/tiro/');
            
            setProdData(Object.values(allData.data.adidasData));
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
                <ul>
                    {prodData.map(item => (
                        <li>
                            <a href={item["prodLink"]}>{item["prodName"]}</a>
                        </li>
                    ))}
                </ul> 
            )}
        </div>
    );
}

export default AdidasProdPage;

                