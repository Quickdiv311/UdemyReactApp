import './App.css';
import React from 'react';
import Homepage from './pages/homepage/home';
import ShopPage from './pages/shop-page/shopPage.component';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
   <div className='appname'>
     <Switch>
       <Route exact path='/' component={Homepage}/>
       <Route path='/shop' component={ShopPage}/>
     </Switch>
   </div>
  );
}

export default App;
