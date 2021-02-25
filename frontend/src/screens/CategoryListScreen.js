import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//import { LinkContainer } from 'react-router-bootstrap'
import { Container, Table, Button, Row, Col, Form } from 'react-bootstrap'
import { CircularProgress } from '@material-ui/core'
import
{
    listCategorys,
    createCategory,
    deleteCategory,
    updateCategory
} from '../actions/categoryActions'
import Message from '../components/Message'

const CategoryListScreen = () =>
{
    const dispatch = useDispatch()
    const categoryList = useSelector((state) => state.categoryList)
    const { loading, error, categorys } = categoryList

    const [updatedName, setUpdatedName] = useState('')

    useEffect(() =>
    {
        dispatch(listCategorys())
    }, [dispatch])

    const createCategoryHandler = () =>
    {
        dispatch(createCategory())
        dispatch(listCategorys())

    }

    const updateHandler = (id) =>
    {
        dispatch(updateCategory(id, updatedName))
        dispatch(listCategorys())
    }

    const deleteHandler = (id) =>
    {
        dispatch(deleteCategory(id))
        dispatch(listCategorys())
    }

    return (
        <Container>
            <Row className='align-items-center'>
                <Col>
                    <h1>Categorys</h1>
                </Col>
                <Col className='text-right'>
                    <Button className='my-3' onClick={createCategoryHandler}>
                        <i className='fas fa-plus'></i> Create Category
          </Button>
                </Col>
            </Row>
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
                                        <th>{<input onChange={(e) => setUpdatedName(e.target.value)} />}</th>
                                        <th>DELETE</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categorys.map((category) => (
                                        <tr key={category._id}>
                                            <td>{category._id}</td>
                                            <td>{category.name}</td>
                                            <td>
                                                <Button
                                                    variant='danger'
                                                    className='btn-sm'
                                                    onClick={() => updateHandler(category._id)}>
                                                    Update
                                                </Button>
                                            </td>
                                            <td>
                                                <Button
                                                    variant='danger'
                                                    className='btn-sm'
                                                    onClick={() => deleteHandler(category._id)}
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

export default CategoryListScreen