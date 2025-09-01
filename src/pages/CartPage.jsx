import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, removeItem, clearCart } from '../store/cartSlice';

const currency = (n) => '$' + n.toFixed(2);

export default function CartPage({ onContinue }){
  const cart = useSelector(s => s.cart);
  const dispatch = useDispatch();
  const items = Object.values(cart);
  const totalItems = items.reduce((s, it) => s + it.qty, 0);
  const subtotal = items.reduce((s, it) => s + it.qty * it.product.price, 0);

  return (
    <div style={{display:'grid', gridTemplateColumns:'1fr 320px', gap:20}}>
      <div>
        <h2 style={{marginTop:0}}>Your Cart</h2>

        {items.length === 0 ? (
          <div style={{padding:20, border:'1px solid #eee', borderRadius:12, textAlign:'center'}}>
            <p className="u-muted">Your cart is empty.</p>
            <div style={{marginTop:10}}>
              <button className="btn" onClick={onContinue}>Continue Shopping</button>
            </div>
          </div>
        ) : (
          <>
            <div style={{marginBottom:12}} className="u-muted">Total items: <strong>{totalItems}</strong></div>

            <div className="cart-list">
              {items.map(({ product, qty }) => (
                <div className="cart-item" key={product.id}>
                  <img src={product.img} alt={product.name} />
                  <div style={{flex:1}}>
                    <div style={{fontWeight:700}}>{product.name}</div>
                    <div className="small">Unit: {currency(product.price)}</div>
                  </div>
                  <div className="qty-controls">
                    <button className="btn-small" onClick={()=>dispatch(decrement(product.id))}>−</button>
                    <div style={{minWidth:26, textAlign:'center'}}>{qty}</div>
                    <button className="btn-small" onClick={()=>dispatch(increment(product.id))}>+</button>
                  </div>
                  <div style={{minWidth:90, textAlign:'right', fontWeight:700}}>{currency(product.price * qty)}</div>
                  <div style={{marginLeft:8}}>
                    <button className="btn-small" onClick={()=>dispatch(removeItem(product.id))} style={{color:'#d23'}}>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <aside className="aside">
        <h3 style={{marginTop:0}}>Order Summary</h3>
        <div style={{marginTop:12}}>
          <div style={{display:'flex', justifyContent:'space-between'}}><span>Items</span><span>{totalItems}</span></div>
          <div style={{display:'flex', justifyContent:'space-between'}}><span>Subtotal</span><span>{currency(subtotal)}</span></div>
          <div style={{display:'flex', justifyContent:'space-between'}}><span>Shipping</span><span>Free</span></div>
          <div style={{marginTop:12, borderTop:'1px solid #eee', paddingTop:10, display:'flex', justifyContent:'space-between', fontWeight:700}}>
            <span>Total</span><span>{currency(subtotal)}</span>
          </div>
        </div>

        <div style={{marginTop:12}}>
          <button className="btn" onClick={()=> alert('Coming Soon — checkout flow is not implemented in this demo.')}>Checkout</button>
        </div>

        <div style={{marginTop:8}}>
          <button className="btn" onClick={onContinue} style={{background:'#fff', border:'1px solid #ddd', color:'#000'}}>Continue Shopping</button>
        </div>

        <div style={{marginTop:12}}>
          <button className="btn-small" onClick={()=>dispatch(clearCart())}>Clear Cart</button>
        </div>
      </aside>
    </div>
  );
}
