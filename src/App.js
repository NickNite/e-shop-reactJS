import React from 'react';
import './index.scss';
import HeaderContainer from './components/header/headerContainer';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import ProductInfo from './components/productInfo/productInfoContainer';
import ProductContainer from './components/products/productContainer';
import { Footer } from './components/footer/footer';
import Navbar from './components/navbar/navbar';

function App() {
  debugger
  return (
    <div className="container">
      <div className="head">
        <HeaderContainer />
      </div>
      <div className="mainContent">
        <Navbar />
        <div className="content">
          <Switch>
            <Redirect exact from='/' to='/tables' />
            <Route path='/tables' component={ProductContainer} />
            <Route path='/chairs' component={ProductContainer} />
            <Route path='/product/:type?/:productId' render={props => <ProductInfo {...props} />} />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
}


export default withRouter(App);
