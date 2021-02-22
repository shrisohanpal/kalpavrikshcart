import React, { useState, useEffect } from 'react'
import { Row, Col, Carousel, Image, Container } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

const HomeScreen = () =>
{
    const [products, setProducts] = useState([])

    useEffect(() =>
    {
        const fetchProducts = async () =>
        {
            const { data } = await axios.get('/api/products')
            setProducts(data)
        }
        fetchProducts()
    }, [])

    return (
        <>
            <Carousel pause='hover'>
                <Carousel.Item>
                    <Image style={{ minHeight: 150 }} src={'/images/banners/a.jpg'} fluid />
                </Carousel.Item>
                <Carousel.Item>
                    <Image style={{ minHeight: 150 }} src={'/images/banners/b.jpg'} fluid />
                </Carousel.Item>
                <Carousel.Item>
                    <Image style={{ minHeight: 150 }} src={'/images/banners/c.jpg'} fluid />
                </Carousel.Item>
                <Carousel.Item>
                    <Image style={{ minHeight: 150 }} src={'/images/banners/d.jpg'} fluid />
                </Carousel.Item>
            </Carousel>
            <Container>
                <h3 className='my-2'>Featured Products</h3>
                <Row>
                    {products.map(product => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>
                    ))}
                </Row>
                <Row>
                    <Col sm={12} md={4} className='p-2'>
                        <Image src={'/images/banners/ba.jpg'} fluid />
                    </Col>
                    <Col sm={12} md={4} className='p-2'>
                        <Image src={'/images/banners/bb.jpg'} fluid />
                    </Col>
                    <Col sm={12} md={4} className='p-2'>
                        <Image src={'/images/banners/bc.jpg'} fluid />
                    </Col>
                </Row>
                <h3 className='my-2'>New Products</h3>
                <Row>
                    {products.map(product => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>
                    ))}
                </Row>
            </Container>
            <Image src={'/images/banners/cc.jpg'} fluid />
        </>
    )
}

export default HomeScreen
