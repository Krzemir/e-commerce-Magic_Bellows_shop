import styles from './ProductCard.module.scss';
import Button from '../../common/Button/Button';
import { IMGS_URL } from '../../../config';
import { getMainImage } from '../../../utils/getMainImage';

const ProductCard = (props) => {
  if (!props) return null;

  const { id, name, price, shortDescription, images } = props;
  const mainImage = getMainImage(images);
  //console.log(mainImage);

  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <img src={IMGS_URL + mainImage} alt={name} />
      </div>
      <div className={styles.content}>
        <h5 className={styles.name}>{name}</h5>
        <p className={styles.shortDescription}> {shortDescription} </p>
        <div className={styles.price}>
          <span className={styles.price}>{price} EUR</span>
        </div>

        <div className={styles.buttons}>
          <Button id={id}>More details</Button>
          <Button>Add to cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
