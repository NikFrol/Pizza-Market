import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';


import { Header } from './Components/index';
import { Home, Cart } from './routes';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content"></div>
      <div className="container"></div>
      <div className="content__top">
        <Switch>
        <Route path='/404' render={() => (
                    <h1>Not Found 404</h1>)}/>
            <Route path='/' exact component={Home} />
            <Route path="/cart" component={Cart} />
            <Route path='/about' render={() => (
              <h1>About</h1>
            )} />
            <Route path='/contact' render={() => (
              <h1>Contacts</h1>
            )} />
            <Route render={() => (
              <Redirect to={'/404'} />
            )
            } />
          </Switch>
      </div>
    </div>
  )
    
}
export default App;
