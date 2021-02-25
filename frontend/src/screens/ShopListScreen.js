import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col, Container } from 'react-bootstrap'
import { EditOutlined, DeleteForever } from '@material-ui/icons'
import { CircularProgress } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import
{
    listShops,
    deleteShop
} from '../actions/shopActions'
import { SHOP_CREATE_RESET } from '../constants/shopConstants'

const ShopListScreen = ({ history, match }) =>
{
    const dispatch = useDispatch()

    const shopList = useSelector((state) => state.shopList)
    const { loading, error, shops } = shopList

    const shopDelete = useSelector((state) => state.shopDelete)
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = shopDelete

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() =>
    {
        dispatch({ type: SHOP_CREATE_RESET })

        if (!userInfo || !userInfo.isAdmin) {
            history.push('/login')
        }
        dispatch(listShops)
    }, [
        dispatch,
        history,
        userInfo,
        successDelete,
    ])

    const deleteHandler = (id) =>
    {
        if (window.confirm('Are you sure')) {
            dispatch(deleteShop(id))
        }
    }

    return (
        <Container className="py-3">
            <Row className='align-items-center'>
                <Col>
                    <h1>Available Shops</h1>
                </Col>
            </Row>
            {loadingDelete && <CircularProgress />}
            {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
            {loading ? (
                <CircularProgress />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                        <>
                            <Table striped bordered hover responsive className='table-sm'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>NAME</th>
                                        <th>Created At</th>
                                        <th>EDIT</th>
                                        <th>REMOVE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {shops.map((shop) => (
                                        <tr key={shop._id}>
                                            <td>{shop._id}</td>
                                            <td>{shop.name}</td>
                                            <td>{shop.createdAt.replace('T', ' / ')}</td>
                                            <td>
                                                <LinkContainer to={`/admin/shop/${shop._id}`}>
                                                    <Button variant='primary' className='btn-sm'>
                                                        <EditOutlined />
                                                    </Button>
                                                </LinkContainer>
                                            </td>
                                            <td>
                                                <Button
                                                    variant='danger'
                                                    className='btn-sm'
                                                    onClick={() => deleteHandler(shop._id)}
                                                >
                                                    <DeleteForever />
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

export default ShopListScreen