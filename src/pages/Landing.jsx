import React from 'react';

export default function Landing({ onGetStarted }){
  return (
    <div>
      <section className="hero">
        <div className="overlay">
          <h1>Bring Paradise Home</h1>
          <p>We curate easy-care houseplants that thrive in real homes. Discover greenery for every light level and style—delivered with love.</p>
          <div style={{marginTop:12}}>
            <button className="btn" onClick={onGetStarted}>Get Started →</button>
          </div>
        </div>
      </section>

      <section style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:18, marginTop:20}}>
        <div className="card" style={{padding:16}}>
          <div style={{fontSize:26}}>🪴</div>
          <h3 style={{margin:'8px 0 4px'}}>Beginner Friendly</h3>
          <p className="small">Tough plants that forgive missed waterings.</p>
        </div>
        <div className="card" style={{padding:16}}>
          <div style={{fontSize:26}}>🌞</div>
          <h3 style={{margin:'8px 0 4px'}}>Right-Light Guide</h3>
          <p className="small">Shop by low, medium, or bright light.</p>
        </div>
        <div className="card" style={{padding:16}}>
          <div style={{fontSize:26}}>🚚</div>
          <h3 style={{margin:'8px 0 4px'}}>Fast Delivery</h3>
          <p className="small">Packed with care, shipped with protection.</p>
        </div>
      </section>
    </div>
  );
}
