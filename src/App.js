import React from 'react';
import './index.scss';
import HeaderContainer from './components/header/headerContainer';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import ProductInfo from './components/productInfo/productInfoContainer';
import ProductContainer from './components/products/productContainer';
import logo from './image/minimalist2.png';
import { Footer } from './components/footer/footer';

function App() {
  return (
    <div className="container">
      <div className='logo'>
        <img src={logo} />
        <h2>Сomfortable Kitchen</h2>
      </div>
      <div className="head">
        <HeaderContainer />
      </div>
      <div className="content">
        <Switch>
          <Redirect exact from='/' to='/tables' />
          <Route path='/tables' component={ProductContainer} />
          <Route path='/chairs' component={ProductContainer} />
          <Route path='/product/:type?/:productId' render={props => <ProductInfo {...props} />} />
        </Switch>
      </div>
      <Footer />
      {/* <div className='payPartner'>
        <img src={pay} />
      </div> */}
    </div>
  );
}


export default withRouter(App);
