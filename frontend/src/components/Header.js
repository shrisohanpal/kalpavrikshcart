import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, Form, Button, FormControl, Row, Col } from 'react-bootstrap'
import { Divider, Drawer, List, ListItem, ListItemText } from '@material-ui/core';

import { listCategorys } from '../actions/categoryActions'

const Header = () =>
{
    const dispatch = useDispatch()
    const categoryList = useSelector((state) => state.categoryList)
    const { loading, error, categorys } = categoryList
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const [drawerOpen, setDrawerOpen] = useState(false);

    useEffect(() =>
    {
        dispatch(listCategorys())
    }, [dispatch])

    return (
        <header>
            <Container>
                <Navbar expand="lg">
                    <Nav className="m-auto">
                        <LinkContainer to='/'>
                            <Navbar.Brand>Kalpavarikshcart</Navbar.Brand>
                        </LinkContainer>
                    </Nav>
                </Navbar>
                <Row>
                    <Col md={9} className='my-2'>
                        <Form inline>
                            <Button className='mx-3' onClick={() => { setDrawerOpen(true) }}>
                                <i className='fas fa-bars' />
                            </Button>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{ width: window.innerWidth > 768 ? '80%' : '55%' }} />
                            <Button>Search</Button>
                        </Form>
                    </Col>
                    <Col md={3} className='my-2' style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <LinkContainer to='/location'>
                            <Nav.Link>
                                <i className='fas fa-map-marker-alt' style={{ fontSize: 30 }}></i>
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={userInfo ? '/profile' : '/login'}>
                            <Nav.Link>
                                <i className='fas fa-user' style={{ fontSize: 30 }}></i>
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/cart'>
                            <Nav.Link>
                                <i className='fas fa-cart-plus' style={{ fontSize: 30 }}></i>
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/store'>
                            <Nav.Link>
                                <i className='fas fa-store-alt' style={{ fontSize: 30 }}></i>
                            </Nav.Link>
                        </LinkContainer>
                    </Col>
                </Row>
            </Container>
            <Drawer anchor='left' open={drawerOpen} onClose={() => { setDrawerOpen(false) }}>
                <List style={{ width: 250 }}>
                    <ListItem>
                        <ListItemText primary={<div style={{ fontWeight: 'bold', fontSize: 20 }}>Kalpavrikshcart</div>} />
                        <Button className='ml-auto' onClick={() => setDrawerOpen(false)}><i className='fas fa-times' /></Button>
                    </ListItem>
                    <Divider />
                    <ListItem />
                    {
                        userInfo && userInfo.isAdmin && (
                            <>
                                <ListItem>
                                    <ListItemText primary={<div style={{ fontWeight: 'bold', fontSize: 20 }}>Admin Options</div>} />
                                </ListItem>
                                <ListItem button>
                                    <LinkContainer to='/admin/userlist'>
                                        <ListItemText primary="Users List" />
                                    </LinkContainer>
                                </ListItem>
                                <ListItem button>
                                    <LinkContainer to='/admin/categorylist'>
                                        <ListItemText primary="Categories" />
                                    </LinkContainer>
                                </ListItem>
                                <ListItem button>
                                    <LinkContainer to='/admin/shoplist'>
                                        <ListItemText primary="Shops" />
                                    </LinkContainer>
                                </ListItem>
                                <ListItem button>
                                    <LinkContainer to='/admin/productlist'>
                                        <ListItemText primary="Products" />
                                    </LinkContainer>
                                </ListItem>
                                <ListItem button>
                                    <LinkContainer to='/admin/orderlist'>
                                        <ListItemText primary="Orders" />
                                    </LinkContainer>
                                </ListItem>
                                <Divider />
                                <ListItem />
                            </>
                        )
                    }
                    {!loading && !error && (
                        <>
                            <ListItem>
                                <ListItemText primary={<div style={{ fontWeight: 'bold', fontSize: 20 }}>All Categories</div>} />
                            </ListItem>
                            {categorys.map((category) => (
                                <ListItem button key={category._id}>
                                    <ListItemText primary={category.name} />
                                </ListItem>
                            ))}
                        </>
                    )}
                </List>
            </Drawer>
        </header >
    )
}

export default Header;
