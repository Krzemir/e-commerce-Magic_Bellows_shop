import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductsList.module.scss';
import PropTypes from 'prop-types';

const ProductsList = ({ products }) => {
  if (!products) return null;
  return (
    <div className={styles.container}>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

ProductsList.propTypes = {
  products: PropTypes.array,
};

export default ProductsList;
