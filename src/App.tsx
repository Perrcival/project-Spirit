import React, { useState } from 'react';
import { mockCards } from './data/mockCards';
import { CardView } from './components/CardView';
import { CardCreator } from './components/CardCreator';

function App() {
  // State for switching between Gallery and Creator (default is gallery)
  const [viewMode, setViewMode] = useState<'gallery' | 'creator'>('gallery');

  return (
    <div className="min-h-screen bg-slate-900 font-sans text-slate-200">

      {/* Navigation Bar / Header */}
      <header className="bg-slate-950 border-b border-slate-800 p-4 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-4">

          <div>
            <h1 className="text-xl md:text-2xl font-bold text-amber-400 m-0">Battle Spirits Web Simulator</h1>
            <p className="text-slate-400 text-sm m-0">Standard Format (26RSD01 onwards)</p>
          </div>

          {/* Toggle UI */}
          <div className="flex bg-slate-800 p-1 rounded-lg border border-slate-700">
            <button
              onClick={() => setViewMode('gallery')}
              className={`px-4 py-2 rounded-md text-sm font-semibold transition cursor-pointer ${viewMode === 'gallery' ? 'bg-cyan-600 text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
            >
              Card Gallery
            </button>
            <button
              onClick={() => setViewMode('creator')}
              className={`px-4 py-2 rounded-md text-sm font-semibold transition cursor-pointer ${viewMode === 'creator' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
            >
              Card Creator
            </button>
          </div>

        </div>
      </header>

      {/* Main Content Area */}
      <main>
        {viewMode === 'creator' ? (
          // Card Creator Mode
          <CardCreator />
        ) : (
          // Card Gallery Mode
          <div className="p-8">
            <div className="flex gap-6 flex-wrap justify-center">
              {mockCards.map((card) => (
                <CardView key={card.id} card={card} />
              ))}
            </div>
          </div>
        )}
      </main>

    </div>
  );
}

export default App;
