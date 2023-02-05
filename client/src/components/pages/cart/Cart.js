import { useSelector, useDispatch } from 'react-redux';
import { getCart, updateCart } from '../../../redux/cartRedux';
import style from './Cart.module.scss';
import CartProduct from './CartProduct';
import Button from '../../common/Button/Button';
import { useState, useEffect } from 'react';

const Cart = () => {
  //const [cart, setCart] = useState([]);
  const [orderPrice, setOrderPrice] = useState(0);
  const [finalCart, setFinalCart] = useState([]);

  const cart = useSelector(getCart);

  console.log('cart', cart);

  useEffect(() => {
    setFinalCart(cart);
  }, []);

  console.log('finalCart', finalCart);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   handleOrderPrice();
  // }, []);

  const handleOrder = (product) => {
    //console.log('product', product);
    const productToUpdate = finalCart.findIndex(
      (item) => item.id === product.id,
    );
    setFinalCart([(finalCart[productToUpdate] = product)]);
    dispatch(updateCart(finalCart));
  };

  // const handleOrder = (product) => {
  //   console.log('product', product);
  //   cart.map((item) => {
  //     if (item.id === product.id) {
  //       dispatch(updateCart(product));
  //     }
  //   });
  // };

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
