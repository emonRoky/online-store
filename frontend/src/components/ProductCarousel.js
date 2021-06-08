import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, Carousel, Col, Container, Image, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'
import Rating from './Rating'

const ProductCarousel = () => {
  const dispatch = useDispatch()

  const productTopRated = useSelector((state) => state.productTopRated)
  const { loading, error, products } = productTopRated

  useEffect(() => {
    dispatch(listTopProducts())
  }, [dispatch])

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <Container>
      <h1 className="title">Top Rated Product</h1>
     <Row>
       <Col md={12} style={{display:"flex",justifyContent:"center"}}>
      <Carousel pause='hover' style={{backgroundColor:"white"}}>
      {products.map((product) => (
        <Carousel.Item key={product._id}>
        <Card className='my-3 p-3 rounded borderbox'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>

      <Card.Body >
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
        </Carousel.Item>
      ))}
    </Carousel>
       </Col>
     </Row>
    </Container>
  )
}

export default ProductCarousel
