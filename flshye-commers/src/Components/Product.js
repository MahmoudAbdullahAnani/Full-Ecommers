import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
const Product = (props) => {
    const { product } = props
    const loc = `/product/${product.id}`
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <div className="fathere-img d-flex overflow-hidden">
                    <Card.Img className="w-50 m-auto " variant="top" src={product.image} />
                </div>
                <Card.Body className="p-0 pb-2">
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        {/* product.description.substr(0,60) */}
                        {product.description !== undefined && product.description.substr(0,60)}...
                    </Card.Text>
                    <Card.Text>
                        <span className="fs-5">price:</span>  <span className="fs-5">{product.price}$</span>
                    </Card.Text>
                    <div className="text-center father-btn">
                        <Button className="" variant="primary">Add Cart</Button>
                        <Link to={loc} className="ms-4 btn btn-primary" >See More</Link>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
}

export default Product;