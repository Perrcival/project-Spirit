import React, { useState, useMemo } from 'react';
import { CardModal } from './CardModal';
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
            <div className="bg-slate-800 p-4 rounded-xl mb-8 shadow-md border border-slate-700 flex flex-wrap gap-4 items-end">
                {/* Search */}
                <div className="flex-1 min-w-[200px]">
                    <label className="block text-xs font-semibold text-slate-400 mb-1">Search</label>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search Name, ID, or Family..."
                        className="w-full p-2 bg-slate-900 border border-slate-600 rounded-lg text-sm text-white focus:border-cyan-400 outline-none transition-colors"
                    />
                </div>
                {/* Color Filter */}
                <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">Color</label>
                    <select value={filterColor} onChange={e => setFilterColor(e.target.value)} className="p-2 bg-slate-900 border border-slate-600 rounded-lg text-sm text-white outline-none cursor-pointer">
                        <option value="All">All Colors</option>
                        <option value="Red">Red</option>
                        <option value="Purple">Purple</option>
                        <option value="Green">Green</option>
                        <option value="White">White</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Blue">Blue</option>
                    </select>
                </div>
                {/* Type Filter */}
                <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">Card Type</label>
                    <select value={filterType} onChange={e => setFilterType(e.target.value)} className="p-2 bg-slate-900 border border-slate-600 rounded-lg text-sm text-white outline-none cursor-pointer">
                        <option value="All">All Types</option>
                        <option value="Spirit">Spirit</option>
                        <option value="Nexus">Nexus</option>
                        <option value="Magic">Magic</option>
                    </select>
                </div>
                {/* Sort By */}
                <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">Sort By</label>
                    <select value={sortBy} onChange={e => setSortBy(e.target.value as any)} className="p-2 bg-slate-900 border border-slate-600 rounded-lg text-sm text-white outline-none cursor-pointer">
                        <option value="id">Card ID</option>
                        <option value="cost">Cost (Low to High)</option>
                    </select>
                </div>
            </div>

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
                                className="w-[200px] h-[280px] object-cover rounded-xl shadow-lg border-2 border-slate-700 group-hover:border-cyan-400 bg-slate-950"
                            />
                        ) : (
                            <div className="w-[200px] h-[280px] bg-slate-800 rounded-xl shadow-lg border-2 border-slate-700 group-hover:border-cyan-400 flex items-center justify-center text-center p-4">
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
