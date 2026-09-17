import { mockCards } from './data/mockCards';
import { CardView } from './components/CardView';

function App() {
  return (
    <div style={{ padding: '24px', backgroundColor: '#0f172a', minHeight: '100vh', color: '#fff', fontFamily: 'sans-serif' }}>
      <header style={{ marginBottom: '24px', textAlign: 'center' }}>
        <h1 style={{ margin: 0, color: '#f59e0b' }}>Battle Spirits Web Simulator 🎴</h1>
        <p style={{ color: '#94a3b8' }}>Standard Format (26RSD01 onwards) - Card Gallery</p>
      </header>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {mockCards.map((card) => (
          <CardView key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default App;
