import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
      <div class="row footer">
        <div class="col-md-4">
          <p class="footer-text">Millions of people of all ages and from around
            the world are improving their lives with us</p>
        </div>
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-4 d-flex flex-column align-items-start">
              <h4 class="nav-title">MEN</h4>
              <div class="footer-nav">
                <ul class="d-flex flex-column"style={{padding:0}}>
                    <li>Shirt</li>
                    <li>Pant</li>
                    <li>Shoes</li>
                </ul>
              </div>
            </div>
            <div class="col-md-4 d-flex flex-column align-items-start">
              <h4 class="nav-title">WOMEN</h4>
              <div class="footer-nav">
              <ul class="d-flex flex-column"style={{padding:0}}>
                    <li>Shirt</li>
                    <li>Pant</li>
                    <li>Shoes</li>
                </ul>
              </div>
            </div>
            <div class="col-md-4 d-flex flex-column align-items-start">
              <h4 class="nav-title">KIDS</h4>
              <div class="footer-nav">
                <ul class="d-flex flex-column"style={{padding:0}}>
                    <li>Shirt</li>
                    <li>Pant</li>
                    <li>Shoes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Row>
        <Col>
          <p class="footer-copy">© 2021 OnlineStore.All rights reseverd</p>
        </Col>
      </Row>
      </Container>
    </footer>
    
  )
}

export default Footer
