import styles from './Button.module.scss';
import PropTypes from 'prop-types';

const Button = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
