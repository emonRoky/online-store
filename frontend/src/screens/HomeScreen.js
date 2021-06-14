import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Container, Button } from 'react-bootstrap'
import group1 from './images/Group208.png'
import group2 from './images/Group209.png'
import group3 from './images/Group210.png'
import banner1 from './images/banner1.jpg'
import Message from '../components/Message'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import { listProducts } from '../actions/productActions'
const banner_style ={
  backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url(${banner1})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  height: '100vh',
  backgroundRepeat: 'no-repeat'
};

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <>
     <div className='banner-section' style={banner_style}>
            <Container>
                <Row>
                    <Col md={5}>
                    <div className="banner__entro">
                <h1 className='banner__text'>
                    Sale of the summer collection
                </h1>
                <div className="banner__icon">
                    <Button className='btn primary__btn'> 
                    <i class="fas fa-arrow-right"></i>
                    </Button>
                    <div className="icon__text">
                        Shop Now
                    </div>
                </div>
            </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="facilites__section">
            <Container style={{marginRight:'80px'}}>
             
            <Row>
                <Col md={4}>
                    <div className="custommer__facilitise">
                    <div className="faci__icon">
                            <img src={group1} alt="logo" />
                        </div>
                        <div className="facilitise">
                            <h3 className="service__title">
                                Free Shipping
                            </h3>
                            <p className="service__text">
                                On purchases over $199
                            </p>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="custommer__facilitise">
                        <div className="faci__icon">
                        <img src={group2} alt="logo" />
                        </div>
                        <div className="facilitise">
                            <h3 className="service__title">
                                99% Satisfied Customers
                            </h3>
                            <div className="service__text">
                                Our clients' opinions 
                                speak for themselves
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="custommer__facilitise">
                        <div className="faci__icon">
                        <img src={group3} alt="logo" />
                        </div>
                        <div className="facilitise">
                            <h3 className="service__title">
                                Originality Guaranteed
                            </h3>
                            <div className="service__text">
                                30 days warranty for each 
                                product from our store
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            </Container>
            </div>
            <Meta></Meta>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
        
        <Container>
          <h1 className='title'>Latest Products</h1>
        <Row>
          {/* <Home></Home> */}
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </Container>


        {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )}
          
         
        </>
      )}
    </>
  )
}

export default HomeScreen
