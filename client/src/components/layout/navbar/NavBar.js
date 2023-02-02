import Container from '../container/Container';
import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <Container>
        <div className={styles.navWrapper}>
          <NavLink className={styles.navLink} to={`/`}>
            <div className={styles.navBar__logo}>
              <h2>Magic Bellows</h2>
              <h3>The finest accordions you can get</h3>
            </div>
          </NavLink>
          <ul className={styles.navBar__links}>
            <li>
              <NavLink className={styles.navLink} to={`/Cart`}>
                Cart
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
