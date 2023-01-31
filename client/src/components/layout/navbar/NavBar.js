import Container from '../container/Container';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <Container>
        <div className={styles.navWrapper}>
          <div className={styles.navBar__logo}>
            <h2>Logo</h2>
          </div>
          <ul className={styles.navBar__links}>
            <li>
              <a href="/" className={styles.navBar__link}>
                Home
              </a>
            </li>
            <li>
              <a href="/cart" className={styles.navBar__link}>
                Cart
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
