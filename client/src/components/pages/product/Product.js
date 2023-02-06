import styles from './Product.module.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMGS_URL } from '../../../config';
import { getMainImage } from '../../../utils/getMainImage';
import Button from '../../common/Button/Button';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/cartRedux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  console.log('totalPrice', totalPrice);

  const dispatch = useDispatch();

  const handlePlus = (e) => {
    e.preventDefault();
    if (quantity < 10) {
      setQuantity(quantity + 1);
      setTotalPrice(quantity * price);
    }
  };

  const handleMinus = (e) => {
    e.preventDefault();
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setTotalPrice(quantity * price);
    }
  };

  useEffect(() => {
    fetch(`http://localhost:8000/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
        setTotalPrice(quantity * data.price);
      });
  }, [id]);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  const { name, description, shortDescription, price, images } = product || {};
  const mainImage = getMainImage(images);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addToCart({ id, name, price, quantity, totalPrice }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.product__name}>
        <h1>{name}</h1>
        <h3>{shortDescription}</h3>
      </div>
      <div className={styles.product__image}>
        <img src={IMGS_URL + mainImage} alt={name} />
      </div>
      <div
        className={styles.product__description}
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
      <div className={styles.product__buy}>
        <p>{price} EUR</p>
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

          <div onClick={handleClick}>
            <Button>Add to cart</Button>
          </div>
        </div>
      </div>
      <div className={styles.product__gallery}>
        {images.map((image) => (
          <div key={image.id} className={styles.product__gallery__image}>
            <img src={IMGS_URL + image.fileName} alt={name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
