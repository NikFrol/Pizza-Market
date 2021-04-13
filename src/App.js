
import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';


import { Header } from './Components/index';
import { Home, Cart } from './routes';
import notFound404 from './assets/notFound404.png';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
      <Switch>
                <Route path='/404' render={() => (
                    <>
                    <h1>Not Found, go back</h1>
                    <img width="100%" src={notFound404} alt="404" />
                    </>)}
                />
                <Route>
                    <>
                        
                            <Switch>
                                <Route path='/' exact component={Home} />
                                <Route path='/cart' component={Cart} />
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
                       
                     
                    </>
                </Route>
            </Switch>
      </div>
    </div>
  );
}

export default App;