import { useEffect, useState } from 'react';
import { useCart } from '../context/CartProvider';
import { Link } from 'react-router';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        if (!res.ok) throw new Error('failed to fetch');

        const data = await res.json();

        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    setToast(`${product.title} added`);
    setTimeout(() => setToast(null), 2000);
  };

  if (loading) return <p className='loading'>Loading...</p>;

  return (
    <>
      <h2 className='page-title'>All Products</h2>
      <div className='product-grid'>
        {products.map((product) => (
          <div key={product.id} className='card'>
            <Link to={`/products/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                className='card-img'
              />
            </Link>
            <span className='category'>{product.category}</span>
            <span className='card-title'>{product.title}</span>
            <span className='price'>$ {product.price}</span>
            <button
              onClick={() => handleAddToCart(product)}
              className='btn btn-add'
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {toast && <div className='toast'>{toast}</div>}
    </>
  );
};

export default Home;
