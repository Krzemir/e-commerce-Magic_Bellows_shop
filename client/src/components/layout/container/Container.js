import styles from './Container.module.scss';

const Container = (props) => {
  // prettier-ignore
  return <div className={styles.container}>{props.children}</div>
};

export default Container;
