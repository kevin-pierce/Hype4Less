import React from "react";
import styled from "styled-components";

const OuterCardDiv = styled.div`
    position:relative;
    border-radius:25px;
    border:2px solid #e0e0e0;
    max-width:400px;
    margin-top:20px;
    margin-bottom:20px;
    padding:1rem;

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

    &.hotDeal {
        z-index: 0;
        max-width: 400px;
        border-radius: 10px;
        overflow: hidden;
        
        &::before {
            content: '';
            position: absolute;
            background-color:#FFF;
            z-index: -2;
            left: -50%;
            top: -50%;
            width: 200%;
            height: 200%;
            background-repeat: no-repeat;
            background-size: 50% 50%, 50% 50%;
            background-position: 0 0, 100% 0, 100% 100%, 0 100%;
            background-image: linear-gradient(#DA1F05, #F33C04), linear-gradient(#F33C04, #FE650D), linear-gradient(#FE650D, #FFC11F), linear-gradient(#DA1F05, #FFC11F);
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
        margin-left:10px;
        font-size: 2em;
        color:#FF0000;
    }

    &.salePercent{
        position:absolute;
        left:65%;
        font-size:1.2em;
        font-weight:700;
        color:#FF0000;
    }
`

const StyledProductInfoWrapper = styled.div`
    display:flex;
    justify-content: flex-start;
    align-items:baseline;
`

const ProductCard = (props) => {
    return (
        <OuterCardDiv className={props.dealType}>
            <StyledLinkWrapper href={props.prodLink}>
                <InnerCardDiv>
                    <StyledProductInfo className="salePercent">{props.sale} OFF</StyledProductInfo>
                    <CardProdImage src={props.prodImg}></CardProdImage>
                    <StyledProductName>{props.prodName}</StyledProductName>
                    <StyledProductInfo className="productCW">{props.prodCW}</StyledProductInfo>
                    <StyledProductInfoWrapper>
                        <StyledProductInfo className="oldPrice">{props.oldPrice}</StyledProductInfo>
                        <StyledProductInfo className="newPrice">{props.salePrice}</StyledProductInfo>
                    </StyledProductInfoWrapper>
                </InnerCardDiv> 
            </StyledLinkWrapper>
        </OuterCardDiv>
    );
}

export default ProductCard;