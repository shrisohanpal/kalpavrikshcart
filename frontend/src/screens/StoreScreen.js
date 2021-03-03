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

    const productList = useSelector((state) => state.productList)
    const { loadingProductList, errorProductList, products } = productList

    const productCreate = useSelector((state) => state.productCreate)
    const {
        loading: loadingProductCreate,
        error: errorProductCreate,
        success: successProductCreate,
        product: createdProduct,
    } = productCreate

    const productDelete = useSelector((state) => state.productDelete)
    const {
        loading: loadingProductDelete,
        error: errorProductDelete,
        success: successProductDelete,
    } = productDelete

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

    const deleteHandler = (id) =>
    {
        if (window.confirm('Are you sure')) {
            dispatch(deleteProduct(id))
        }
    }

    const createProductHandler = () =>
    {
        dispatch(createProduct())
    }

    return (
        <Container>
            {!userInfo || !userInfo.shop
                ? <>
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
                </>
                : <>
                    Hello
                </>
            }
            <Row className='align-items-center'>
                <Col>
                    <h1>Products</h1>
                </Col>
                <Col className='text-right'>
                    <Button className='my-3' onClick={createProductHandler}>
                        <i className='fas fa-plus'></i> Create Product
          </Button>
                </Col>
            </Row>
            {loadingProductDelete && <CircularProgress />}
            {errorProductDelete && <Message variant='danger'>{errorProductDelete}</Message>}
            {loadingProductCreate && <CircularProgress />}
            {errorProductCreate && <Message variant='danger'>{errorCreate}</Message>}
            {loadingProductList ? (
                <CircularProgress />
            ) : errorProductList ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                        <>
                            <Table striped bordered hover responsive className='table-sm'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>NAME</th>
                                        <th>PRICE</th>
                                        <th>CATEGORY</th>
                                        <th>BRAND</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((product) => (
                                        <tr key={product._id}>
                                            <td>{product._id}</td>
                                            <td>{product.name}</td>
                                            <td>₹{product.price}</td>
                                            <td>{product.category}</td>
                                            <td>{product.brand}</td>
                                            <td>
                                                <LinkContainer to={`/admin/product/${product._id}/edit`}>
                                                    <Button variant='light' className='btn-sm'>
                                                        <i className='fas fa-edit'></i>
                                                    </Button>
                                                </LinkContainer>
                                                <Button
                                                    variant='danger'
                                                    className='btn-sm'
                                                    onClick={() => deleteHandler(product._id)}
                                                >
                                                    <i className='fas fa-trash'></i>
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </>
                    )}
        </Container>
    )
}

export default StoreScreen