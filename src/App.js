import './App.css';
import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/user.selectors';
import {cartCount} from './redux/cart/cart.selectors';
import Homepage from './pages/homepage/home';
import ShopPage from './pages/shop-page/shopPage.component';
import SignPage from './pages/sign-page/sign.component';
import CheckoutPage from './pages/checkoutPage/checkoutPage.component';
import Header from './components/navigation/header/header.component';
import {Switch, Route, Redirect} from 'react-router-dom';
import { selectCollectionsPreview } from './redux/shop/shop.selectors';
import {checkUser} from './redux/user/user.actions';

class App extends React.Component 
{
  
  unsubscribe = null;

  componentDidMount()
  {
    const {checkUser} = this.props;
    checkUser()
  }

  componentWillUnmount()
  {
    this.unsubscribe();
  }

  render()
  {
    const {user, count} = this.props;

  return (
   <div className='appname'>
     <Header/>
     <Switch>
       <Route exact path='/' component={Homepage}/>
       <Route path='/shop' component={ShopPage}/>
       <Route exact path='/checkout' render = {() => !count ? (<Redirect to='/shop'/>) : (<CheckoutPage/>)}/>
       <Route path='/sign' render = {() => user ? (<Redirect to='/'/>) : (<SignPage/>)}/>
     </Switch>
   </div>
  )
}
}

const mapStateToProps =  createStructuredSelector({
  user: selectCurrentUser,
  count: cartCount,
  collections: selectCollectionsPreview
})

const mapDispatchToProps = dispatch => ({
   checkUser: () => dispatch(checkUser())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);






    // this.unsubscribe = auth.onAuthStateChanged(async userAuth => {
    //        if(userAuth)
    //        {
    //         const userRef = await createUserProfile(userAuth);
           
    //         userRef.onSnapshot(snapshot => {
    //              setUser({
    //               id: snapshot.id,
    //               ...snapshot.data() 
    //           })
    //         })
    //        }
    //        setUser(userAuth)

    // }) 
    