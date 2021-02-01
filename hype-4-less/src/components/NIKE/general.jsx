import React, { useState, useEffect, Suspense } from "react";
import styled from "styled-components";
import axios from "axios";
import ProductCard from "../PRODUCT-CARD/index";

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
// Helper function that formats the product type for consistency
const formatType = (prodType) => {
  if (prodType == "Shoe" || prodType == "Slide") return "Unisex";
  else if (prodType == "Men") return "Men's";
  else if (prodType == "Women") return "Women's";
  else return prodType;
}

const setMainLink = (prodQuery) => {
    if (prodQuery == "all"){
        return `http://127.0.0.1:5000/shoepic/api/prod/v1.0/sales/nike/page=`
    }
    else if (prodQuery == "running"){
        return `http://127.0.0.1:5000/shoepic/api/prod/v1.0/sales/nike/running/page=`
        }
    else if (prodQuery == "lifestyle"){
        return `http://127.0.0.1:5000/shoepic/api/prod/v1.0/sales/nike/lifestyle/page=`
    }
    // else if (prodQuery == "jordan"){

    // }

}

const GeneralProdPage = (props) => {
    const [prodData, setProdData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);

    const mainLink = setMainLink(props.prodQuery);

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

        const allData = await axios(mainLink + `${page}/`);     // PRODUCTION
        //https://shoepic-backend.herokuapp.com/shoepic/api/prod/v1.0/sales/adidas/   
        //http://127.0.0.1:5000/shoepic/api/prod/v1.0/sales/adidas/                  
        
        setProdData(() => (
            [...prodData, ...Object.values(allData.data.nikeData)]
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
                        prodImg = {item["prodImg"]}
                        prodType ={formatType(item["prodType"])}
                        prodCW = {item["prodCW"] ? item["prodCW"] : "No colour available."}
                        salePrice = {item["prodReducedPrice"]}
                        oldPrice = {item["prodOriginalPrice"]}
                        prodLink = {item["prodLink"]}
                        dealType = {parseFloat(item["salePercent"].slice(0, -1)) >= 50.0 ? "hotDeal" : "default"}
                        sale = {item["salePercent"]}
                        sizes = {item["prodSizeAvailability"] ? item["prodSizeAvailability"] : []}
                        desc = {item["prodDesc"] ? item["prodDesc"] : "No description available."}
                        />
                    ))}
                </ProductsWrapper>
            </Suspense>
            {isLoading}
        </div>
    );
}

export default GeneralProdPage;