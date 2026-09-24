17/09/2026 : I'm bored at work so I start this project. I want to created a card game as a web game, where everyone can enjoy. Hope it won't get taken down by license issue. 

21/09/2026 : I finish the prototype UI for the card gallery. I also start to implement the card data. It's take me all day to import cards data one by one. At least I'm done. BUT! this need to be improve, I need to find the way to create cards in more efficient ways.

ส่วนที่ 2: เพิ่ม Checkbox ของ Legacy
ในส่วนแสดงข้อมูล Basic (ตรง grid-cols-3 ที่มี Type และ Cost) ให้ปรับจาก grid-cols-2 หรือ 3 เป็น 3 คอลัมน์แบบนี้ หรือเติมบล็อกนี้ต่อท้าย Cost ครับ:
                        <div className="flex items-end pb-2">
                            <label className="flex items-center space-x-2 text-sm text-slate-300 font-semibold cursor-pointer">
                                <input type="checkbox" name="hasLegacy" checked={cardData.hasLegacy || false} 
                                    onChange={(e) => setCardData({ ...cardData, hasLegacy: e.target.checked } as Card)}
                                    className="w-5 h-5 rounded border-slate-600 bg-slate-700 text-amber-500 focus:ring-amber-400" />
                                <span className="text-amber-400">Legacy (การ์ดโบราณ)</span>
                            </label>
                        </div>

ส่วนที่ 3: ระบบสร้าง Symbols แบบ Array
ให้เอาโค้ดชุดนี้ไปวางไว้ก่อนส่วนของ Image URL ครับ (ช่วยให้เพิ่มลด Symbol และติ๊ก EX ได้):
                    {/* Symbols Section */}
                    <div className="p-4 bg-slate-900 rounded-lg border border-slate-700 space-y-3 mt-4">
                        <div className="flex justify-between items-center">
                            <h3 className="font-bold text-amber-400">Symbols</h3>
                            <button onClick={addSymbol} className="px-3 py-1 bg-amber-600 hover:bg-amber-500 text-white text-xs rounded font-bold transition-colors">
                                + Add Symbol
                            </button>
                        </div>
                        {cardData.symbols.map((sym, index) => (
                            <div key={index} className="flex gap-2 items-center bg-slate-800 p-2 rounded">
                                <select value={sym.color} onChange={(e) => updateSymbol(index, 'color', e.target.value)}
                                    className="p-1 bg-slate-700 rounded border border-slate-600 text-white text-sm">
                                    <option value="Red">Red</option><option value="Purple">Purple</option>
                                    <option value="Green">Green</option><option value="White">White</option>
                                    <option value="Yellow">Yellow</option><option value="Blue">Blue</option>
                                    <option value="Colorless">Colorless</option>
                                </select>
                                <input type="number" min="1" value={sym.amount || 1} onChange={(e) => updateSymbol(index, 'amount', Number(e.target.value))}
                                    className="w-16 p-1 bg-slate-700 rounded border border-slate-600 text-white text-sm" placeholder="Amt" />
                                <label className="flex items-center space-x-1 text-sm text-slate-300 cursor-pointer ml-2">
                                    <input type="checkbox" checked={sym.type === 'EX'}
                                        onChange={(e) => updateSymbol(index, 'type', e.target.checked ? 'EX' : 'Normal')}
                                        className="w-4 h-4 rounded text-amber-500" />
                                    <span className="font-bold text-amber-500">EX</span>
                                </label>
                                <button onClick={() => removeSymbol(index)} className="ml-auto text-slate-400 hover:text-red-400 font-bold px-2 text-xl">&times;</button>
                            </div>
                        ))}
                    </div>

ส่วนที่ 4: ระบบ Effects Builder (แบบมี Tags)
เอาโค้ดชุดนี้ไปต่อท้ายจาก Symbols Section ที่เพิ่งใส่เมื่อกี้ได้เลยครับ (ถ้ามีช่องกรอก Effect แบบเก่าอยู่ให้ลบออกได้เลยครับ):
                    {/* Advanced Effects Builder */}
                    <div className="p-4 bg-slate-950 rounded-lg border border-slate-700 space-y-4 my-4">
                        <div className="flex justify-between items-center">
                            <h3 className="font-bold text-cyan-400">Card Effects Builder</h3>
                            <button onClick={addEffect} className="px-3 py-1 bg-cyan-600 hover:bg-cyan-500 text-white text-xs rounded font-bold transition-colors">
                                + Add Effect
                            </button>
                        </div>

                        {cardData.effects.map((eff, effIndex) => {
                            // ป้องกันบั๊กกรณีเอฟเฟกต์เก่ายังเป็น string
                            if (typeof eff === 'string') return <div key={effIndex} className="text-slate-500 text-xs italic bg-slate-800 p-2 rounded">Old Text Effect: {eff}</div>;

                            return (
                                <div key={effIndex} className="p-3 bg-slate-800 rounded border border-slate-600 space-y-3 relative">
                                    <button onClick={() => removeEffect(effIndex)} className="absolute top-2 right-2 text-slate-400 hover:text-red-400 font-bold text-lg">&times;</button>
                                    
                                    <div className="flex-1 space-y-3 pr-6">
                                        {/* Level Input */}
                                        <div>
                                            <label className="text-xs font-semibold text-slate-400 mb-1 block">Active Levels (e.g. 1,2,3)</label>
                                            <input type="text" value={eff.levels?.join(',') || ''}
                                                onChange={(e) => {
                                                    const lvls = e.target.value.split(',').map(n => Number(n.trim())).filter(n => !isNaN(n) && n > 0);
                                                    updateEffect(effIndex, 'levels', lvls);
                                                }}
                                                placeholder="e.g. 1,2"
                                                className="w-full p-2 bg-slate-700 rounded border border-slate-600 text-white text-sm outline-none focus:border-cyan-400" />
                                        </div>
                                        
                                        {/* Tags System */}
                                        <div className="p-3 bg-slate-900 rounded border border-slate-700">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-xs text-slate-400 font-semibold">Conditions Tags</span>
                                                <button onClick={() => addTagToEffect(effIndex)} className="text-[10px] bg-slate-700 hover:bg-slate-600 px-2 py-1 rounded text-white font-bold transition-colors">
                                                    + Add Tag
                                                </button>
                                            </div>
                                            <div className="space-y-2">
                                                {eff.tags?.map((tag, tagIndex) => (
                                                    <div key={tagIndex} className="flex gap-2 items-center">
                                                        <select value={tag.color} onChange={(e) => updateTag(effIndex, tagIndex, 'color', e.target.value)}
                                                            className="p-1.5 bg-slate-700 rounded border border-slate-600 text-white text-xs w-24 outline-none">
                                                            <option value="Orange">Orange</option><option value="Black">Black</option>
                                                            <option value="Blue">Blue</option><option value="Purple">Purple</option>
                                                            <option value="Red">Red</option>
                                                        </select>
                                                        {/* Input ให้พิมพ์ชื่อ Tag (คุณสามารถแก้ตรงนี้เป็น Select ทีหลังได้) */}
                                                        <input type="text" value={tag.name} onChange={(e) => updateTag(effIndex, tagIndex, 'name', e.target.value)}
                                                            className="flex-1 p-1.5 bg-slate-700 rounded border border-slate-600 text-white text-xs outline-none" placeholder="Tag Name (e.g. When Summoned)" />
                                                        <button onClick={() => removeTag(effIndex, tagIndex)} className="text-slate-500 hover:text-red-400 font-bold">&times;</button>
                                                    </div>
                                                ))}
                                                {(!eff.tags || eff.tags.length === 0) && <p className="text-xs text-slate-500 italic">No tags added.</p>}
                                            </div>
                                        </div>

                                        {/* Description Input */}
                                        <div>
                                            <label className="text-xs font-semibold text-slate-400 mb-1 block">Effect Description</label>
                                            <textarea value={eff.description || ''} onChange={(e) => updateEffect(effIndex, 'description', e.target.value)}
                                                className="w-full p-2 bg-slate-700 rounded border border-slate-600 text-white text-sm h-24 outline-none focus:border-cyan-400 resize-none" 
                                                placeholder="Effect details..." />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>


