import React from "react";
import styled from "styled-components";

const OuterCardDiv = styled.div`
    border-radius:25px;
    border:2px solid #e0e0e0;
    max-width:4000px;
    margin-top:20px;
    margin-bottom:20px;

    {
        border-color:#e0e0e0;
        margin-top:20px;
        margin-bottom:20px;
        transition: border-color 0.25s, margin-top 0.25s, margin-bottom 0.25s;
    }

    :hover{
        margin-top:15px;
        margin-bottom:25px;
        border-color:#43464b;
        transition: border-color 0.25s, margin-top 0.25s, margin-bottom 0.25s; 
    }
`
const InnerCardDiv = styled.div`
    margin:10px;
`

const StyledLinkWrapper = styled.a`
    display:block;
    color:#000000;
    

    :hover{
        text-decoration: none;
        color:#000000;
    }

`

const CardProdImage = styled.img`
    max-width:100%;
    height:auto;
`

const StyledProductName = styled.h1`
    font-size:2em;
    color:#000000;
`

const StyledProductInfo = styled.p`
    &.productCW{
        font-size:1em;
        color:#656565;
    }

    &.oldPrice{
        font-size:2em;
        color:#000000;
        text-decoration: line-through;
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
                    <StyledProductInfo className="oldPrice">{props.oldPrice}</StyledProductInfo>
                </InnerCardDiv> 
            </StyledLinkWrapper>
        </OuterCardDiv>
    );
}

export default ProductCard;