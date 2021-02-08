import './App.css';
import React from 'react';
import Homepage from './pages/homepage/home';
import ShopPage from './pages/shop-page/shopPage.component';
import SignPage from './pages/sign-page/sign.component';
import Header from './components/header/header.component';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
   <div className='appname'>
     <Header/>
     <Switch>
       <Route exact path='/' component={Homepage}/>
       <Route path='/shop' component={ShopPage}/>
       <Route path='/sign' component={SignPage}/>
     </Switch>
   </div>
  );
}

export default App;
