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
import UserEditScreen from './screens/UserEditScreen'
import CategoryListScreen from './screens/CategoryListScreen'
import CategoryEditScreen from './screens/CategoryEditScreen'
import ShopListScreen from './screens/ShopListScreen'
import ShopEditScreen from './screens/ShopEditScreen'
import ProductScreen from './screens/ProductScreen'
import ProductEditScreen from './screens/ProductEditScreen'
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
        <Route path='/admin/user/:id/edit' component={UserEditScreen} />
        <Route path='/admin/categorylist' component={CategoryListScreen} />
        <Route path='/admin/category/:id/edit' component={CategoryEditScreen} />
        <Route path='/admin/shoplist' component={ShopListScreen} />
        <Route path='/admin/shop/:id/edit' component={ShopEditScreen} />
        <Route path='/admin/productlist' component={ProductListScreen} />
        <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
        <Route path='/admin/orderlist' component={OrderListScreen} />
      </main>
      <Footer />
    </Router>
  )
}

export default App
