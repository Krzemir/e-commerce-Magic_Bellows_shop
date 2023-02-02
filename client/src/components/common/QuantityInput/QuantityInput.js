import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';
import styles from './QuantityInput.module.scss';
import { useState } from 'react';

const QuantityInput = (tempQuantity, setQuantity) => {
  const [inputQuantity, setTempQuantity] = useState(tempQuantity);

  const handlePlus = (e) => {
    e.preventDefault();
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  const handleMinus = (e) => {
    e.preventDefault();
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className={styles.product__buy__quantity}>
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
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <div onClick={handlePlus}>
        <Button>
          <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
        </Button>
      </div>
    </div>
  );
};

export default QuantityInput;
