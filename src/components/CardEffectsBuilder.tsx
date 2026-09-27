import React from 'react';
import type { CardEffect, EffectTagColor } from '../types/cardSchema';

interface CardEffectsBuilderProps {
    effects: (string | CardEffect)[];
    onChange: (effects: (string | CardEffect)[]) => void;
    title?: string;
}

export const CardEffectsBuilder: React.FC<CardEffectsBuilderProps> = ({
    effects,
    onChange,
    title = 'Card Effects Builder'
}) => {
    const addEffect = () => {
        onChange([...effects, { levels: [1], tags: [], description: '' }]);
    };

    const updateEffect = (index: number, field: keyof CardEffect, value: any) => {
        const newEffects = [...effects];
        const target = newEffects[index];
        if (typeof target !== 'string') {
            newEffects[index] = { ...target, [field]: value };
            onChange(newEffects);
        }
    };

    const removeEffect = (index: number) => {
        onChange(effects.filter((_, i) => i !== index));
    };

    const addTagToEffect = (effectIndex: number) => {
        const newEffects = [...effects];
        const target = newEffects[effectIndex];
        if (typeof target !== 'string') {
            const currentTags = target.tags || [];
            newEffects[effectIndex] = {
                ...target,
                tags: [...currentTags, { color: 'Orange' as EffectTagColor, name: 'When Summoned' }]
            };
            onChange(newEffects);
        }
    };

    const updateTag = (effectIndex: number, tagIndex: number, field: string, value: any) => {
        const newEffects = [...effects];
        const target = newEffects[effectIndex];
        if (typeof target !== 'string') {
            const newTags = [...target.tags];
            newTags[tagIndex] = { ...newTags[tagIndex], [field]: value };
            newEffects[effectIndex] = { ...target, tags: newTags };
            onChange(newEffects);
        }
    };

    const removeTag = (effectIndex: number, tagIndex: number) => {
        const newEffects = [...effects];
        const target = newEffects[effectIndex];
        if (typeof target !== 'string') {
            newEffects[effectIndex] = {
                ...target,
                tags: target.tags.filter((_, i) => i !== tagIndex)
            };
            onChange(newEffects);
        }
    };

    return (
        <div className="p-4 bg-slate-950 rounded-lg border border-slate-700 space-y-4 my-4">
            <div className="flex justify-between items-center">
                <h3 className="font-bold text-cyan-400">{title}</h3>
                <button
                    type="button"
                    onClick={addEffect}
                    className="px-3 py-1 bg-cyan-600 hover:bg-cyan-500 text-white text-xs rounded font-bold transition-colors cursor-pointer"
                >
                    + Add Effect
                </button>
            </div>

            {effects.length === 0 && (
                <p className="text-xs text-slate-500 italic">No effects added yet. Click "+ Add Effect" to create one.</p>
            )}

            {effects.map((eff, effIndex) => {
                // If old string format
                if (typeof eff === 'string') {
                    return (
                        <div key={effIndex} className="text-slate-500 text-xs italic bg-slate-800 p-2 rounded flex justify-between items-center">
                            <span>Old Text Effect: {eff}</span>
                            <button
                                type="button"
                                onClick={() => removeEffect(effIndex)}
                                className="text-slate-400 hover:text-red-400 font-bold ml-2"
                            >
                                &times;
                            </button>
                        </div>
                    );
                }

                return (
                    <div key={effIndex} className="p-3 bg-slate-800 rounded border border-slate-600 space-y-3 relative">
                        <button
                            type="button"
                            onClick={() => removeEffect(effIndex)}
                            className="absolute top-2 right-2 text-slate-400 hover:text-red-400 font-bold text-lg cursor-pointer"
                        >
                            &times;
                        </button>

                        <div className="flex-1 space-y-3 pr-6">
                            {/* Active Levels */}
                            <div>
                                <label className="text-xs font-semibold text-slate-400 mb-1 block">Active Levels (e.g. 1, 2)</label>
                                <input
                                    type="text"
                                    value={eff.levels?.join(', ') || ''}
                                    onChange={(e) => {
                                        const lvls = e.target.value.split(',').map(n => Number(n.trim())).filter(n => !isNaN(n) && n > 0);
                                        updateEffect(effIndex, 'levels', lvls);
                                    }}
                                    placeholder="e.g. 1, 2"
                                    className="w-full p-2 bg-slate-700 rounded border border-slate-600 text-white text-sm outline-none focus:border-cyan-400"
                                />
                            </div>

                            {/* Tags Section */}
                            <div className="p-3 bg-slate-900 rounded border border-slate-700">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-xs text-slate-400 font-semibold">Condition Tags</span>
                                    <button
                                        type="button"
                                        onClick={() => addTagToEffect(effIndex)}
                                        className="text-[10px] bg-slate-700 hover:bg-slate-600 px-2 py-1 rounded text-white font-bold transition-colors cursor-pointer"
                                    >
                                        + Add Tag
                                    </button>
                                </div>
                                <div className="space-y-2">
                                    {eff.tags?.map((tag, tagIndex) => (
                                        <div key={tagIndex} className="flex gap-2 items-center">
                                            <select
                                                value={tag.color}
                                                onChange={(e) => updateTag(effIndex, tagIndex, 'color', e.target.value)}
                                                className="p-1.5 bg-slate-700 rounded border border-slate-600 text-white text-xs w-24 outline-none cursor-pointer"
                                            >
                                                <option value="Orange">Orange</option>
                                                <option value="Black">Black</option>
                                                <option value="Blue">Blue</option>
                                                <option value="Purple">Purple</option>
                                                <option value="Red">Red</option>
                                            </select>
                                            <input
                                                type="text"
                                                value={tag.name}
                                                onChange={(e) => updateTag(effIndex, tagIndex, 'name', e.target.value)}
                                                className="flex-1 p-1.5 bg-slate-700 rounded border border-slate-600 text-white text-xs outline-none"
                                                placeholder="Tag Name (e.g. When Summoned, During Attack)"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => removeTag(effIndex, tagIndex)}
                                                className="text-slate-500 hover:text-red-400 font-bold text-base cursor-pointer"
                                            >
                                                &times;
                                            </button>
                                        </div>
                                    ))}
                                    {(!eff.tags || eff.tags.length === 0) && (
                                        <p className="text-xs text-slate-500 italic">No tags added.</p>
                                    )}
                                </div>
                            </div>

                            {/* Description */}
                            <div>
                                <label className="text-xs font-semibold text-slate-400 mb-1 block">Effect Description</label>
                                <textarea
                                    value={eff.description || ''}
                                    onChange={(e) => updateEffect(effIndex, 'description', e.target.value)}
                                    className="w-full p-2 bg-slate-700 rounded border border-slate-600 text-white text-sm h-20 outline-none focus:border-cyan-400 resize-none"
                                    placeholder="Enter effect details..."
                                />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
