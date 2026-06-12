import { useCart } from '../context/CartProvider';

const Cart = () => {
  const { cart, changeQty, removeFromCart, clearCart, itemCount } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <h2>Cart {itemCount > 0 && `(${itemCount})`} </h2>

      {cart.length === 0 ? (
        <p className='cart-list'>Your cart is empty</p>
      ) : (
        <>
          <div className='cart-list'>
            {cart.map((item) => (
              <div key={item.id} className='cart-item'>
                <img src={item.image} alt={item.title} className='cart-img' />
                <div className='cart-item-info'>
                  <p className='cart-item-title'>{item.title}</p>
                  <p className='cart-item-price'>{item.price}</p>
                </div>

                <div className='qty-controls'>
                  <button
                    className='btn-qty'
                    onClick={() => changeQty(item.id, -1)}
                  >
                    -
                  </button>
                  <span className='qty'>{item.quantity}</span>
                  <button
                    className='btn-qty'
                    onClick={() => changeQty(item.id, +1)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}

            <div className='cart-summary'>
              <span>Items: {itemCount}</span>
              <strong>Total: ${total.toFixed(2)}</strong>
              <button className='btn btn-checkout' onClick={clearCart}>
                {' '}
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
