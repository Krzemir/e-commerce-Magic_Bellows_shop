import { useSelector, useDispatch } from 'react-redux';
//import { addOrder } from '../../../redux/orderRedux';
import { sendOrderRequest } from '../../../redux/orderRedux';
import { getCart } from '../../../redux/cartRedux';
import { useEffect, useState } from 'react';
import Button from '../../common/Button/Button';
import styles from './Checkout.module.scss';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Checkout = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [totalToPay, setTotalToPay] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
        <form
          className={styles.checkout__form}
          onSubmit={handleSubmit(handleOrder)}
        >
          <div>
            <label htmlFor="name">Name:</label>
            {errors.name && (
              <span className={styles.checkout_error}>
                This field is required
              </span>
            )}
            <input
              className={styles.checkout__form__input}
              type="text"
              id="name"
              {...register('name', { required: true })}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            {errors.address && (
              <span className={styles.checkout_error}>
                This field is required
              </span>
            )}
            <input
              className={styles.checkout__form__input}
              type="text"
              id="address"
              {...register('address', { required: true })}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </div>
          <div className={styles.checkout__form__button}>
            <Button type="submit">Send order</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
