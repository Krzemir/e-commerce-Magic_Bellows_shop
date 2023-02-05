import { useSelector } from 'react-redux';
import { getCart } from '../../../redux/cartRedux';

import styles from './Checkout.module.scss';

const Checkout = () => {
  const cart = useSelector(getCart);

  return (
    <div className={styles.checkout}>
      <div className={styles.checkout_title}>
        <h1>Checkout</h1>
      </div>

      <div className={styles.checkout_list}>
        {cart.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <h3>{product.price}</h3>
            <h3>{product.quantity}</h3>
            <h3>{product.totalPrice}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checkout;
