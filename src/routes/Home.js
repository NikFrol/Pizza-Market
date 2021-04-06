import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPopup, PizzaBlock, PizzaLoaderBlock } from '../Components';
import { fetchPizzas } from '../redux/actions/pizzas';
import { setCategory, setSortBy } from '../redux/actions/filters';


const categoriesNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortNames = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавит', type: 'alphabet' },
];

const Home = () => {

  const dispatch = useDispatch();
  const pizzas = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  const onClickCategory = (index) => dispatch(setCategory(index));

  useEffect(() => {
    if (!pizzas.length) {
      dispatch(fetchPizzas());
    }

  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={onClickCategory}
          items={categoriesNames}
        />
        <SortPopup
          items={sortNames}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          isLoaded ? pizzas.map((obj) => <PizzaBlock key={obj.id} isLoading={true} {...obj} />)
            : Array(12)
              .fill(0)
              .map((_, index) => <PizzaLoaderBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;