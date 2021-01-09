import React from "react";
import styled from "styled-components";

const OuterCardDiv = styled.div`
    border-radius:25px;
    border:2px solid #000000;
    max-width:400px;
`
const InnerCardDiv = styled.div`
    margin:10px;
`

const CardProdImage = styled.img`
    max-width:100%;
    height:auto;
`

const StyledProductName = styled.h1`
    font-size:1.5em
`

const StyledProductInfo = styled.p`
    &.productCW{
        font-size:0.75em;
        color:#ff0000;
    }

`

const ProductCard = (props) => {
    return (
        <OuterCardDiv>
            <InnerCardDiv>
                <CardProdImage src={props.prodImg}></CardProdImage>
                <StyledProductName>{props.prodName}</StyledProductName>
                <StyledProductInfo className="productCW">{props.prodCW}</StyledProductInfo>
            </InnerCardDiv>
        </OuterCardDiv>
    );
}

export default ProductCard;