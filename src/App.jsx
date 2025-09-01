import React, { useState } from 'react';
import Header from './components/Header';
import Landing from './pages/Landing';
import Products from './pages/Products';
import CartPage from './pages/CartPage';

export default function App(){
  // tiny hash router state:
  const [route, setRoute] = useState(window.location.hash.replace('#','') || '/');

  React.useEffect(() => {
    const onHash = () => setRoute(window.location.hash.replace('#','') || '/');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  },[]);

  const navigate = (to) => {
    window.location.hash = to;
  };

  let page;
  if (route === '/products') page = <Products />;
  else if (route === '/cart') page = <CartPage onContinue={() => navigate('/products')} />;
  else page = <Landing onGetStarted={() => navigate('/products')} />;

  return (
    <div>
      <Header current={route} onNavigate={(to)=>navigate(to)} />
      <main className="container">
        {page}
      </main>
      <footer className="footer">© {new Date().getFullYear()} Paradise Nursery</footer>
    </div>
  );
}
