import { useState, useMemo } from 'react';
import { CardModal } from './CardModal';
import { CardFilter } from './CardFilter';
import { mockCards } from '../data/mockCards';
import type { Card } from '../types/cardSchema';

export const CardGallery = () => {
    const [selectedCard, setSelectedCard] = useState<Card | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterColor, setFilterColor] = useState('All');
    const [filterType, setFilterType] = useState('All');
    const [sortBy, setSortBy] = useState<'id' | 'cost'>('id');

    // Search, filter and sort cards
    const filteredCards = useMemo(() => {
        let result = mockCards;

        // 1. Search
        if (searchTerm) {
            const lowerTerm = searchTerm.toLowerCase();
            result = result.filter(c =>
                c.name.toLowerCase().includes(lowerTerm) ||
                c.id.toLowerCase().includes(lowerTerm) ||
                (c.families && c.families.some(f => f.toLowerCase().includes(lowerTerm)))
            );
        }

        // 2. Filter by color
        if (filterColor !== 'All') {
            result = result.filter(c => c.colors.includes(filterColor as any));
        }

        // 3. Filter by type
        if (filterType !== 'All') {
            result = result.filter(c => c.type === filterType);
        }

        // 4. Sort by
        result = [...result].sort((a, b) => {
            if (sortBy === 'cost') {
                return a.cost - b.cost;
            }
            return a.id.localeCompare(b.id);
        });

        return result;
    }, [searchTerm, filterColor, filterType, sortBy]);

    return (
        <div className="p-6 max-w-7xl mx-auto">
            {/* Control Panel (Filter/Sort) */}
            <CardFilter 
                searchTerm={searchTerm} setSearchTerm={setSearchTerm}
                filterColor={filterColor} setFilterColor={setFilterColor}
                filterType={filterType} setFilterType={setFilterType}
                sortBy={sortBy} setSortBy={setSortBy}
                layout="gallery"
            />

            {/* Gallery Grid */}
            <div className="flex gap-6 flex-wrap justify-center">
                {filteredCards.length > 0 ? filteredCards.map((card) => (
                    <div
                        key={card.id}
                        className="cursor-pointer hover:-translate-y-2 transition-transform duration-200 relative group"
                        onClick={() => setSelectedCard(card)}
                    >
                        {card.imageUrl ? (
                            <img
                                src={card.imageUrl}
                                alt={card.name}
                                className="w-[220px] h-[320px] object-cover rounded-xl shadow-lg border-2 border-slate-700 group-hover:border-cyan-400 bg-slate-950"
                            />
                        ) : (
                            <div className="w-[220px] h-[320px] bg-slate-800 rounded-xl shadow-lg border-2 border-slate-700 group-hover:border-cyan-400 flex items-center justify-center text-center p-4">
                                <span className="text-slate-400 font-bold">{card.name}</span>
                            </div>
                        )}
                    </div>
                )) : (
                    <div className="text-slate-500 font-bold text-xl py-12 w-full text-center">
                        No cards found.
                    </div>
                )}
            </div>

            {/* Modal Popup */}
            {selectedCard && (
                <CardModal card={selectedCard} onClose={() => setSelectedCard(null)} />
            )}
        </div>
    );
};
