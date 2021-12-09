import React from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';
import Header from './components/header/header.component';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

/* const HatsPage = () => (
  <div>
    <h1>Hello World</h1>
  </div>
);
 */
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/SignIn" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
