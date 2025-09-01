import React from 'react';
import { useSelector } from 'react-redux';

function IconCart(){ return (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 3h2l.4 2M7 13h10l3-8H6.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><circle cx="9" cy="20" r="1.75" /><circle cx="17" cy="20" r="1.75" /></svg>
);}

export default function Header({ current, onNavigate }) {
  const cart = useSelector(s => s.cart);
  const totalItems = Object.values(cart).reduce((s, it) => s + it.qty, 0);

  return (
    <header className="header">
      <div className="logo" onClick={()=> onNavigate('/')}>
        <span style={{fontSize:20}}>🌿</span>
        <span>Paradise Nursery</span>
      </div>
      <nav className="nav" style={{display:'flex', alignItems:'center'}}>
        {current !== '/products' && <button onClick={()=> onNavigate('/products') } className={current==='/products' ? 'active':''}>Browse Plants</button>}
        {current !== '/cart' && <button onClick={()=> onNavigate('/cart') }>Cart</button>}
        <button className="cart-btn" onClick={()=> onNavigate('/cart')} aria-label="view cart">
          <IconCart />
          <span className="cart-count">{totalItems}</span>
        </button>
      </nav>
    </header>
  );
}
