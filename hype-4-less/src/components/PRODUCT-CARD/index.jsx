import React from "react";
import styled from "styled-components";

const OuterCardDiv = styled.div`
    border-radius:25px;
    border:2px solid #000000;
`
const InnerCardDiv = styled.div`
    margin:10px;
`

const CardProdImage = styled.img`
    max-width:20%;
    height:auto;
`

const ProductCard = (props) => {
    return (
        <OuterCardDiv>
            <InnerCardDiv>
                <p>{props.prodName}</p>
                <CardProdImage src={props.prodImg}></CardProdImage>
            </InnerCardDiv>
        </OuterCardDiv>
    );
}

export default ProductCard;