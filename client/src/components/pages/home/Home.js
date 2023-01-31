import { getProducts } from '../../../redux/productRedux';
import { fetchProducts } from '../../../redux/productRedux';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ProductCard from '../../features/ProductCard/ProductCard';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchProducts()), [dispatch]);
  const products = useSelector(getProducts);

  return (
    <div className="root">
      <h1>Products</h1>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Home;
