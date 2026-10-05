import { useState, useMemo } from 'react';
import { mockCards } from '../data/mockCards';
import type { Card } from '../types/cardSchema';
import { CardModal } from './CardModal';
import { CardFilter } from './CardFilter';

interface DeckEntry {
    card: Card;
    count: number;
}

export const DeckBuilder = () => {
    const [deck, setDeck] = useState<DeckEntry[]>([]);
    const [selectedCard, setSelectedCard] = useState<Card | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterColor, setFilterColor] = useState('All');
    const [filterType, setFilterType] = useState('All');
    const [sortBy, setSortBy] = useState<'id' | 'cost'>('id');

    // Filter library cards
    const filteredLibrary = useMemo(() => {
        let result = mockCards;
        if (searchTerm) {
            const lower = searchTerm.toLowerCase();
            result = result.filter(c => c.name.toLowerCase().includes(lower) || c.id.toLowerCase().includes(lower));
        }
        if (filterColor !== 'All') {
            result = result.filter(c => c.colors.includes(filterColor as any));
        }
        if (filterType !== 'All') {
            result = result.filter(c => c.type === filterType);
        }
        
        result = [...result].sort((a, b) => {
            if (sortBy === 'cost') return a.cost - b.cost;
            return a.id.localeCompare(b.id);
        });

        return result;
    }, [searchTerm, filterColor, filterType, sortBy]);

    const totalCards = deck.reduce((sum, entry) => sum + entry.count, 0);

    const addCard = (card: Card) => {
        setDeck(prev => {
            const existing = prev.find(e => e.card.name === card.name);
            if (existing) {
                if (existing.count >= 3) return prev; // Max 3 per name limit for standard formats
                return prev.map(e => e.card.name === card.name ? { ...e, count: e.count + 1 } : e);
            }
            return [...prev, { card, count: 1 }];
        });
    };

    const removeCard = (cardName: string) => {
        setDeck(prev => {
            const existing = prev.find(e => e.card.name === cardName);
            if (!existing) return prev;
            if (existing.count > 1) {
                return prev.map(e => e.card.name === cardName ? { ...e, count: e.count - 1 } : e);
            }
            return prev.filter(e => e.card.name !== cardName);
        });
    };

    return (
        <div className="p-4 max-w-[2000px] mx-auto h-[calc(100vh-80px)] flex gap-4 overflow-hidden flex-col md:flex-row">
            {/* Library Panel (Left) */}
            <div className="flex-[2] bg-slate-800 rounded-xl border border-slate-700 flex flex-col overflow-hidden">
                <div className="p-4 bg-slate-900 border-b border-slate-700 flex flex-wrap gap-4 items-center justify-between">
                    <h2 className="font-bold text-slate-300">Card Library</h2>
                    <CardFilter 
                        searchTerm={searchTerm} setSearchTerm={setSearchTerm}
                        filterColor={filterColor} setFilterColor={setFilterColor}
                        filterType={filterType} setFilterType={setFilterType}
                        sortBy={sortBy} setSortBy={setSortBy}
                        layout="deckbuilder"
                    />
                </div>

                <div className="flex-1 overflow-y-auto p-4 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center">
                    {filteredLibrary.map(card => (
                        <div
                            key={card.id}
                            onClick={() => addCard(card)}
                            className="cursor-pointer hover:-translate-y-1 transition-transform group relative w-[220px] h-[320px]"
                        >
                            {card.imageUrl ? (
                                <img src={card.imageUrl} alt={card.name} className="w-[220px] h-[320px] object-cover rounded-xl shadow-lg border-2 border-slate-700 group-hover:border-emerald-400" />
                            ) : (
                                <div className="w-[220px] h-[320px] bg-slate-900 rounded-xl shadow-lg border border-slate-700 group-hover:border-emerald-400 flex items-center justify-center p-2 text-center text-xs font-semibold text-slate-400">
                                    {card.name}
                                </div>
                            )}
                            <div className="absolute top-1 right-1 bg-black/80 text-emerald-400 font-bold text-xs px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity shadow pointer-events-none">
                                +
                            </div>
                            <button
                                onClick={(e) => { e.stopPropagation(); setSelectedCard(card); }}
                                className="absolute bottom-3 right-3 w-20 h-7 bg-amber-600/90 hover:bg-amber-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg z-10 cursor-pointer flex items-center justify-center text-sm font-bold border-2 border-slate-900"
                                title="View Details"
                            >
                                expand
                            </button>
                        </div>
                    ))}
                    {filteredLibrary.length === 0 && (
                        <div className="col-span-full py-8 text-slate-500 font-bold">No cards found.</div>
                    )}
                </div>
            </div>

            {/* Deck List Panel (Right) */}
            <div className="flex-[1] bg-slate-800 rounded-xl border border-slate-700 flex flex-col overflow-hidden min-w-[300px] shadow-lg">
                <div className="p-4 bg-slate-900 border-b border-slate-700 flex justify-between items-center shadow-sm z-10">
                    <h2 className="font-bold text-amber-400">My Deck</h2>
                    <span className={`px-3 py-1 rounded-full text-sm font-bold border ${totalCards >= 40 ? 'bg-emerald-900/50 border-emerald-500 text-emerald-400' : 'bg-slate-800 border-slate-600 text-slate-300'}`}>
                        {totalCards} / 40+
                    </span>
                </div>

                <div className="flex-1 overflow-y-auto p-3 grid grid-cols-2 xl:grid-cols-3 gap-4 content-start">
                    {deck.map(entry => (
                        <div
                            key={entry.card.name}
                            className="flex flex-col items-center group relative"
                        >
                            <div className="w-full relative aspect-[5/7] rounded-lg shadow-lg border-2 border-slate-700 group-hover:border-amber-400 transition-colors overflow-hidden">
                                {entry.card.imageUrl ? (
                                    <img src={entry.card.imageUrl} alt={entry.card.name} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full bg-slate-900 flex items-center justify-center p-2 text-center text-xs font-semibold text-slate-400">
                                        {entry.card.name}
                                    </div>
                                )}

                                {/* View Details (Expand) Button */}
                                <button
                                    onClick={(e) => { e.stopPropagation(); setSelectedCard(entry.card); }}
                                    className="absolute bottom-3 right-3 w-20 h-7 bg-amber-600/90 hover:bg-amber-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg z-10 cursor-pointer flex items-center justify-center text-sm font-bold border-2 border-slate-900"
                                    title="View Details"
                                >
                                    expand
                                </button>
                            </div>

                            {/* +/- Buttons Below Card */}
                            <div className="flex items-center justify-between w-full mt-2 bg-slate-900 p-1 rounded-md border border-slate-800">
                                <button onClick={() => removeCard(entry.card.name)} className="flex-1 h-7 rounded bg-red-900/50 text-red-400 hover:bg-red-600 hover:text-white flex items-center justify-center font-bold cursor-pointer transition-colors">-</button>
                                <span className="text-sm font-bold w-6 text-center text-slate-200">{entry.count}</span>
                                <button onClick={() => addCard(entry.card)} className="flex-1 h-7 rounded bg-emerald-900/50 text-emerald-400 hover:bg-emerald-600 hover:text-white flex items-center justify-center font-bold cursor-pointer transition-colors">+</button>
                            </div>
                        </div>
                    ))}
                    {deck.length === 0 && (
                        <div className="col-span-full text-center p-8 text-slate-500 text-sm">
                            Click cards from the library to add them to your deck.
                        </div>
                    )}
                </div>

                <div className="p-4 bg-slate-900 border-t border-slate-700">
                    <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg shadow transition-colors cursor-pointer flex justify-center items-center gap-2">
                        💾 Save Deck (Coming Soon)
                    </button>
                </div>
            </div>

            {/* Modal Popup */}
            {selectedCard && (
                <CardModal card={selectedCard} onClose={() => setSelectedCard(null)} />
            )}
        </div>
    );
};
