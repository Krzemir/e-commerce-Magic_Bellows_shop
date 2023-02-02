import style from './Cart.module.scss';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';

const CartProduct = ({ name, price, quantity }, handleOrderPrice) => {
  const [tempQuantity, setTempQuantity] = useState(quantity);
  const [totalPrice, setTotalPrice] = useState(0);
  // console.log('TEMPQUANTITY', tempQuantity);
  console.log('totalPriceCart', totalPrice);

  const handleTotalPrice = () => {
    setTotalPrice(tempQuantity * price);
  };

  useEffect(() => {
    handleTotalPrice();
    // handleOrderPrice(totalPrice);
  }, [tempQuantity]);

  const handlePlus = (e) => {
    e.preventDefault();
    if (quantity < 10) {
      setTempQuantity(tempQuantity + 1);
      handleOrderPrice(totalPrice);
    }
  };

  const handleMinus = (e) => {
    e.preventDefault();
    if (quantity > 1) {
      setTempQuantity(tempQuantity - 1);
    }
  };

  return (
    <div className={style.cart_product}>
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

        <input
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          max="10"
          value={tempQuantity}
          onChange={(e) => setTempQuantity(e.target.value)}
        />
        <div onClick={handlePlus}>
          <Button>
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          </Button>
        </div>
      </div>
      <div className={style.cart__total}>
        <h3>Total</h3>
        <h3>{totalPrice} EUR</h3>
      </div>
      <div className={style.cart__comment}>
        <h3>Comment</h3>
      </div>
    </div>
  );
};

export default CartProduct;
