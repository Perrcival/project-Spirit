import { useState } from 'react';
import { mockCards } from './data/mockCards';
import { CardModal } from './components/CardModal';
import type { Card } from './types/cardSchema';

function App() {
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  return (
    <div style={{ padding: '24px', backgroundColor: '#0f172a', minHeight: '100vh', color: '#fff', fontFamily: 'sans-serif' }}>
      <header style={{ marginBottom: '24px', textAlign: 'center' }}>
        <h1 style={{ margin: 0, color: '#f59e0b' }}>Battle Spirits Web Simulator 🎴</h1>
        <p style={{ color: '#94a3b8' }}>Standard Format (26RSD01 onwards) - Card Gallery</p>
      </header>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {mockCards.map((card) => (
          <div 
            key={card.id} 
            onClick={() => setSelectedCard(card)}
            style={{ 
              cursor: 'pointer', 
              transition: 'transform 0.2s', 
              borderRadius: '8px', 
              overflow: 'hidden',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.5)'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            {card.imageUrl ? (
              <img 
                src={card.imageUrl} 
                alt={card.name} 
                style={{ width: '200px', height: '280px', objectFit: 'cover', display: 'block' }} 
              />
            ) : (
              <div style={{ width: '200px', height: '280px', backgroundColor: '#334155', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ padding: '8px', textAlign: 'center' }}>{card.name}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedCard && (
        <CardModal card={selectedCard} onClose={() => setSelectedCard(null)} />
      )}
    </div>
  );
}

export default App;
