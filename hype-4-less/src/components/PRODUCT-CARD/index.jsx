import React from "react";
import styled from "styled-components";

const OuterCardDiv = styled.div`
    border-radius:25px;
    border:2px solid #CDCDCD;
    max-width:400px;
    margin-top:20px;

    {
        border-color:#CDCDCD;
        margin-top:20px;
        transition: border-color 0.25s, margin-top 0.25s;
    }

    :hover{
        margin-top:15px;
        border-color:#000000;
        transition: border-color 0.25s, ; 
    }
`
const InnerCardDiv = styled.div`
    margin:10px;
`

const StyledLinkWrapper = styled.a`
    display:block;
    

    :hover{
        text-decoration: none;
    }

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
            <StyledLinkWrapper href={props.prodLink}>
                <InnerCardDiv>
                    <CardProdImage src={props.prodImg}></CardProdImage>
                    <StyledProductName>{props.prodName}</StyledProductName>
                    <StyledProductInfo className="productCW">{props.prodCW}</StyledProductInfo>
                </InnerCardDiv> 
            </StyledLinkWrapper>
        </OuterCardDiv>
    );
}

export default ProductCard;