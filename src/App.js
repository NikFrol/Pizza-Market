
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

import { Header } from './Components/index';
import { Home, Cart } from './routes';
import { setPizzas } from './redux/actions/pizzas';

// function App() {
//   React.useEffect(() => {
//     axios.get('http://localhost:3000/db.json').then(({ data }) => {
//       setPizzas(data.pizzas);
//     });
//   }, []);

//   return ;
// }

class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      this.props.setPizzas(data.pizzas);
    });
  }

  render() {
    console.log(this.props);
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/" render={() => <Home items={this.props.items} />} exact />
          <Route path="/cart" component={Cart} exact />
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      items: state.pizzas.items,
      filters: state.filters,
    };
  },
  (dispatch) => {
    return {
      setPizzas: (items) => dispatch(setPizzas(items)),
    };
  },
)(App);