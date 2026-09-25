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
        families: [],
        rarity: ['Common'],
        hasLegacy: false,
        effects: [],
        imageUrl: '',
        levels: [{ level: 1, coreCost: 1, bp: 1000 }]
    } as Card);

    // 2. handle change function
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        // when select another card type, reset default values of that type
        if (name === 'type') {
            let defaultOverrides = {};
            if (value === 'Spirit') {
                defaultOverrides = { families: [], levels: [{ level: 1, coreCost: 1, bp: 1000 }] };
            } else if (value === 'Nexus') {
                defaultOverrides = { families: [], levels: [{ level: 1, coreCost: 0 }] };
            } else if (value === 'Magic') {
                defaultOverrides = { mainEffect: '', flashEffect: '', soulMagicConditionColor: undefined };
            }
            setCardData({ ...cardData, type: value as any, ...defaultOverrides } as Card);
            return;
        }
        // update data in edited field
        setCardData({ ...cardData, [name]: name === 'cost' ? Number(value) : value } as Card);
    };

    //translate comma separated string into array and update state (for families attribute)
    const handleFamiliesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const arr = e.target.value.split(',').map(s => s.trim()).filter(s => s !== '');
        setCardData({ ...cardData, families: arr } as any);
    };

    // --- Symbol handlers ---
    const addSymbol = () => {
        setCardData({ ...cardData, symbols: [...cardData.symbols, { color: 'Red', type: 'Normal', amount: 1 }] } as Card);
    };

    const updateSymbol = (index: number, field: string, value: any) => {
        const newSymbols = [...cardData.symbols];
        newSymbols[index] = { ...newSymbols[index], [field]: value };
        setCardData({ ...cardData, symbols: newSymbols } as Card);
    };

    const removeSymbol = (index: number) => {
        setCardData({ ...cardData, symbols: cardData.symbols.filter((_, i) => i !== index) } as Card)
    };

    // --- Effect Handlers
    const addEffect = () => {
        setCardData({ ...cardData, effects: [...cardData.effects, { levels: [1], tags: [], description: '' }] } as Card);
    };

    const updateEffect = (index: number, field: string, value: any) => {
        const newEffects = [...cardData.effects];
        if (typeof newEffects[index] !== 'string') {
            newEffects[index] = { ...newEffects[index], [field]: value };
        }
        setCardData({ ...cardData, effects: newEffects } as Card);
    };

    const addTagToEffect = (effectIndex: number) => {
        const newEffects = [...cardData.effects];
        if (typeof newEffects[effectIndex] !== 'string') {
            const eff = newEffects[effectIndex] as any;
            eff.tags = [...(eff.tags || []), { color: 'Orange', name: 'New Tag' }];
        }
        setCardData({ ...cardData, effects: newEffects } as Card);
    };

    const updateTag = (effectIndex: number, tagIndex: number, field: string, value: any) => {
        const newEffects = [...cardData.effects];
        if (typeof newEffects[effectIndex] !== 'string') {
            const eff = newEffects[effectIndex] as any;
            eff.tags[tagIndex] = { ...eff.tags[tagIndex], [field]: value };
        }
        setCardData({ ...cardData, effects: newEffects } as Card);
    };

    const removeTag = (effectIndex: number, tagIndex: number) => {
        const newEffects = [...cardData.effects];
        if (typeof newEffects[effectIndex] !== 'string') {
            const eff = newEffects[effectIndex] as any;
            eff.tags = eff.tags.filter((_: any, i: number) => i !== tagIndex);
        }
        setCardData({ ...cardData, effects: newEffects } as Card);
    };

    const removeEffect = (index: number) => {
        const newEffects = cardData.effects.filter((_, i) => i !== index);
        setCardData({ ...cardData, effects: newEffects } as Card);
    };

    // 3. transform data back to JSON format
    const jsonCode = JSON.stringify(cardData, null, 2);

    return (
        <div className="flex flex-col lg:flex-row gap-8 p-6 bg-slate-900 min-h-screen text-slate-200 font-sans">

            {/* Left side: form to fill in data */}
            <div className="w-full lg:w-1/2 bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700">
                <h2 className="text-2xl font-bold mb-6 text-amber-400">Card Creator</h2>


                {/*
                
                ------- First Section -------
                
                - ID
                - Name /
                - Type /
                - Cost /
                - Colors X
                - Legacy /
                - Rarity X
                - Family X


                */}
                <div className="space-y-4">
                    {/* Basic info section (Card ID, Name, Type, Cost, Image URL) */}
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
                            <select name="type" value={cardData.type} onChange={handleChange}
                                className="w-full p-2 bg-slate-700 rounded border border-slate-600 outline-none text-white">
                                <option value="Spirit">Spirit</option>
                                <option value="Nexus">Nexus</option>
                                <option value="Magic">Magic</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1 text-slate-400">Cost</label>
                            <input type="number" name="cost" value={cardData.cost} onChange={handleChange}
                                className="w-full p-2 bg-slate-700 rounded border border-slate-600 outline-none text-white"
                            />
                        </div>
                        <div className="flex items-end pb-2">
                            <label className="flex items-center space-x-2 text-sm text-slate-300 font-semibold cursor-pointer">
                                <input type="checkbox" name="hasLegacy" checked={cardData.hasLegacy || false}
                                    onChange={(e) => setCardData({ ...cardData, hasLegacy: e.target.checked } as Card)}
                                    className="w-5 h-5 rounded border-slate-600 bg-slate-700 text-amber-500 focus:ring-amber-400" />
                                <span className="tet-amber-400">Legacy</span>
                            </label>
                        </div>
                    </div>


                    {/*
                    
                    ------- Second Section ------- 
                    
                    - Specific Data for each card type
                    - Spirit
                        - LV1,LV2,LV3
                        - True Release
                        - BP
                    - Magic
                        - Soul Magic Condition Color
                        - Main Effect
                        - Flash Effect
                    - Nexus
                        - LV1,LV2,LV3
                        - True Release
                        
                    
                    */}
                    {/* Dynamic Attributes based on card type */}
                    <div className="p-4 bg-slate-950 rounded-lg border border-slate-700 space-y-4 my-4">
                        <h3 className="font-bold text-cyan-400 mb-2">{cardData.type} Attribute</h3>

                        {/* Spirit Card */}
                        {cardData.type === 'Spirit' && (
                            <div className='space-y-4'>
                                {/*Families field*/}
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-slate-400">Families</label>
                                    <input value={(cardData as any).families?.join(',') || ''} onChange={handleFamiliesChange}
                                        placeholder="use comma (,) to separate different families"
                                        className="w=full p-2 bg-slate-700 rounded border border-slate-600 outline-none text-white" />
                                </div>
                            </div>
                        )}

                        {/* Magic Card */}
                        {cardData.type === 'Magic' && (
                            <div className='space-y-4'>
                                {/*Soul Magic Color(optional)*/}
                                <div>
                                    <label className='block text-sm font-semibold mb-1 text-slate-400'>Soul Magic Color(optional)</label>
                                    <select name="soulMagicConditionColor" value={(cardData as any).soulMagicConditionColor || ''} onChange={handleChange}
                                        className="w-full p-2 bg-slate-700 rounded border border-slate-600 outline-none text-white">
                                        <option value="">None</option>
                                        <option value="Red">Red</option>
                                        <option value="Purple">Purple</option>
                                        <option value="Green">Green</option>
                                        <option value="White">White</option>
                                        <option value="Yellow">Yellow</option>
                                        <option value="Blue">Blue</option>
                                    </select>
                                </div>

                                {/*Main Effect*/}
                                <div>
                                    <label className='block text-sm font-semibold mb-1 text-slate-400'>Main Effect</label>
                                    <input name='mainEffect' value={(cardData as any).mainEffect || ''} onChange={handleChange}
                                        placeholder='e.g. [LV1-2] effect'
                                        className='w-full p-2 bg-slate-700 rounded border border-slate-600 outline-none text-white' />
                                </div>

                                {/*Flash Effect*/}
                                <div>
                                    <label className='block text-sm font-semibold mb-1 text-slate-400'>Flash Effect</label>
                                    <input name='flashEffect' value={(cardData as any).flashEffect || ''} onChange={handleChange}
                                        placeholder='e.g. [Flash] effect'
                                        className='w-full p-2 bg-slate-700 rounded border border-slate-600 outline-none text-white' />
                                </div>
                            </div>
                        )}

                        {/*Nexus Card}*/}
                    </div>


                    {/*
                    
                    ------- Third Section -------
                    - Symbols
                    - Image URL
                    
                    */}
                    {/* Symbols Section */}
                    <div className='p-4 bg-slate-900 rounded-lg border border-slate-700 space-y-3 mt-4'>
                        <div className="flex justify-between items-center">
                            <h3 className='font-bold text-amber-400'>
                                Symbols
                            </h3>
                            <button onClick={addSymbol} className='px-3 py-1 bg-amber-600 hover:bg-amber-500 text-white text-xs rounded font-bold transition-colors'>
                                + Add Symbol
                            </button>
                        </div>
                        {cardData.symbols.map((sym, index) => (
                            <div key={index} className='flex gap-2 items-center bg-slate-600 text-white text-sm'>
                                <select value={sym.color} onChange={(e) => updateSymbol(index, 'color', e.target.value)}
                                    className='p-1 bg-slate-700 rounded border border-slate-600 text-white text-sm'>
                                    <option value={"Red"}>Red</option>
                                    <option value={"Purple"}>Purple</option>
                                    <option value={"Green"}>Green</option>
                                    <option value={"White"}>White</option>
                                    <option value={"Yellow"}>Yellow</option>
                                    <option value={"Blue"}>Blue</option>
                                </select>
                                <input type="number" min="0" value={sym.amount || 0} onChange={(e) => updateSymbol(index, 'amount', Number(e.target.value))}
                                    className='w-16 p-1 bg-slate-700 rounded border border-slate-600 text-white text-sm' />
                                <label className='flex items-center space-x-1 text-sm text-slate-300 cursor-pointer m1-2'>
                                    <input type="checkbox" checked={sym.type === 'EX'}
                                        onChange={(e) => updateSymbol(index, 'type', e.target.checked ? 'EX' : 'Normal')}
                                        className='w-4 h-4 rounded text-amber-500' />
                                    <span className="font-bold text-amber-500">EX</span>
                                </label>
                                <button onClick={() => removeSymbol(index)} className="m1-auto text-slate-400 hover:text-red-400 font-bold px-2 text-xl">&times;</button>
                            </div>
                        ))}
                    </div>
                    {/*Image URL*/}
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
