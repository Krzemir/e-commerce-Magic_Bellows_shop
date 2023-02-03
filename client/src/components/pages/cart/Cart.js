import { useSelector } from 'react-redux';
import { getCart } from '../../../redux/cartRedux';
import style from './Cart.module.scss';
import CartProduct from './CartProduct';
import Button from '../../common/Button/Button';
import { useState, useEffect } from 'react';

const Cart = () => {
  const [cart, setCart] = useState(useSelector(getCart));
  const [orderPrice, setOrderPrice] = useState(0);

  //console.log('CART', cart);

  useEffect(() => {
    handleOrderPrice();
  }, [cart]);

  const handleOrderPrice = () => {
    let tempPrice = orderPrice;
    cart.forEach((product) => {
      tempPrice += product.price * product.quantity;
    });
    setOrderPrice(tempPrice);
  };

  const handleOrder = (product) => {
    handleOrderPrice();
    console.log('newProduct', product);
    // cart.map((item) => {
    //   if (item.id === product.id) {

    //     setCart((prev) => [...prev, product]);
    //   } else {
    //     return item;
    //   }
    // }
    // );
  };

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
      <div className={style.cart__submit}>
        <Button>Thats all, lets pay!</Button>
      </div>
    </div>
  );
};

export default Cart;
