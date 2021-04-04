import cn from 'classnames';

import s from './Navbar.module.css';

const Navbar = ({ onChangeActive, bgActive = false, stateActive, onClickLogin }) => {

  return (
    <nav id={s.navbar} className={cn({ [s.bgActive]: bgActive })}>
      <div className={s.navWrapper}>
        <div className={s.loginAndMenu}>
          <div
            className={s.loginWrap}
            onClick={onClickLogin}>
            
          </div>
          <div
            onClick={onChangeActive}
            className={cn(s.menuButton, { [s.active]: stateActive })}>
            <span />
          </div>
        </div>
      </div>
    </nav>)
}

export default Navbar;