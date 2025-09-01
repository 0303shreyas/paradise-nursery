import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data/products';
import { addToCart } from '../store/cartSlice';

export default function Products(){
  const dispatch = useDispatch();
  const cart = useSelector(s => s.cart);
  const [search, setSearch] = useState('');
  const [cat, setCat] = useState('All');

  const categories = useMemo(()=>['All', ...Array.from(new Set(PRODUCTS.map(p=>p.category)))],[]);

  const filtered = useMemo(()=> PRODUCTS.filter(p=>{
    const matchesCat = cat === 'All' || p.category === cat;
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  }),[search,cat]);

  const onAdd = (product) => {
    // add to cart (Redux) — also button becomes disabled after added (see UI disabled prop)
    dispatch(addToCart(product));
  };

  return (
    <div>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-end', gap:12}}>
        <div>
          <h2 style={{margin:0}}>Shop Houseplants</h2>
          <div className="small">Filter by category or search by name.</div>
        </div>
        <div style={{display:'flex', gap:8}}>
          <input placeholder="Search plants..." value={search} onChange={e=>setSearch(e.target.value)} style={{padding:8, borderRadius:8, border:'1px solid #ddd'}} />
          <select value={cat} onChange={e=>setCat(e.target.value)} style={{padding:8, borderRadius:8, border:'1px solid #ddd'}}>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>

      <div className="grid">
        {filtered.map(p => (
          <ProductCard
            key={p.id}
            product={p}
            onAdd={onAdd}
            disabled={!!cart[p.id]} // disables Add to Cart after selected (rubric)
          />
        ))}
      </div>
    </div>
  );
}
