import styles from './Button.module.scss';

const Button = ({ children }) => {
  return <button className={styles.root}>{children}</button>;
};

export default Button;
