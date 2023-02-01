import styles from './Product.module.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMGS_URL } from '../../../config';
import { getMainImage } from '../../../utils/getMainImage';
import Button from '../../common/Button/Button';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8000/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  const { name, description, shortDescription, price, images } = product || {};
  const mainImage = getMainImage(images);

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

        <Button>Add to cart</Button>
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
