import React, { useState } from 'react';
import { CardView } from './CardView';
import type { Card } from '../types/cardSchema';

export const CardCreator = () => {
    // 1. initial data state
    const [cardData, setCardData] = useState<Card>({
        id: '26RSD01-000',
        name: 'New Card',
        type: 'Spirit',
        colors: ['Red'],
        cost: 0,
        reductions: [],
        symbols: [{ color: 'Red', type: 'Normal' }],
        hasLegacy: false,
        rarity: ['Common'],
        effects: ['[LV1-LV2] Example Effect'],
        imageUrl: '',
        families: [],
        levels: [{ level: 1, coreCost: 1, bp: 1000 }]
    } as Card);

    // 2. handle change function
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        // update data in edited field
        setCardData({ ...cardData, [name]: name === 'cost' ? Number(value) : value } as Card);
    };

    // 3. transform data back to JSON format
    const jsonCode = JSON.stringify(cardData, null, 2);

    return (
        <div className="flex flex-col lg:flex-row gap-8 p-6 bg-slate-900 min-h-screen text-slate-200 font-sans">

            {/* Left side: form to fill in data */}
            <div className="w-full lg:w-1/2 bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700">
                <h2 className="text-2xl font-bold mb-6 text-amber-400">Card Creator</h2>

                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold mb-1 text-slate-400">Card ID</label>
                            <input name="id" value={cardData.id} onChange={handleChange} className="w-full p-2 bg-slate-700 rounded border border-slate-600 focus:border-amber-400 outline-none text-white" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1 text-slate-400">Name</label>
                            <input name="name" value={cardData.name} onChange={handleChange} className="w-full p-2 bg-slate-700 rounded border border-slate-600 focus:border-amber-400 outline-none text-white" />
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-semibold mb-1 text-slate-400">Type</label>
                            <select name="type" value={cardData.type} onChange={handleChange} className="w-full p-2 bg-slate-700 rounded border border-slate-600 outline-none text-white">
                                <option value="Spirit">Spirit</option>
                                <option value="Nexus">Nexus</option>
                                <option value="Magic">Magic</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1 text-slate-400">Cost</label>
                            <input type="number" name="cost" value={cardData.cost} onChange={handleChange} className="w-full p-2 bg-slate-700 rounded border border-slate-600 outline-none text-white" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-1 text-slate-400">Image URL</label>
                        <input name="imageUrl" value={cardData.imageUrl || ''} onChange={handleChange} placeholder="/cards/26RSD01/26RSD01-000.webp" className="w-full p-2 bg-slate-700 rounded border border-slate-600 outline-none text-white" />
                    </div>

                    {/* JSON Output box to copy and paste into mockCards.ts */}
                    <div className="mt-8">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="font-bold text-emerald-400">JSON Output</h3>
                            <button
                                onClick={() => navigator.clipboard.writeText(jsonCode)}
                                className="bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1 rounded text-sm transition font-semibold cursor-pointer"
                            >
                                Copy JSON
                            </button>
                        </div>
                        <pre className="bg-slate-950 p-4 rounded border border-slate-800 text-sm overflow-x-auto text-emerald-300 h-64">
                            {jsonCode}
                        </pre>
                    </div>

                </div>
            </div>

            {/* Right side: Live Preview */}
            <div className="w-full lg:w-1/2 flex flex-col items-center">
                <h2 className="text-2xl font-bold mb-6 text-cyan-400">Live Preview</h2>

                {/* display cardView component by passing data from form */}
                <div className="sticky top-6">
                    <CardView card={cardData} />
                </div>
            </div>

        </div>
    );
};
