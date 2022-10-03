import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import { Link, useParams } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
const ProductsOnly = () => {
    const { Id } = useParams()
    const [onlyProduct, setProductOnly] = useState([])
    const fetchProductOnly = () => {
        axios.get(`http://fakestoreapi.com/products/${Id}`)
            .then(res => setProductOnly(res.data))
    }
    useEffect(() => {
        fetchProductOnly()
    }, [])
    return (
        <>
            <Container className="my-5 d-flex align-items-center cartContainer">

                <div className="row  w-full m-auto  my-2 border-2 border-zinc-600 p-10 rounded-tl-3xl rounded-br-3xl">
                    <div className="viowImage col-xs-9 overflow-hidden col-md-6">
                        <img src={onlyProduct.image} className="w-50 m-auto " alt={onlyProduct.title} />
                    </div>
                    <div className="ditels d-flex flex-col col-xs-9 col-md-6">
                        <h3>{onlyProduct.title}</h3>
                        <hr />
                        <p>
                            <b>Description:</b>
                            <br />
                            {onlyProduct.description}
                        </p>
                        <p className="d-flex align-items-center gap-2">
                            <h3 >
                                Price:
                            </h3>
                            <del className="text-danger fs-5">
                                {Math.ceil(onlyProduct.price * 1.6)}$
                            </del>
                            <span className="fs-4">
                                &nbsp;&nbsp;{Math.ceil(onlyProduct.price)}$
                            </span>
                        </p>
                        <p><b>ID:</b> &nbsp;
                            {onlyProduct.id}</p>
                        <Button className="w-100 rounded-lg text-white bg-slate-700">Add Cart</Button>
                    </div>
                </div>
            </Container>



            {/* <Card style={{ width: '18rem' }}>
                <div className="fathere-img d-flex">
                    <Card.Img className="w-50 m-auto " variant="top" src={onlyProduct.image} />
                </div>
                <Card.Body className="p-0 pb-2">
                    <Card.Title>{onlyProduct.title}</Card.Title>
                    <Card.Text>
                        {onlyProduct.description}
                    </Card.Text>
                    <Card.Text>
                        <span className="fs-5">price:</span> <del className="text-danger fs-6">{Math.ceil(onlyProduct.price * 1.6)}$</del> <span className="fs-5">{Math.ceil(onlyProduct.price)}$</span>
                    </Card.Text>
                    <div className="text-center father-btn">
                        <Button className="" variant="primary">Add Cart</Button>
                    </div>
                </Card.Body>
            </Card> */}
        </>
    );
}

export default ProductsOnly;