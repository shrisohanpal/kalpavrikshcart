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
import StoreScreen from './screens/StoreScreen'
import ShopListScreen from './screens/ShopListScreen'
import ShopScreen from './screens/ShopScreen'
import ShopEditScreen from './screens/ShopEditScreen'
import ProductScreen from './screens/ProductScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import CartScreen from './screens/CartScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'

// import Cate from './screens/Categ'
// import ShopListScreen from './screens/ShopList'

import ProductListScreen from './screens/ProductListScreen'
import OrderListScreen from './screens/OrderListScreen'

import VendorsProductListScreen from './screens/VendorsProductListScreen'
import VendorsShopScreen from './screens/VendorsShopScreen'
import VendorsOrderListScreen from './screens/VendorsOrderListScreen'

const App = () =>
{
  return (
    <Router>
      <Header />
      <main className='py-0'>

        <Route path='/' component={HomeScreen} exact />

        <Route path='/login' component={LoginScreen} />
        <Route path='/register' component={RegisterScreen} />
        <Route path='/profile' component={ProfileScreen} />

        <Route path='/store' component={StoreScreen} />
        <Route path='/shopscreen/:id' component={ShopScreen} />
        <Route path='/product/:id' component={ProductScreen} />
        <Route path='/cart/:id?' component={CartScreen} />
        <Route path='/shipping' component={ShippingScreen} />
        <Route path='/payment' component={PaymentScreen} />
        <Route path='/placeorder' component={PlaceOrderScreen} />
        <Route path='/order/:id' component={OrderScreen} />

        <Route path='/admin/userlist' component={UserListScreen} />
        <Route path='/admin/user/:id/edit' component={UserEditScreen} />
        <Route path='/admin/categorylist' component={CategoryListScreen} />
        <Route path='/admin/category/:id/edit' component={CategoryEditScreen} />
        <Route path='/admin/shoplist' component={ShopListScreen} />
        <Route path='/admin/shop/:id/edit' component={ShopEditScreen} />
        <Route path='/admin/productlist' component={ProductListScreen} />
        <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
        <Route path='/admin/orderlist' component={OrderListScreen} />
        <Route path='/shop/productlist' component={VendorsProductListScreen} />
        <Route path='/shop/shoplist' component={VendorsShopScreen} />
        <Route path='/shop/orderlist' component={VendorsOrderListScreen} />
      </main>
      <Footer />
    </Router>
  )
}

export default App