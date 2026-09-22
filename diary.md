17/09/2026 : I'm bored at work so I start this project. I want to created a card game as a web game, where everyone can enjoy. Hope it won't get taken down by license issue. 

21/09/2026 : I finish the prototype UI for the card gallery. I also start to implement the card data. It's take me all day to import cards data one by one. At least I'm done. BUT! this need to be improve, I need to find the way to create cards in more efficient ways.


import React, { useState } from 'react';
import { CardView } from './CardView';
import type { Card } from '../types/cardSchema';

export const CardCreator = () => {
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
        effects: [],
        imageUrl: '',
        families: [],
        levels: [{ level: 1, coreCost: 1, bp: 1000 }]
    } as Card);

    // จัดการเวลาพิมพ์ช่องปกติ
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        
        // ถ้าเปลี่ยนประเภทการ์ด (Type) ให้รีเซ็ตค่า Default ของการ์ดประเภทนั้นๆ ด้วย
        if (name === 'type') {
            let defaultOverrides = {};
            if (value === 'Spirit') {
                defaultOverrides = { families: [], levels: [{ level: 1, coreCost: 1, bp: 1000 }] };
            } else if (value === 'Nexus') {
                defaultOverrides = { levels: [{ level: 1, coreCost: 0 }] };
            } else if (value === 'Magic') {
                defaultOverrides = { mainEffect: '', flashEffect: '', soulMagicConditionColor: undefined };
            }
            setCardData({ ...cardData, type: value as any, ...defaultOverrides } as Card);
            return;
        }

        setCardData({ ...cardData, [name]: name === 'cost' ? Number(value) : value } as Card);
    };

    // แปลง Text ที่คั่นด้วยลูกน้ำ ให้กลายเป็น Array สำหรับเผ่าพันธุ์ (Families)
    const handleFamiliesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const arr = e.target.value.split(',').map(s => s.trim()).filter(s => s !== '');
        setCardData({ ...cardData, families: arr } as any);
    };

    // แปลง Text แต่ละบรรทัด ให้กลายเป็น Array สำหรับ Effects
    const handleEffectsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const arr = e.target.value.split('\n').filter(s => s.trim() !== '');
        setCardData({ ...cardData, effects: arr } as Card);
    };

    const jsonCode = JSON.stringify(cardData, null, 2);

    return (
        <div className="flex flex-col lg:flex-row gap-8 p-6 bg-slate-900 min-h-screen text-slate-200 font-sans">
            
            {/* ฝั่งซ้าย: ฟอร์มกรอกข้อมูล */}
            <div className="w-full lg:w-1/2 bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700">
                <h2 className="text-2xl font-bold mb-6 text-amber-400">🛠️ Card Creator</h2>

                <div className="space-y-4">
                    {/* Basic Info */}
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

                    {/* 🌟 Dynamic Attributes (เปลี่ยนตาม Type) 🌟 */}
                    <div className="p-4 bg-slate-950 rounded-lg border border-slate-700 space-y-4 my-4">
                        <h3 className="font-bold text-cyan-400 mb-2">✨ {cardData.type} Attributes</h3>
                        
                        {/* โชว์เฉพาะ Spirit */}
                        {cardData.type === 'Spirit' && (
                            <div>
                                <label className="block text-sm font-semibold mb-1 text-slate-400">Families (คั่นด้วยลูกน้ำ)</label>
                                <input value={(cardData as any).families?.join(', ') || ''} onChange={handleFamiliesChange} placeholder="Astral Dragon, Winged Dragon" className="w-full p-2 bg-slate-700 rounded border border-slate-600 outline-none text-white" />
                            </div>
                        )}

                        {/* โชว์เฉพาะ Magic */}
                        {cardData.type === 'Magic' && (
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-slate-400">Soul Magic Color (ถ้ามี)</label>
                                    <select name="soulMagicConditionColor" value={(cardData as any).soulMagicConditionColor || ''} onChange={handleChange} className="w-full p-2 bg-slate-700 rounded border border-slate-600 outline-none text-white">
                                        <option value="">None</option>
                                        <option value="Red">Red</option>
                                        <option value="Purple">Purple</option>
                                        <option value="Green">Green</option>
                                        <option value="White">White</option>
                                        <option value="Yellow">Yellow</option>
                                        <option value="Blue">Blue</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-slate-400">Main Effect</label>
                                    <input name="mainEffect" value={(cardData as any).mainEffect || ''} onChange={handleChange} className="w-full p-2 bg-slate-700 rounded border border-slate-600 outline-none text-white" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-slate-400">Flash Effect</label>
                                    <input name="flashEffect" value={(cardData as any).flashEffect || ''} onChange={handleChange} className="w-full p-2 bg-slate-700 rounded border border-slate-600 outline-none text-white" />
                                </div>
                            </div>
                        )}
                        
                        {/* ใช้ร่วมกันทุกการ์ด (ข้อความ Effect รวม) */}
                        <div>
                            <label className="block text-sm font-semibold mb-1 text-slate-400">Card Effects (กด Enter ขึ้นบรรทัดใหม่)</label>
                            <textarea rows={4} value={cardData.effects.join('\n')} onChange={handleEffectsChange} placeholder="[LV1] When Summoned: Draw 1 card." className="w-full p-2 bg-slate-700 rounded border border-slate-600 outline-none text-white"></textarea>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-1 text-slate-400">Image URL</label>
                        <input name="imageUrl" value={cardData.imageUrl || ''} onChange={handleChange} placeholder="/cards/26RSD01/26RSD01-000.webp" className="w-full p-2 bg-slate-700 rounded border border-slate-600 outline-none text-white" />
                    </div>

                    {/* JSON Output */}
                    <div className="mt-8">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="font-bold text-emerald-400">📋 JSON Output</h3>
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

            {/* ฝั่งขวา: Live Preview */}
            <div className="w-full lg:w-1/2 flex flex-col items-center">
                <h2 className="text-2xl font-bold mb-6 text-cyan-400">👁️ Live Preview</h2>
                <div className="sticky top-6">
                    <CardView card={cardData} />
                </div>
            </div>

        </div>
    );
};
