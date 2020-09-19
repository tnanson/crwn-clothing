import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {Route, Switch, Redirect} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header-component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {selectCurrentUser} from './redux/user/user.selectors';
import {checkUserSession} from './redux/user/user.actions';
import {createStructuredSelector} from 'reselect';
class App extends React.Component{
  
  componentDidMount(){
    const {checkUserSession} = this.props;
    checkUserSession();
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/shop' component={ShopPage}></Route> 
          <Route exact path='/checkout' component={CheckoutPage}></Route>
          <Route 
            exact
            path='/signin' 
            render={() => this.props.currentUser  ? <Redirect to='/' /> :  <SignInAndSignUpPage /> }
          />
            
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
