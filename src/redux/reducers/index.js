import { combineReducers } from 'redux';

import reducrtFilters from './filters';
import reducrtPizzas from './pizzas';

const rootReducer = combineReducers({
    filters: reducrtFilters,
    pizzas: reducrtPizzas
});

export default rootReducer;