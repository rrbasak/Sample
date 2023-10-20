import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../../Styles/Auction.css';
import axios from 'axios';

function Auction() {
    const [products, setProducts] = useState([]);
    const [cProduct, setCProduct] = useState([]);
    const [pProduct, setPProduct] = useState([]);
    const [uProduct, setUProduct] = useState([]);

    const {category} = useParams();

    useEffect(() => {
        // const interval = setInterval(() => {
            axios.get("http://localhost:8080/auction/readAll").then (
                    (res) => {
                        let filterProduct = null;
                        
                        if(category === undefined || category === 'All')
                            filterProduct = res.data;
                        else {
                            filterProduct = res.data.filter((product) => 
                                product.category === category
                            );
                            console.log("filter Products: ", filterProduct);
                        }

                        setProducts(filterProduct);
                    }
                )
                .catch(err=>{
                    console.log(err);
                });
        // }, 500);

        // return () => {
        //     clearInterval(interval);
        // };
    }, [category]);

    useEffect(() => {
        setDataForCProduct();
        setDataForPProduct();
        setDataForUProduct();
    }, [products]);

    function setDataForCProduct() {
        const currentProduct = products.filter(
            (product) => (product.is_active === 1 && product.is_paused === 0)
        );
        setCProduct(currentProduct);
    }
    function setDataForPProduct() {
        const currentProduct = products.filter(
            (product) => (product.is_closed === 1)
        );
        setPProduct(currentProduct);
    }

    function setDataForUProduct() {
        const currentProduct = products.filter(
            (product) => ((product.is_active === 1 && product.is_paused === 1) || (product.is_active === 0 && product.is_closed === 0 && product.is_paused === 0))
        );
        setUProduct(currentProduct);
    }

    return (
        <div style={{marginTop: '20px'}}>
            <div className='status'>
                <h1>
                    LIVE
                </h1>
            </div>
            <div className='auction-container live'>
                {
                    cProduct.map((itr) => (
                        <div key={itr.id} className="card text-bg-dark box" style={{ width: "18rem", boxShadow: "0 0 10px 5px rgb(74, 172, 252)"}}>
                            <img src={`http://localhost:8080/auction/image/${itr.id}`} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Product Name: {itr.name}</h5>
                                <strong>Product Catagory: {itr.category}</strong>
                                <p className="card-text">Product details: {itr.dtl}</p>
                                <p>
                                    <strong>Starting Bid: {itr.price}</strong>
                                </p>
                                <Link className="btn btn-danger" href="#" role="button"
                                    to={`/bidding/${itr.id}`}
                                    state={{pDetails: itr}}
                                >
                                    Bid
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='status'>
                <h1>
                    UPCOMING
                </h1>
            </div>
            <div className='auction-container upcoming'>
                {
                    uProduct.map((itr) => (
                        <div key={itr.id} className="card text-bg-dark box" style={{ width: "18rem", boxShadow: "0 0 10px 5px rgb(74, 172, 252)"}}>
                            <img src={`http://localhost:8080/auction/image/${itr.id}`} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Product Name: {itr.name}</h5>
                                <strong>Product Catagory: {itr.category}</strong>
                                <p className="card-text">Product details: {itr.dtl}</p>
                                <p>
                                    <strong>Starting Bid: {itr.price}</strong>
                                </p>
                                <p>
                                    <strong>Starting Bid: {new Date(itr.auction_start).toString()}</strong>
                                </p>
                                <Link className="btn btn-warning disabled" role="button" aria-disabled="true">
                                    Bid
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='status'>
                <h1>
                    PREVIOUS
                </h1>
            </div>
            <div className='auction-container previous'>
                {
                    pProduct.map((itr) => (
                        <div key={itr.id} className="card text-bg-dark box" style={{ width: "18rem", boxShadow: "0 0 10px 5px rgb(74, 172, 252)"}}>
                            <img src={`http://localhost:8080/auction/image/${itr.id}`} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Product Name: {itr.name}</h5>
                                <strong>Product Catagory: {itr.category}</strong>
                                <p className="card-text">Product details: {itr.dtl}</p>
                                <p>
                                    <strong>Starting Bid: {itr.price}</strong>
                                </p>
                                <Link className="btn btn-primary" role="button" 
                                    to={`/details/${itr.id}`}
                                    state={{pDetails: itr}}
                                >
                                    Details
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Auction;
