import React, { useState, useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col, Image, Table, Card, Button, Form } from 'react-bootstrap'
import { CircularProgress } from '@material-ui/core'
import { listShops, createShop } from '../actions/shopActions'
import Message from '../components/Message'
import { listProducts, createProduct, deleteProduct } from '../actions/productActions'
import { SHOP_CREATE_RESET } from '../constants/shopConstants'

const StoreScreen = ({ history }) =>
{
    const dispatch = useDispatch()

    const shopList = useSelector((state) => state.shopList)
    const { loading, error, shops } = shopList

    const shopCreate = useSelector((state) => state.shopCreate)
    const {
        loading: loadingCreate,
        error: errorCreate,
        success: successCreate,
        shop: createdShop,
    } = shopCreate

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() =>
    {
        dispatch({ type: SHOP_CREATE_RESET })
        dispatch(listShops)
        //   if (!userInfo) {
        //      history.push('/login')
        //  }

        //  if (successCreate) {
        //      history.push(`/admin/shop/${createdShop._id}/edit`)
        //  } else {
        //      dispatch(listShops)
        //  }
    }, [
        dispatch,
        history,
        userInfo,
        // successDelete,
        successCreate,
        createdShop,
    ])

    const createShopHandler = () =>
    {
        // dispatch(createShop())
        console.log(userInfo)
    }
    return (
        <Container>
            <h2 className='text-center'>How to Sell?</h2>
            <hr /><hr />
            <Row className='text-center'>
                <Col md={4}>
                    <h3 >1. Create your Account</h3>
                    <Image src={'/images/store/createaccount.jpg'} />
                    <p>To become an Kalpavrikshcart seller,all you need is your GST & bank account info</p>
                </Col>
                <Col md={4}>
                    <h3 >2. Add your Products</h3>
                    <Image src={'/images/store/addproduct.jpg'} />
                    <p>List your Products for crores of customer and businesses to purchase</p>
                </Col>
                <Col md={4}>
                    <h3 >3. Start Selling</h3>
                    <Image src={'/images/store/startselling.jpg'} />
                    <p>PAYMENTS ARE DIRECTLY & SECYRELY DEPOSITED IN YOUR BAK ACCOUNT</p>
                </Col>
            </Row>
            <center>
                <Button type='button' onClick={createShopHandler}>Start Selling</Button>
            </center>
        </Container>
    )
}

export default StoreScreen