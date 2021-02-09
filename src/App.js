import './App.css';
import React from 'react';
import Homepage from './pages/homepage/home';
import ShopPage from './pages/shop-page/shopPage.component';
import SignPage from './pages/sign-page/sign.component';
import Header from './components/header/header.component';
import {Switch, Route} from 'react-router-dom';
import {auth,createUserProfile} from './firebase/firebase.utils';

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
    this.unsubscribe = auth.onAuthStateChanged(async userAuth => {
           if(userAuth)
           {
            const userRef = await createUserProfile(userAuth);
           
            userRef.onSnapshot(snapshot => {
              this.setState({
                currentUser: {
                  id: snapshot.id,
                  ...snapshot.data()
                }
              })
            })
           }
           this.setState({currentUser: userAuth})
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
