import style from './Cart.module.scss';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';

const CartProduct = ({ props }) => {
  const { name, price, quantity, id } = props[0];
  const handleOrder = props[1];

  const [newQuantity, setNewQuantity] = useState(quantity);
  const [totalPrice, setTotalPrice] = useState(quantity * price);
  const [comment, setComment] = useState('');
  const [productOrder, setProductOrder] = useState({
    id,
    name,
    quantity,
    price,
    comment,
    totalPrice,
  });

  //console.log('comment', comment);
  //console.log('productOrder', productOrder);

  useEffect(() => {
    // handleCartProduct();

    handleOrder(productOrder);
  }, [productOrder]);

  useEffect(() => {
    setTotalPrice(newQuantity * price);
    //console.log('setProductOrder quatity', newQuantity);
    setProductOrder({
      id: id,
      name: name,
      quantity: newQuantity,
      price: price,
      comment: comment,
      totalPrice: totalPrice,
    });
  }, [newQuantity]);

  // const handleCartProduct = () => {
  //   setTotalPrice(newQuantity * price);

  //   //console.log('HCart productOrder', productOrder);
  // };

  const handlePlus = (e) => {
    e.preventDefault();
    if (newQuantity < 10) {
      setNewQuantity(newQuantity + 1);
    }
    //setTotalPrice(newQuantity * price);
    // console.log('newQuantity', newQuantity);
  };

  const handleMinus = (e) => {
    e.preventDefault();
    if (newQuantity > 1) {
      setNewQuantity(newQuantity - 1);
    }
    //setTotalPrice(newQuantity * price);
  };

  return (
    <div className={style.container}>
      <div className={style.cart__name}>
        <h3>{name}</h3>
      </div>
      <div className={style.cart__price}>
        <h3>{price} EUR</h3>
      </div>
      <div className={style.product__buy__quantity}>
        <div onClick={handleMinus}>
          <Button>
            <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
          </Button>
        </div>

        <div className={style.cart__quantity}>
          <h3>{newQuantity}</h3>
        </div>
        <div onClick={handlePlus}>
          <Button>
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          </Button>
        </div>
      </div>
      <div className={style.cart__total}>
        <h3>{totalPrice} EUR</h3>
      </div>
      <div className={style.cart__comment}>
        <form>
          <textarea
            className={style.cart__comment__textarea}
            id="comment"
            name="comment"
            rows="4"
            cols="50"
            placeholder="Need something special about this product? Describe it here..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </form>
      </div>
    </div>
  );
};

export default CartProduct;
