import { useSelector, useDispatch } from 'react-redux';
//import { addOrder } from '../../../redux/orderRedux';
import { sendOrderRequest } from '../../../redux/orderRedux';
import { getCart } from '../../../redux/cartRedux';
import { useEffect, useState } from 'react';
import Button from '../../common/Button/Button';

import styles from './Checkout.module.scss';
import { NavLink, useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [totalToPay, setTotalToPay] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector(getCart);
  const cartPrice = cart.reduce((acc, product) => {
    return acc + product.totalPrice;
  }, 0);

  useEffect(() => {
    setTotalToPay(cartPrice);
  }, []);

  const handleOrder = () => {
    const order = {
      client: name,
      address: address,
      products: cart,
      totalToPay: totalToPay,
    };

    dispatch(sendOrderRequest(order));
    navigate('/order');
  };

  return (
    <div className={styles.checkout}>
      <div className={styles.checkout__title}>
        <h1>Checkout</h1>
      </div>
      <div className={styles.checkout_list__title}>
        <h3>Your order:</h3>
      </div>
      <div className={styles.container}>
        <div>
          {cart.map((product) => (
            <div key={product.id} className={styles.checkout_product__wrapper}>
              <div className={styles.checkout_list}>
                <h3>{product.name}</h3>
                <h3>{product.price} per each</h3>
                <h3>{product.quantity} pcs.</h3>
                <h3>{product.totalPrice} total</h3>
              </div>
              <div className={styles.checkout__comment}>
                <p>Your comment: {product.comment}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.checkout__total}>
          <h3>Total: {totalToPay}</h3>
        </div>
      </div>
      <div className={styles.checkout_list__title}>
        <h3>Your data:</h3>
      </div>
      <div className={styles.container}>
        <form className={styles.checkout__form}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              className={styles.checkout__form__input}
              type="text"
              id="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <input
              className={styles.checkout__form__input}
              type="text"
              id="address"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </div>
        </form>
        <div className={styles.checkout__form__button} onClick={handleOrder}>
          {/* <NavLink to="/order"> */}
          <Button>Send order</Button>
          {/* </NavLink> */}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
