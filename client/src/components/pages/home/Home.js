import { getProducts } from '../../../redux/productRedux';
import { fetchProducts } from '../../../redux/productRedux';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchProducts()), [dispatch]);
  const products = useSelector(getProducts);

  return (
    <div className="root">
      <h1>Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
