import { useSelector } from 'react-redux';
import { getCart } from '../../../redux/cartRedux';
import style from './Cart.module.scss';
import CartProduct from './CartProduct';
import { useState } from 'react';

const Cart = () => {
  const [cart, setCart] = useState(useSelector(getCart));
  const [orderPrice, setOrderPrice] = useState(0);

  const handleOrderPrice = (orderPrice) => {
    console.log('TOTALPRICE', orderPrice);
  };

  console.log('CART', cart);
  return (
    <div className={style.cart}>
      <div className={style.cart__title}>
        <h1>Cart</h1>
      </div>
      {cart.map((product) => (
        <CartProduct key={product.id} {...product} orderPrice={orderPrice} />
      ))}

      <div className={style.cart__totalPrice}>
        <h3>To pay: {orderPrice}</h3>
      </div>
    </div>
  );
};

export default Cart;
