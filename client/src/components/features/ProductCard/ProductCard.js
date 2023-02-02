import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './ProductCard.module.scss';
import Button from '../../common/Button/Button';
import { IMGS_URL } from '../../../config';
import { getMainImage } from '../../../utils/getMainImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/cartRedux';

const ProductCard = (props) => {
  const { id, name, price, shortDescription, images } = props;
  const mainImage = getMainImage(images);

  const dispatch = useDispatch();

  const handleCLick = (e) => {
    e.preventDefault();
    dispatch(addToCart({ id, name, price, quantity: 1 }));
  };

  return (
    <div className={styles.card}>
      <div className={styles.name}>
        <h5>{name}</h5>
      </div>
      <div className={styles.photo}>
        <img src={IMGS_URL + mainImage} alt={name} />
      </div>
      <div className={styles.buttons}>
        <NavLink to={`/products/${id}`}>
          <Button>
            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>More
            details
          </Button>
        </NavLink>
        <div onClick={handleCLick}>
          <Button>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
            Add to cart
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.shortDescription}>
          <p> {shortDescription} </p>
        </div>
        <div className={styles.price}>
          <p>{price} EUR</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
