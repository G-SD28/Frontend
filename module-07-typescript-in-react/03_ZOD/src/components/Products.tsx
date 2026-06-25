import { useEffect, useState } from 'react';
import { ProductSchema, type Product } from '../schemas';
import { z } from 'zod/v4';

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        if (!res.ok) throw new Error('fetch failed');

        const resData = await res.json();

        const { data, error, success } = z
          .array(ProductSchema)
          .safeParse(resData);

        if (!success) throw new Error(z.prettifyError(error));

        setProducts(data);
      } catch (err: unknown) {
        if (err instanceof Error) setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h2>Products</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.title} - <strong>${p.price}</strong>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Products;
