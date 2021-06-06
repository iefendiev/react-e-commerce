import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const [product, setProduct] = useState();
  const { itemID } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(
        `https://60bbe1dc3a39900017b2e099.mockapi.io/shopping/api/v1/products/${itemID}`,
        {
          method: 'GET',
        }
      );
      const data = await res.json();
      setProduct(data);
    };
    fetchProduct(itemID);
  }, [itemID]);

  return (
    <div className="product-detail">
      <div className="detail-name">
        Product Name: <span style={{ fontWeight: 700 }}>{product?.name}</span>
      </div>
      <div className="detail-price">
        Product Price: <span style={{ fontWeight: 700 }}>{product?.price}</span>
      </div>
      <img className="detail-image" alt="product" src={product?.image}></img>
    </div>
  );
};

export default ProductDetail;
