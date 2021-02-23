import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, Form, Button, FormControl, Row, Col } from 'react-bootstrap'
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';

const Header = () =>
{
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const [drawerOpen, setDrawerOpen] = useState(false);
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
                        <text style={{ fontWeight: 'bold', fontSize: 20 }}>All Categories</text>
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Electronics" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Grocery" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Furnitures" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="E-Service" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Electronics" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Building Material" />
                    </ListItem>
                </List>
            </Drawer>
        </header>
    )
}

export default Header;


/*
export default function TemporaryDrawer()
{
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Button onClick={() => { setOpen(true) }}>left</Button>
            <Drawer anchor='left' open={open} onClose={() => { setOpen(false) }}>
                samaan
            </Drawer>
        </div>
    );
}
*/