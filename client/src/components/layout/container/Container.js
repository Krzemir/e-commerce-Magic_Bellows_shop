import styles from './Container.module.scss';
import PropTypes from 'prop-types';

const Container = (props) => {
  // prettier-ignore
  return <div className={styles.container}>{props.children}</div>
};

Container.propTypes = {
  children: PropTypes.node,
};
export default Container;
