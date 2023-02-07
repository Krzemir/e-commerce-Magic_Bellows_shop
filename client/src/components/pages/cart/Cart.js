import { useSelector, useDispatch } from 'react-redux';
import { getCart, updateCart } from '../../../redux/cartRedux';
import style from './Cart.module.scss';
import CartProduct from './CartProduct';
import Button from '../../common/Button/Button';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Cart = () => {
  const [orderPrice, setOrderPrice] = useState(0);

  const cart = useSelector(getCart);

  const dispatch = useDispatch();

  useEffect(() => {
    handleOrderPrice();
  }, [cart]);

  const handleOrderPrice = () => {
    let price = 0;
    cart.forEach((product) => {
      price += product.price * product.quantity;
    });
    setOrderPrice(price);
  };

  const handleOrder = (product) => {
    dispatch(updateCart(product));
  };

  if (cart.length === 0)
    return (
      <div className={style.cart}>
        <div className={style.cart__title}>
          <h1>Cart</h1>
        </div>
        <div className={style.cart__empty}>
          <h3>Your cart is empty</h3>

          <NavLink to="/">
            <Button>Let's go shopping!</Button>
          </NavLink>
        </div>
      </div>
    );

  return (
    <div className={style.cart}>
      <div className={style.cart__title}>
        <h1>Cart</h1>
      </div>
      {cart.map((product) => (
        <CartProduct key={product.id} props={[{ ...product }, handleOrder]} />
      ))}

      <div className={style.cart__totalPrice}>
        <h3>To pay: {orderPrice}</h3>
      </div>
      <div className={style.cart__button_wrapper}>
        <div className={style.cart__back}>
          <NavLink to="/">
            <Button>Back to shop</Button>
          </NavLink>
        </div>
        <div className={style.cart__submit}>
          <NavLink to={`/Checkout`}>
            <Button>Thats all, lets pay!</Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Cart;
