import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductsList.module.scss';

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

export default ProductsList;
