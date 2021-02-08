import './App.css';
import React from 'react';
import Homepage from './pages/homepage/home';
import ShopPage from './pages/shop-page/shopPage.component';
import SignPage from './pages/sign-page/sign.component';
import Header from './components/header/header.component';
import {Switch, Route} from 'react-router-dom';
import {auth} from './firebase/firebase.utils';

class App extends React.Component 
{
  constructor()
  {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribe = null;

  componentDidMount()
  {
    this.unsubscribe = auth.onAuthStateChanged(user => {

      this.setState({ currentUser: user})

      console.log(user);
    })
  }

  componentWillUnmount()
  {
    this.unsubscribe();
  }

  render()
  {
  return (
   <div className='appname'>
     <Header currentUser={this.state.currentUser}/>
     <Switch>
       <Route exact path='/' component={Homepage}/>
       <Route path='/shop' component={ShopPage}/>
       <Route path='/sign' component={SignPage}/>
     </Switch>
   </div>
  )
}
}
export default App;
