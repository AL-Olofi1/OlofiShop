import React from 'react'
import { useParams } from 'react-router-dom'

import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap'
import Rating from './Rating'
import { products } from './productsList.js'

function ProductScreen() {
    const { id } = useParams();
    return (
    <div>Product {id} 
    
    <Row>
        <Col md={6}>
            <Image src={products[0].image} alt={products[0].name} fluid />
        </Col>
        <Col md={3}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h3>{products[0].name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Rating value={products[0].rating} text={`${products[0].numReviews} reviews`} />
                </ListGroup.Item>
                <ListGroup.Item>
                    Price: ${products[0].price}
                </ListGroup.Item>
                <ListGroup.Item>
                    Description: {products[0].description}
                </ListGroup.Item>
            </ListGroup>
        </Col>
        <Col md={3}>
            <Card>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <Row>
                            <Col>

                                Price:
                            </Col>
                            <Col>
                                <strong>${products[0].price}</strong>
                            </Col>
                            </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>


                                Status:
                            </Col>
                            <Col>
                                {products[0].countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                            </Col>

                            </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button className='btn-block' type='button' disabled={products[0].countInStock === 0}>
                            Add to Cart
                        </Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
        
                            

     </Row>

    
    </div>);
  }
  
  export default ProductScreen;
