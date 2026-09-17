import React from 'react';
import type { Card } from '../types/cardSchema';

interface CardViewProps {
    card: Card;
}

export const CardView: React.FC<CardViewProps> = ({ card }) => {
    // สไตล์สีการ์ดตามสีหลัก
    const getColorStyle = (colors: string[]) => {
        const primary = colors[0]?.toLowerCase() || 'red';
        switch (primary) {
            case 'red': return { bg: '#fee2e2', border: '#ef4444', header: '#dc2626' };
            case 'purple': return { bg: '#f3e8ff', border: '#a855f7', header: '#9333ea' };
            case 'green': return { bg: '#dcfce7', border: '#22c55e', header: '#16a34a' };
            case 'white': return { bg: '#f1f5f9', border: '#94a3b8', header: '#64748b' };
            case 'yellow': return { bg: '#fef9c3', border: '#eab308', header: '#ca8a04' };
            case 'blue': return { bg: '#dbeafe', border: '#3b82f6', header: '#2563eb' };
            default: return { bg: '#f3f4f6', border: '#6b7280', header: '#4b5563' };
        }
    };

    const theme = getColorStyle(card.colors);

    return (
        <div style={{
            width: '280px',
            borderRadius: '12px',
            border: `3px solid ${theme.border}`,
            backgroundColor: theme.bg,
            padding: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            fontFamily: 'sans-serif',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            color: '#1f2937'
        }}>
            {/* Header: ID, Name, Cost */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: theme.header,
                color: '#fff',
                padding: '6px 10px',
                borderRadius: '6px',
                fontWeight: 'bold'
            }}>
                <span style={{ fontSize: '11px' }}>{card.id}</span>
                <span style={{ fontSize: '13px', flex: 1, textAlign: 'center', margin: '0 6px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {card.name}
                </span>
                <span style={{
                    backgroundColor: '#fbbf24',
                    color: '#000',
                    borderRadius: '50%',
                    width: '24px',
                    height: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '13px'
                }}>
                    {card.cost}
                </span>
            </div>

            {/* Badges: Type, Rarity, Gimmicks */}
            <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', fontSize: '10px' }}>
                <span style={{ backgroundColor: '#000', color: '#fff', padding: '2px 6px', borderRadius: '4px' }}>
                    {card.type}
                </span>
                <span style={{ backgroundColor: '#4b5563', color: '#fff', padding: '2px 6px', borderRadius: '4px' }}>
                    {card.rarity.join(', ')}
                </span>
                {card.hasLegacy && (
                    <span style={{ backgroundColor: '#b45309', color: '#fff', padding: '2px 6px', borderRadius: '4px', fontWeight: 'bold' }}>
                        LEGACY
                    </span>
                )}
                {card.type === 'Magic' && card.soulMagicConditionColor && (
                    <span style={{ backgroundColor: '#7c3aed', color: '#fff', padding: '2px 6px', borderRadius: '4px', fontWeight: 'bold' }}>
                        SOUL MAGIC ({card.soulMagicConditionColor})
                    </span>
                )}
            </div>

            {/* รูปภาพการ์ด */}
            {card.imageUrl && (
                <img
                    src={card.imageUrl}
                    alt={card.name}
                    style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '6px' }}
                />
            )}

            {/* Reductions & Symbols */}
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#374151' }}>
                <div>
                    <strong>Reductions: </strong>
                    {card.reductions.map((r, i) => (
                        <span key={i}>{r.amount} {r.color} </span>
                    ))}
                </div>
                <div>
                    <strong>Symbol: </strong>
                    {card.symbols.map((s, i) => (
                        <span key={i} style={{ color: s.type === 'EX' ? '#b45309' : 'inherit', fontWeight: s.type === 'EX' ? 'bold' : 'normal' }}>
                            {s.color} {s.type === 'EX' ? '(EX)' : ''}
                        </span>
                    ))}
                </div>
            </div>

            {/* ตาราง Levels (กรณีที่เป็น Spirit หรือ Nexus) */}
            {'levels' in card && card.levels && (
                <div style={{ backgroundColor: '#fff', padding: '6px', borderRadius: '6px', fontSize: '11px' }}>
                    {card.levels.map((lvl) => (
                        <div key={lvl.level} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed #e5e7eb', padding: '2px 0' }}>
                            <span>
                                <strong>LV{lvl.level}</strong> ({lvl.coreCost} Core{lvl.isTrueRelease ? ' / 1 Soul Core' : ''})
                                {lvl.isTrueRelease && <span style={{ color: '#dc2626', fontWeight: 'bold', marginLeft: '4px' }}>[True Release]</span>}
                            </span>
                            {lvl.bp && <span style={{ fontWeight: 'bold', color: '#dc2626' }}>{lvl.bp} BP</span>}
                        </div>
                    ))}
                </div>
            )}

            {/* เอฟเฟกต์ของการ์ด */}
            <div style={{ backgroundColor: '#fff', padding: '8px', borderRadius: '6px', fontSize: '11px', flex: 1, minHeight: '60px', overflowY: 'auto' }}>
                {card.effects.map((eff, i) => (
                    <p key={i} style={{ margin: '0 0 4px 0', lineHeight: '1.3' }}>{eff}</p>
                ))}
            </div>
        </div>
    );
};
