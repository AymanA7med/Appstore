import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../services/api';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then(data => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map(product => (
        <Link
          key={product.id}
          to={`/products/${product.id}`}
          className="bg-white p-4 rounded shadow hover:shadow-lg"
        >
          <img src={product.image} alt={product.title} className="h-40 mx-auto" />
          <h2 className="mt-2 font-semibold">{product.title}</h2>
          <p className="mt-1 text-green-600 font-bold">${product.price}</p>
        </Link>
      ))}
    </div>
  );
}