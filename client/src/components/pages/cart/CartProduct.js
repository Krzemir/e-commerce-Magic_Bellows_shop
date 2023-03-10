import style from './Cart.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';
import { deleteFromCartAndLocalStorage } from '../../../redux/cartRedux';
import PropTypes from 'prop-types';

const CartProduct = ({ props }) => {
  const { name, price, quantity, id } = props[0];
  const handleOrder = props[1];

  const [newQuantity, setNewQuantity] = useState(quantity);
  const [totalPrice, setTotalPrice] = useState(newQuantity * price);
  const [comment, setComment] = useState('');
  const [productOrder, setProductOrder] = useState({
    id,
    name,
    quantity,
    price,
    comment,
    totalPrice,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    handleOrder(productOrder);
  }, [productOrder]);

  useEffect(() => {
    setTotalPrice(newQuantity * price);
    setProductOrder({
      id: id,
      name: name,
      quantity: newQuantity,
      price: price,
      comment: comment,
      totalPrice: totalPrice,
    });
  }, [newQuantity, comment]);

  const handlePlus = (e) => {
    e.preventDefault();
    if (newQuantity < 10) {
      setNewQuantity(newQuantity + 1);
    }
  };

  const handleMinus = (e) => {
    e.preventDefault();
    if (newQuantity > 1) {
      setNewQuantity(newQuantity - 1);
    }
  };

  const removeProduct = (e, id) => {
    e.preventDefault();
    dispatch(deleteFromCartAndLocalStorage(id));
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
        <div onClick={(e) => handleMinus(e)}>
          <Button>
            <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
          </Button>
        </div>

        <div className={style.cart__quantity}>
          <h3>{newQuantity}</h3>
        </div>
        <div onClick={(e) => handlePlus(e)}>
          <Button>
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          </Button>
        </div>
      </div>
      <div className={style.cart__total}>
        <h3>{totalPrice} EUR</h3>
      </div>
      <div className={style.cart__delete} onClick={(e) => removeProduct(e, id)}>
        <Button>remove from cart</Button>
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

CartProduct.propTypes = {
  props: PropTypes.array,
};

export default CartProduct;
