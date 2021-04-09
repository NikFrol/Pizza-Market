import { memo } from 'react'

const Categories = memo(({ activeCategory, items, onClickItem }) => {



  const onSelectItem = (index) => {

    onClickItem && onClickItem(index)
  };

  return (
    <div className="categories">
      <ul>
        <li className={activeCategory === null ? 'active' : ''} onClick={() => onSelectItem(null)}>
          Все
          </li>
        {items &&
          items.map((name, index) => (
            <li
              className={activeCategory === index ? 'active' : ''}
              onClick={() => onSelectItem(index)}
              key={`${name}_${index}`}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
})

export default Categories;