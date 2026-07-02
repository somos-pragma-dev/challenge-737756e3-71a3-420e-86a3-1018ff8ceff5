import React from 'react';
import ProductList from '../components/ProductList';

function Home() {
  return (
    <div className="Home">
      <h1>Productos Destacados</h1>
      <ProductList />
    </div>
  );
}

export default Home;