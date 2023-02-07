import { useSelector, useDispatch } from 'react-redux';
import { getOrder, clearOrder } from '../../../redux/orderRedux';
import { clearCart } from '../../../redux/cartRedux';
import styles from './Order.module.scss';
import Button from '../../common/Button/Button';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Order = () => {
  const order = useSelector(getOrder);

  const dispatch = useDispatch();

  const resetOrderCart = () => {
    dispatch(clearCart());
    dispatch(clearOrder());
  };

  if (order == null) return null;

  return (
    <div className={styles.order}>
      <div className={styles.order__title}>
        <h1>Order summary</h1>
      </div>
      <div className={styles.order_list__title}>
        <h3>Your order:</h3>
      </div>
      <div className={styles.container}>
        <div>
          {order.products.map((product) => (
            <div key={product.id} className={styles.order_product__wrapper}>
              <div className={styles.order_list}>
                <h3>{product.name}</h3>
                <h3>{product.price} per each</h3>
                <h3>{product.quantity} pcs.</h3>
                <h3>{product.totalPrice} total</h3>
              </div>
              <div className={styles.order__comment}>
                <p>Your comment: {product.comment}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.order__total}>
          <h3>Total: {order.totalToPay}</h3>
        </div>
      </div>
      <div className={styles.order_list__title}>
        <h3>Your data:</h3>
      </div>
      <div className={styles.order_client}>
        <h3>Name: {order.client}</h3>
        <h3>Address: {order.address} </h3>
      </div>
      <div className={styles.order__thank}>
        <h3>Your order has been placed</h3>
        <h3>Thank you for shopping with us!</h3>
      </div>

      <div className={styles.order__form__button} onClick={resetOrderCart}>
        <NavLink to="/">
          <Button>Go to Home Page</Button>
        </NavLink>
      </div>
    </div>
  );
};

export default Order;
