import { getProducts } from '../../../redux/productRedux';
import { fetchProducts } from '../../../redux/productRedux';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ProductsList from '../../features/ProductsList/ProductsList';
import Header from '../../layout/Header/Header';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchProducts()), [dispatch]);
  const products = useSelector(getProducts);

  //if (!products) return null;
  return (
    <>
      <Header />
      <ProductsList products={products} />
    </>
  );
};

export default Home;
