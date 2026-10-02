import React, { useState } from 'react';
import { CardView } from './CardView';
import { CardEffectsBuilder } from './CardEffectsBuilder';
import type { Card } from '../types/cardSchema';

export const CardCreator = () => {
    // 1. Initial data state
    const [cardData, setCardData] = useState<Card>({
        id: '26RSD01-000',
        name: 'New Card',
        type: 'Spirit',
        colors: ['Red'],
        cost: 0,
        reductions: [],
        symbols: [{ color: 'Red', type: 'Normal', amount: 1 }],
        families: [],
        rarity: ['Common'],
        hasLegacy: false,
        effects: [],
        imageUrl: '',
    } as Card);

    // 1.5 Local state for families input to prevent comma deletion issue
    const [familiesInput, setFamiliesInput] = useState<string>(cardData.families?.join(', ') || '');

    // 2. Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        // When switching card type, reset the template and keep only basic shared attributes
        if (name === 'type') {
            const baseCardData = {
                id: cardData.id,
                name: cardData.name,
                type: value as any,
                colors: cardData.colors,
                cost: cardData.cost,
                reductions: cardData.reductions,
                symbols: cardData.symbols,
                families: cardData.families,
                rarity: cardData.rarity,
                hasLegacy: false,
                effects: [],
                imageUrl: cardData.imageUrl,
            };

            if (value === 'Spirit') {
                setCardData({
                    ...baseCardData,
                    levels: [{ level: 1, coreCost: 1, bp: 1000 }]
                } as Card);
            } else if (value === 'Nexus') {
                setCardData({
                    ...baseCardData,
                    levels: [{ level: 1, coreCost: 0 }, { level: 2, coreCost: 1 }]
                } as Card);
            } else if (value === 'Magic') {
                setCardData({
                    ...baseCardData,
                    mainEffect: '',
                    flashEffect: '',
                    soulMagicConditionColor: undefined
                } as Card);
            }
            return;
        }

        // Update standard fields
        const newCardData = { ...cardData, [name]: name === 'cost' ? Number(value) : value } as Card;

        // Auto-update imageUrl when ID changes
        if (name === 'id') {
            const currentColor = (newCardData.colors && newCardData.colors.length > 0) ? newCardData.colors[0].toLowerCase() : 'red';
            newCardData.imageUrl = `/cards/${currentColor}/${value}.webp`;
        }

        setCardData(newCardData);
    };

    // Translate comma separated string into array for families attribute (available for all card types)
    const handleFamiliesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFamiliesInput(e.target.value);
        const arr = e.target.value.split(',').map(s => s.trim()).filter(s => s !== '');
        setCardData({ ...cardData, families: arr } as any);
    };

    // --- Reduction handlers ---
    const addReduction = () => {
        const currentReductions = cardData.reductions || [];
        setCardData({
            ...cardData,
            reductions: [...currentReductions, { color: 'Red', amount: 1 }]
        } as Card);
    };

    const updateReduction = (index: number, field: string, value: any) => {
        const newReductions = [...(cardData.reductions || [])];
        newReductions[index] = { ...newReductions[index], [field]: value };
        setCardData({ ...cardData, reductions: newReductions } as Card);
    };

    const removeReduction = (index: number) => {
        setCardData({
            ...cardData,
            reductions: (cardData.reductions || []).filter((_, i) => i !== index)
        } as Card);
    };

    // --- Symbol handlers ---
    const addSymbol = () => {
        setCardData({
            ...cardData,
            symbols: [...cardData.symbols, { color: 'Red', type: 'Normal', amount: 1 }]
        } as Card);
    };

    const updateSymbol = (index: number, field: string, value: any) => {
        const newSymbols = [...cardData.symbols];
        newSymbols[index] = { ...newSymbols[index], [field]: value };
        setCardData({ ...cardData, symbols: newSymbols } as Card);
    };

    const removeSymbol = (index: number) => {
        setCardData({
            ...cardData,
            symbols: cardData.symbols.filter((_, i) => i !== index)
        } as Card);
    };

    // 3. Transform data back to JS object format (remove quotes from keys)
    const exportData = { ...cardData };
    if (exportData.type === 'Magic') {
        delete (exportData as any).levels;
    }
    const jsCode = JSON.stringify(exportData, null, 2).replace(/"([a-zA-Z0-9_]+)":/g, '$1:');

    return (
        <div className="flex flex-col lg:flex-row gap-8 p-6 bg-slate-900 min-h-screen text-slate-200 font-sans">

            {/* Left side: Form to fill in data */}
            <div className="w-full lg:w-1/2 bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700">
                <h2 className="text-2xl font-bold mb-6 text-amber-400">Card Creator</h2>

                <div className="space-y-4">
                    {/* Basic info section (Card ID, Name) */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold mb-1 text-slate-400">Card ID</label>
                            <input
                                name="id"
                                value={cardData.id}
                                onChange={handleChange}
                                className="w-full p-2 bg-slate-700 rounded border border-slate-600 focus:border-amber-400 outline-none text-white"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1 text-slate-400">Name</label>
                            <input
                                name="name"
                                value={cardData.name}
                                onChange={handleChange}
                                className="w-full p-2 bg-slate-700 rounded border border-slate-600 focus:border-amber-400 outline-none text-white"
                            />
                        </div>
                    </div>

                    {/* Type, Cost, Rarity, Legacy */}
                    <div className="grid grid-cols-5 gap-4">
                        <div>
                            <label className="block text-sm font-semibold mb-1 text-slate-400">Color</label>
                            <select
                                name="colors"
                                value={cardData.colors?.[0] || 'Red'}
                                onChange={(e) => {
                                    const newColor = e.target.value as any;
                                    setCardData({
                                        ...cardData,
                                        colors: [newColor],
                                        imageUrl: `/cards/${newColor.toLowerCase()}/${cardData.id}.webp`
                                    } as Card);
                                }}
                                className="w-full p-2 bg-slate-700 rounded border border-slate-600 outline-none text-white cursor-pointer"
                            >
                                <option value="Red">Red</option>
                                <option value="Purple">Purple</option>
                                <option value="Green">Green</option>
                                <option value="White">White</option>
                                <option value="Yellow">Yellow</option>
                                <option value="Blue">Blue</option>
                                <option value="Colorless">Colorless</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1 text-slate-400">Type</label>
                            <select
                                name="type"
                                value={cardData.type}
                                onChange={handleChange}
                                className="w-full p-2 bg-slate-700 rounded border border-slate-600 outline-none text-white cursor-pointer"
                            >
                                <option value="Spirit">Spirit</option>
                                <option value="Nexus">Nexus</option>
                                <option value="Magic">Magic</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1 text-slate-400">Cost</label>
                            <input
                                type="number"
                                name="cost"
                                min="0"
                                value={cardData.cost}
                                onChange={handleChange}
                                className="w-full p-2 bg-slate-700 rounded border border-slate-600 outline-none text-white"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1 text-slate-400">Rarity</label>
                            <select
                                name="rarity"
                                value={cardData.rarity?.[0] || 'Common'}
                                onChange={(e) => {
                                    setCardData({
                                        ...cardData,
                                        rarity: [e.target.value]
                                    } as any);
                                }}
                                className="w-full p-2 bg-slate-700 rounded border border-slate-600 outline-none text-white cursor-pointer"
                            >
                                <option value="Common">Common</option>
                                <option value="Rare">Rare</option>
                                <option value="Master Rare">Master Rare</option>
                                <option value="X-Rare">X-Rare</option>
                                <option value="PR">PR</option>
                            </select>
                        </div>
                        <div className="flex items-end pb-2">
                            <label className="flex items-center space-x-2 text-sm text-slate-300 font-semibold cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="hasLegacy"
                                    checked={cardData.hasLegacy || false}
                                    onChange={(e) => setCardData({ ...cardData, hasLegacy: e.target.checked } as Card)}
                                    className="w-5 h-5 rounded border-slate-600 bg-slate-700 text-amber-500 focus:ring-amber-400"
                                />
                                <span className="text-amber-400">Legacy</span>
                            </label>
                        </div>
                    </div>

                    {/* Families field - Shared for ALL Card Types (Spirit, Nexus, Magic) */}
                    <div>
                        <label className="block text-sm font-semibold mb-1 text-slate-400">
                            Families
                        </label>
                        <input
                            value={familiesInput}
                            onChange={handleFamiliesChange}
                            placeholder="Use comma (,) to separate (e.g. Windfang, Red Cloud)"
                            className="w-full p-2 bg-slate-700 rounded border border-slate-600 outline-none text-white focus:border-amber-400"
                        />
                    </div>

                    {/* Reductions Section */}
                    <div className="p-4 bg-slate-900 rounded-lg border border-slate-700 space-y-3 mt-4">
                        <div className="flex justify-between items-center">
                            <h3 className="font-bold text-emerald-400">Reductions</h3>
                            <button
                                type="button"
                                onClick={addReduction}
                                className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white text-xs rounded font-bold transition-colors cursor-pointer"
                            >
                                + Add Reduction
                            </button>
                        </div>
                        {(cardData.reductions || []).map((red, index) => (
                            <div key={index} className="flex gap-2 items-center bg-slate-800 p-2 rounded border border-slate-700">
                                <select
                                    value={red.color}
                                    onChange={(e) => updateReduction(index, 'color', e.target.value)}
                                    className="p-1 bg-slate-700 rounded border border-slate-600 text-white text-sm cursor-pointer"
                                >
                                    <option value="Red">Red</option>
                                    <option value="Purple">Purple</option>
                                    <option value="Green">Green</option>
                                    <option value="White">White</option>
                                    <option value="Yellow">Yellow</option>
                                    <option value="Blue">Blue</option>
                                    <option value="Colorless">Colorless</option>
                                </select>
                                <input
                                    type="number"
                                    min="1"
                                    value={red.amount || 1}
                                    onChange={(e) => updateReduction(index, 'amount', Number(e.target.value))}
                                    className="w-16 p-1 bg-slate-700 rounded border border-slate-600 text-white text-sm"
                                    placeholder="Amt"
                                />
                                <button
                                    type="button"
                                    onClick={() => removeReduction(index)}
                                    className="ml-auto text-slate-400 hover:text-red-400 font-bold px-2 text-xl cursor-pointer"
                                >
                                    &times;
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Symbols Section */}
                    <div className="p-4 bg-slate-900 rounded-lg border border-slate-700 space-y-3 mt-4">
                        <div className="flex justify-between items-center">
                            <h3 className="font-bold text-amber-400">Symbols</h3>
                            <button
                                type="button"
                                onClick={addSymbol}
                                className="px-3 py-1 bg-amber-600 hover:bg-amber-500 text-white text-xs rounded font-bold transition-colors cursor-pointer"
                            >
                                + Add Symbol
                            </button>
                        </div>
                        {cardData.symbols.map((sym, index) => (
                            <div key={index} className="flex gap-2 items-center bg-slate-800 p-2 rounded border border-slate-700">
                                <select
                                    value={sym.color}
                                    onChange={(e) => updateSymbol(index, 'color', e.target.value)}
                                    className="p-1 bg-slate-700 rounded border border-slate-600 text-white text-sm cursor-pointer"
                                >
                                    <option value="Red">Red</option>
                                    <option value="Purple">Purple</option>
                                    <option value="Green">Green</option>
                                    <option value="White">White</option>
                                    <option value="Yellow">Yellow</option>
                                    <option value="Blue">Blue</option>
                                </select>
                                <input
                                    type="number"
                                    min="1"
                                    value={sym.amount || 1}
                                    onChange={(e) => updateSymbol(index, 'amount', Number(e.target.value))}
                                    className="w-16 p-1 bg-slate-700 rounded border border-slate-600 text-white text-sm"
                                    placeholder="Amt"
                                />
                                <label className="flex items-center space-x-1 text-sm text-slate-300 cursor-pointer ml-2">
                                    <input
                                        type="checkbox"
                                        checked={sym.type === 'EX'}
                                        onChange={(e) => updateSymbol(index, 'type', e.target.checked ? 'EX' : 'Normal')}
                                        className="w-4 h-4 rounded text-amber-500"
                                    />
                                    <span className="font-bold text-amber-500">EX</span>
                                </label>
                                <button
                                    type="button"
                                    onClick={() => removeSymbol(index)}
                                    className="ml-auto text-slate-400 hover:text-red-400 font-bold px-2 text-xl cursor-pointer"
                                >
                                    &times;
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Levels Section */}
                    {(cardData.type === 'Spirit' || cardData.type === 'Nexus') && (
                        <div className="p-4 bg-slate-900 rounded-lg border border-slate-700 space-y-3 mt-4">
                            <div className="flex justify-between items-center">
                                <h3 className="font-bold text-amber-400">Levels</h3>
                                <button
                                    type="button"
                                    onClick={() => {
                                        const newLevels = [...(cardData.levels || [])];
                                        const nextLevel = newLevels.length + 1;
                                        newLevels.push({ level: nextLevel, coreCost: 1, bp: cardData.type === 'Spirit' ? 1000 : undefined });
                                        setCardData({ ...cardData, levels: newLevels } as Card);
                                    }}
                                    className="px-3 py-1 bg-amber-600 hover:bg-amber-500 text-white text-xs rounded font-bold transition-colors cursor-pointer"
                                >
                                    + Add Level
                                </button>
                            </div>
                            {(cardData.levels || []).map((lvl: any, index: number) => (
                                <div key={index} className="flex flex-wrap gap-2 items-center bg-slate-800 p-2 rounded border border-slate-700">
                                    <span className="text-slate-300 font-bold text-sm w-12">LV {lvl.level}</span>

                                    <div className="flex items-center gap-1">
                                        <label className="text-xs text-slate-400">Core</label>
                                        <input
                                            type="number"
                                            min="0"
                                            value={lvl.coreCost}
                                            onChange={(e) => {
                                                const newLevels = [...cardData.levels];
                                                newLevels[index].coreCost = Number(e.target.value);
                                                setCardData({ ...cardData, levels: newLevels } as Card);
                                            }}
                                            className="w-16 p-1 bg-slate-700 rounded border border-slate-600 text-white text-sm"
                                        />
                                    </div>

                                    {cardData.type === 'Spirit' && (
                                        <div className="flex items-center gap-1">
                                            <label className="text-xs text-slate-400">BP</label>
                                            <input
                                                type="number"
                                                min="0"
                                                step="1000"
                                                value={lvl.bp || 0}
                                                onChange={(e) => {
                                                    const newLevels = [...cardData.levels];
                                                    newLevels[index].bp = Number(e.target.value);
                                                    setCardData({ ...cardData, levels: newLevels } as Card);
                                                }}
                                                className="w-20 p-1 bg-slate-700 rounded border border-slate-600 text-white text-sm"
                                            />
                                        </div>
                                    )}

                                    <label className="flex items-center space-x-1 text-sm text-slate-300 cursor-pointer ml-2">
                                        <input
                                            type="checkbox"
                                            checked={lvl.isTrueRelease || false}
                                            onChange={(e) => {
                                                const newLevels = [...cardData.levels];
                                                if (e.target.checked) {
                                                    newLevels[index].isTrueRelease = true;
                                                } else {
                                                    delete newLevels[index].isTrueRelease;
                                                }
                                                setCardData({ ...cardData, levels: newLevels } as Card);
                                            }}
                                            className="w-4 h-4 rounded text-amber-500"
                                        />
                                        <span className="font-bold text-amber-500 text-xs">True Release</span>
                                    </label>

                                    <button
                                        type="button"
                                        onClick={() => {
                                            const newLevels = cardData.levels.filter((_: any, i: number) => i !== index);
                                            newLevels.forEach((l: any, i: number) => { l.level = i + 1; });
                                            setCardData({ ...cardData, levels: newLevels } as Card);
                                        }}
                                        className="ml-auto text-slate-400 hover:text-red-400 font-bold px-2 text-xl cursor-pointer"
                                    >
                                        &times;
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Spirit & Nexus Card Effects Builder (Reusable component) */}
                    {(cardData.type === 'Spirit' || cardData.type === 'Nexus') && (
                        <CardEffectsBuilder
                            title={`${cardData.type} Effects Builder`}
                            effects={cardData.effects}
                            onChange={(newEffects) => setCardData({ ...cardData, effects: newEffects } as Card)}
                        />
                    )}

                    {/* Optional extra effects for Magic cards */}
                    {cardData.type === 'Magic' && (
                        <details className="text-sm bg-slate-900 p-3 rounded border border-slate-800">
                            <summary className="cursor-pointer text-slate-400 font-semibold hover:text-white">
                                + Additional Effects / Tags (Optional)
                            </summary>
                            <div className="mt-3">
                                <CardEffectsBuilder
                                    title="Extra Magic Effects"
                                    effects={cardData.effects}
                                    onChange={(newEffects) => setCardData({ ...cardData, effects: newEffects } as Card)}
                                />
                            </div>
                        </details>
                    )}

                    {/* Magic Card Specific Attributes (Main & Flash Effects) */}
                    {cardData.type === 'Magic' && (
                        <div className="p-4 bg-slate-950 rounded-lg border border-purple-800 space-y-4 my-4">
                            <h3 className="font-bold text-purple-400 mb-2">Magic Card Effects</h3>

                            {/* Soul Magic Color (Optional) */}
                            <div>
                                <label className="block text-sm font-semibold mb-1 text-slate-400">
                                    Soul Magic Condition Color (Optional)
                                </label>
                                <select
                                    name="soulMagicConditionColor"
                                    value={(cardData as any).soulMagicConditionColor || ''}
                                    onChange={handleChange}
                                    className="w-full p-2 bg-slate-700 rounded border border-slate-600 outline-none text-white cursor-pointer"
                                >
                                    <option value="">None</option>
                                    <option value="Red">Red</option>
                                    <option value="Purple">Purple</option>
                                    <option value="Green">Green</option>
                                    <option value="White">White</option>
                                    <option value="Yellow">Yellow</option>
                                    <option value="Blue">Blue</option>
                                </select>
                            </div>

                            {/* Main Effect */}
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded font-bold">Main</span>
                                    <label className="text-sm font-semibold text-slate-300">Main Effect</label>
                                </div>
                                <textarea
                                    name="mainEffect"
                                    value={(cardData as any).mainEffect || ''}
                                    onChange={handleChange}
                                    placeholder="Enter Main Step effect..."
                                    className="w-full p-2 bg-slate-700 rounded border border-slate-600 outline-none text-white h-20 resize-none focus:border-blue-400"
                                />
                            </div>

                            {/* Flash Effect */}
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="bg-amber-600 text-white text-xs px-2 py-0.5 rounded font-bold">Flash</span>
                                    <label className="text-sm font-semibold text-slate-300">Flash Effect</label>
                                </div>
                                <textarea
                                    name="flashEffect"
                                    value={(cardData as any).flashEffect || ''}
                                    onChange={handleChange}
                                    placeholder="Enter Flash timing effect..."
                                    className="w-full p-2 bg-slate-700 rounded border border-slate-600 outline-none text-white h-20 resize-none focus:border-amber-400"
                                />
                            </div>
                        </div>
                    )}

                    {/* Image URL */}
                    <div>
                        <label className="block text-sm font-semibold mb-1 text-slate-400">Image URL</label>
                        <input
                            name="imageUrl"
                            value={cardData.imageUrl || ''}
                            onChange={handleChange}
                            placeholder="/cards/26RSD01-001.png"
                            className="w-full p-2 bg-slate-700 rounded border border-slate-600 outline-none text-white focus:border-amber-400"
                        />
                    </div>

                    {/* JSON Output box */}
                    <div className="mt-8">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="font-bold text-emerald-400">JSON Output</h3>
                            <button
                                type="button"
                                onClick={() => navigator.clipboard.writeText(jsCode)}
                                className="bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1 rounded text-sm transition font-semibold cursor-pointer"
                            >
                                Copy JSON
                            </button>
                        </div>
                        <pre className="bg-slate-950 p-4 rounded border border-slate-800 text-sm overflow-x-auto text-emerald-300 h-64">
                            {jsCode}
                        </pre>
                    </div>

                </div>
            </div>

            {/* Right side: Live Preview */}
            <div className="w-full lg:w-1/2 flex flex-col items-center">
                <h2 className="text-2xl font-bold mb-6 text-cyan-400">Live Preview</h2>
                <div className="sticky top-20">
                    <CardView card={cardData} />
                </div>
            </div>

        </div>
    );
};
