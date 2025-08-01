import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../services/api';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProductById(id).then(data => {
      setProduct(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="bg-white p-6 rounded shadow">
      <div className="flex flex-col md:flex-row">
        <img
          src={product.image}
          alt={product.title}
          className="w-64 h-64 object-contain"
        />
        <div className="md:ml-6">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="mt-2 text-gray-700">{product.description}</p>
          <p className="mt-4 text-green-600 text-xl font-semibold">
            ${product.price}
          </p>
        </div>
      </div>
    </div>
  );
}