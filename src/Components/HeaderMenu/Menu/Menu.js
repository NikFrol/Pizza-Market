import cn from 'classnames';
import { Link } from 'react-router-dom';

import s from './Menu.module.css';

const Menu = ({ stateActive, onChangeActive}) => {

  const menuItems = [
    { name: 'HOME', to: '/' },
    { name: 'GAME', to: "/game" },
    { name: 'ABOUT', to: "/about" },
    { name: 'CONTACT', to: "/contact" }

  ]

  const classNames = cn(s.menuContainer, { [s.active]: stateActive === true, [s.deactive]: stateActive === false })
  return (
    <div className={classNames}>
      <div className={s.overlay} />
      <div className={s.menuItems}>
        <ul>
          {menuItems.map(({ name, to }, index) => {
            return (<li key={index}>
            <Link to={to} onClick={onChangeActive}>
            {name}
            </Link>
            </li>)
          })}
        </ul>
      </div>
    </div>
  )
}
export default Menu;