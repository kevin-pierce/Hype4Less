import React from "react";
import styled from "styled-components";

const OuterCardDiv = styled.div`
    border-radius:25px;
    border:2px solid #e0e0e0;
    max-width:400px;
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

    @keyframes rotate {
        100% {
            transform: rotate(1turn);
        }
    }

    &.rainbow {
        position: relative;
        z-index: 0;
        max-width: 400px;
        border-radius: 10px;
        overflow: hidden;
        padding: 2rem;
        
        &::before {
            content: '';
            position: absolute;
            z-index: -2;
            left: -50%;
            top: -50%;
            width: 200%;
            height: 200%;
            background-color: #399953;
            background-repeat: no-repeat;
            background-size: 50% 50%, 50% 50%;
            background-position: 0 0, 100% 0, 100% 100%, 0 100%;
            background-image: linear-gradient(#399953, #399953), linear-gradient(#fbb300, #fbb300), linear-gradient(#d53e33, #d53e33), linear-gradient(#377af5, #377af5);
            animation: rotate 4s linear infinite;
        }
        
        &::after {
            content: '';
            position: absolute;
            z-index: -1;
            left: 6px;
            top: 6px;
            width: calc(100% - 12px);
            height: calc(100% - 12px);
            background: white;
            border-radius: 5px;
        }
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
        font-size:1.5em;
        color:#000000;
        text-decoration: line-through;
    }

    &.newPrice{
        font-size: 2em;
        color:#FF0000;
    }
`

const ProductCard = (props) => {
    return (
        <OuterCardDiv className="rainbow">
            <StyledLinkWrapper href={props.prodLink}>
                <InnerCardDiv>
                    <CardProdImage src={props.prodImg}></CardProdImage>
                    <StyledProductName>{props.prodName}</StyledProductName>
                    <StyledProductInfo className="productCW">{props.prodCW}</StyledProductInfo>
                    <StyledProductInfo className="oldPrice">{props.oldPrice}</StyledProductInfo>
                    <StyledProductInfo className="newPrice">{props.salePrice}</StyledProductInfo>
                </InnerCardDiv> 
            </StyledLinkWrapper>
        </OuterCardDiv>
    );
}

export default ProductCard;