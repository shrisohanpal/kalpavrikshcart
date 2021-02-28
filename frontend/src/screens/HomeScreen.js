import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Carousel, Image, Container } from 'react-bootstrap'
import { CircularProgress } from '@material-ui/core'
import Product from '../components/Product'
import Shop from '../components/Shop'
import Message from '../components/Message'
import { listProducts } from '../actions/productActions'
import { listShops } from '../actions/shopActions'

const HomeScreen = () =>
{
    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const { loading: loadingProducts, error: errorProducts, products } = productList

    const shopList = useSelector(state => state.shopList)
    const { loading: loadingShops, error: errorShops, shops } = shopList

    useEffect(() =>
    {
        dispatch(listProducts())
        dispatch(listShops)
    }, [dispatch])

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
                {loadingProducts ?
                    <CircularProgress />
                    : errorProducts ?
                        <Message variant='danger'>{errorProducts}</Message>
                        : (
                            <Row>
                                {products.map(product => (
                                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                        <Product product={product} />
                                    </Col>
                                ))}
                            </Row>
                        )
                }

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
                <h3 className='my-2'>Featured Shops</h3>
                {loadingShops ?
                    <CircularProgress />
                    : errorShops ?
                        <Message variant='danger'>{errorShops}</Message>
                        : (
                            <Row>
                                {shops.map(shop => (
                                    <Col key={shop._id} sm={12} md={6} lg={4} xl={3}>
                                        <Shop shop={shop} />
                                    </Col>
                                ))}
                            </Row>
                        )
                }
            </Container>
            <Image src={'/images/banners/cc.jpg'} fluid />
        </>
    )
}

export default HomeScreen
