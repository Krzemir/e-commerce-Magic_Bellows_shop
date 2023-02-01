import styles from './ProductCard.module.scss';
import Button from '../../common/Button/Button';
import { IMGS_URL } from '../../../config';
import { getMainImage } from '../../../utils/getMainImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const ProductCard = (props) => {
  const { id, name, price, shortDescription, images } = props;
  const mainImage = getMainImage(images);

  return (
    <div className={styles.card}>
      <div className={styles.name}>
        <h5>{name}</h5>
      </div>
      <div
        className={styles.photo}
        // style={{ backgroundImage: `url(${IMGS_URL + mainImage})` }}
      >
        <img src={IMGS_URL + mainImage} alt={name} />
      </div>
      <div className={styles.buttons}>
        <Button id={id}>
          <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>More
          details
        </Button>
        <Button>
          <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
          Add to cart
        </Button>
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
