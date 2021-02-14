import './App.css';
import React from 'react';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
import Homepage from './pages/homepage/home';
import ShopPage from './pages/shop-page/shopPage.component';
import SignPage from './pages/sign-page/sign.component';
import Header from './components/header/header.component';
import {Switch, Route, Redirect} from 'react-router-dom';
import {auth,createUserProfile} from './firebase/firebase.utils';

class App extends React.Component 
{
  
  unsubscribe = null;

  componentDidMount()
  {
     const {setUser} = this.props;

    this.unsubscribe = auth.onAuthStateChanged(async userAuth => {
           if(userAuth)
           {
            const userRef = await createUserProfile(userAuth);
           
            userRef.onSnapshot(snapshot => {
                 setUser({
                  id: snapshot.id,
                  ...snapshot.data() 
              })
            })
           }
           setUser(userAuth)
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
     <Header/>
     <Switch>
       <Route exact path='/' component={Homepage}/>
       <Route path='/shop' component={ShopPage}/>
       <Route path='/sign' render = {() => this.props.user ? (<Redirect to='/'/>) : (<SignPage/>)}/>
     </Switch>
   </div>
  )
}
}

const mapStateToProps = state => ({
  user: state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
   setUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps ,mapDispatchToProps)(App);
