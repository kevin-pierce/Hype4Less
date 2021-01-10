import React, { useState, useEffect, Suspense } from "react";
import styled from "styled-components";
import axios from "axios";

const ProductCard = React.lazy(() => import("../PRODUCT-CARD/index"));

const StyledLoader = styled.div`
&.loader,
&.loader:after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}
&.loader {
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(93,76,76, 0.2);
  border-right: 1.1em solid rgba(93,76,76, 0.2);
  border-bottom: 1.1em solid rgba(93,76,76, 0.2);
  border-left: 1.1em solid #5d4c4c;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`



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
    const [page, setPage] = useState(1);

    useEffect(() => {
        getData()
        window.addEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = () => {
		if (Math.ceil(window.innerHeight + document.documentElement.scrollTop) !== document.documentElement.offsetHeight ||isLoading)
			return;
		setIsLoading(true);
		console.log(isLoading);
	};
    
    const getData = async () => {

        const allData = await axios(`https://shoepic-backend.herokuapp.com/shoepic/api/prod/v1.0/sales/reebok/page=${page}/ `);     // PRODUCTION
        //https://shoepic-backend.herokuapp.com/shoepic/api/prod/v1.0/sales/reebok/   
        //http://127.0.0.1:5000/shoepic/api/prod/v1.0/sales/reebok/                  
        
        setProdData(() => (
            [...prodData, ...Object.values(allData.data.reebokData)]
        ));
        setPage(page + 1)
    };

    useEffect(() => {
		if (!isLoading) {
            return;
        } 
		getMoreData();
	}, [isLoading]);

	const getMoreData = () => {
		getData();
		setIsLoading(false);
	};
    
    return (
        <div>
            <Suspense fallback={<StyledLoader className="loader">Loading...</StyledLoader>}>
                <ProductsWrapper>
                    {prodData.map(item => (
                        <ProductCard 
                        key={item["_id"]}
                        prodName = {item["prodName"]}
                        prodType ={item["prodType"]}
                        prodImg = {item["prodImg"]}
                        prodCW = {item["prodCW"]}
                        salePrice = {item["prodReducedPrice"]}
                        oldPrice = {item["prodOriginalPrice"]}
                        prodLink = {item["prodLink"]}
                        dealType = {parseFloat(item["salePercent"].slice(0, -1)) >= 50.0 ? "hotDeal" : "default"}
                        sale = {item["salePercent"]}
                        sizes = {item["prodSizeAvailability"]}
                        desc = {item["prodDesc"]}
                        />
                    ))}
                </ProductsWrapper>
            </Suspense>
            {isLoading}
        </div>
    );
}

export default ReebokProdPage;

// && <StyledLoader className="loader">Loading...</StyledLoader>