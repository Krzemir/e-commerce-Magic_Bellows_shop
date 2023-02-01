import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <img
        src={`${process.env.PUBLIC_URL}/header.jpeg`}
        alt="Accordion Player"
      />
      <div className={styles.headerContent}>
        <h1>Need something special?</h1>
        <p>Look, we have it all!</p>
      </div>
    </header>
  );
};

export default Header;
