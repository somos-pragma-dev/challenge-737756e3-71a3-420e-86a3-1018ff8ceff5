import React, { useEffect, useState } from 'react';
import imageLoader from '../utils/imageLoader';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProducts([
        { id: 1, name: 'Producto 1', image: 'product1.webp' },
        { id: 2, name: 'Producto 2', image: 'product2.webp' }
      // Add more products as needed
       ]);
    }, 200);
  }, []);

  return (
    <div className="ProductList">
      {products.map(product => (
        <div key={product.id} className="ProductItem">
          <img src={imageLoader(product.image)} alt={product.name} />
          <h2>{product.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default ProductList;