import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import UserListScreen from './screens/UserListScreen'
import CategoryListScreen from './screens/CategoryListScreen'
import ShopListScreen from './screens/ShopListScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'

// import Cate from './screens/Categ'
// import ShopListScreen from './screens/ShopList'

import ProductListScreen from './screens/ProductListScreen'

import OrderListScreen from './screens/OrderListScreen'

const App = () =>
{
  return (
    <Router>
      <Header />
      <main className='py-3'>

        <Route path='/' component={HomeScreen} exact />

        <Route path='/login' component={LoginScreen} />
        <Route path='/register' component={RegisterScreen} />
        <Route path='/profile' component={ProfileScreen} />

        <Route path='/product/:id' component={ProductScreen} />
        <Route path='/cart/:id?' component={CartScreen} />


        <Route path='/admin/userlist' component={UserListScreen} />
        <Route path='/admin/categorylist' component={CategoryListScreen} />
        <Route path='/admin/shoplist' component={ShopListScreen} />
        <Route path='/admin/productlist' component={ProductListScreen} />
        <Route path='/admin/orderlist' component={OrderListScreen} />
      </main>
      <Footer />
    </Router>
  )
}

export default App
