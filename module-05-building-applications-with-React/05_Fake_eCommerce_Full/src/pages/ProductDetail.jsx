import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useCart } from '../context/CartProvider';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) throw new Error('fetch failed');

        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setToast(`${product.title} added`);
    setTimeout(() => setToast(null), 2000);
  };

  if (loading) return <p className='loading'>Loading...</p>;
  if (!product) return <p className='empty'>Product not found</p>;

  return (
    <>
      <button className='btn btn-remove' onClick={() => navigate(-1)}>
        GO BACK
      </button>
      <div className='product-detail'>
        <img
          src={product.image}
          alt={product.title}
          className='card-img'
          style={{ maxWidth: 300 }}
        />
      </div>
      <span className='category'>{product.category}</span>
      <h2>{product.title}</h2>
      <p>{product.description}</p>

      <div className='product-detail-actions'>
        <button
          className='btn btn-add'
          onClick={() => handleAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>

      {toast && <div className='toast'>{toast} </div>}
    </>
  );
};

export default ProductDetail;
