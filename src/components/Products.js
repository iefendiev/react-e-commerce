import { useState, useEffect } from 'react';
import Product from './Product';

const Products = ({ addCart }) => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const res = await fetch(
      `https://60bbe1dc3a39900017b2e099.mockapi.io/shopping/api/v1/products`,
      {
        method: 'GET',
      }
    );
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="products">
      {products.map((item) => (
        <div key={item.id}>
          <Product item={item} addCart={addCart}></Product>
        </div>
      ))}
    </div>
  );
};

export default Products;
