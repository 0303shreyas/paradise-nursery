import React from 'react';

export default function ProductCard({ product, disabled, onAdd }){
  return (
    <article className="card">
      <img src={product.image} alt={product.name} /> {/* <- fixed here */}
      <div className="body">
        <div className="row">
          <div>
            <div style={{fontWeight:600}}>{product.name}</div>
            <div className="small">{product.category}</div>
          </div>
          <div style={{fontWeight:700}}>${product.price.toFixed(2)}</div>
        </div>
        <button
          className="btn"
          onClick={() => onAdd(product)}
          disabled={disabled}
          style={disabled ? { opacity: 0.6, cursor: 'not-allowed' } : {}}
        >
          {disabled ? 'Added' : 'Add to Cart'}
        </button>
      </div>
    </article>
  );
}
