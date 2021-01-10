import React, { useState } from "react";
import styled from "styled-components";
import { Modal, Button } from "react-bootstrap";

const OuterCardDiv = styled.div`
    position:relative;
    border-radius:10px;
    border:2px solid transparent;
    max-width:400px;
    margin-top:20px;
    margin-bottom:20px;
    padding:1rem;

    &.default{
        border-color:#e0e0e0;
        margin-top:20px;
        margin-bottom:20px;
        transition: border-color 0.25s ease, margin-top 0.25s ease, margin-bottom 0.25s ease;
    

        :hover{
            cursor:pointer;
            margin-top:15px;
            margin-bottom:25px;
            border-color:#43464b;
            transition: border-color 0.25s ease, margin-top 0.25s ease, margin-bottom 0.25s ease; 
        }
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
        
        margin-top:20px;
        margin-bottom:20px;
        transition: margin-top 0.25s ease, margin-bottom 0.25s ease;

        :hover{
            cursor:pointer;
            margin-top:15px;
            margin-bottom:25px;
            transition: margin-top 0.25s ease, margin-bottom 0.25s ease; 
        }

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
    margin-top:10px;
    font-size:2em;
    color:#000000;
`

const StyledProductInfo = styled.p`
    &.productCW{
        font-size:1em;
        color:#656565;
        margin: 0;
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
        position:relative;
        left:65%;
        font-size:1.2em;
        font-weight:700;
        color:#FF0000;
    }

    &.productType{
        font-size:1em;
        color:#656565;
        margin: 0;
    }
`

const StyledProductInfoWrapper = styled.div`
    display:flex;
    justify-content: flex-start;
    align-items:baseline;
`

const ProductCard = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <OuterCardDiv className={props.dealType} onClick={handleShow}>
                    <InnerCardDiv>
                        <StyledProductInfo className="salePercent">{props.sale} OFF</StyledProductInfo>
                        <CardProdImage src={props.prodImg}></CardProdImage>
                        <StyledProductName>{props.prodName}</StyledProductName>
                        <StyledProductInfo className="productType">{props.prodType}</StyledProductInfo>
                        <StyledProductInfo className="productCW">{props.prodCW}</StyledProductInfo>
                        <StyledProductInfoWrapper>
                            <StyledProductInfo className="oldPrice">{props.oldPrice}</StyledProductInfo>
                            <StyledProductInfo className="newPrice">{props.salePrice}</StyledProductInfo>
                        </StyledProductInfoWrapper>
                    </InnerCardDiv> 
            </OuterCardDiv>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                <Modal.Title>{props.prodName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="danger" onClick={handleClose}>
                    Purchase
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default ProductCard;

// <StyledLinkWrapper href={props.prodLink}>
//style={{"backgroundColor":"#e06666ff", "color":"#FFF", "borderColor":"#e06666ff"}}