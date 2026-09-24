// Card Schema: A blueprint for Battle Spirit card in standard format

type CardType = 'Spirit' | 'Nexus' | 'Magic';
type Color = 'Red' | 'Purple' | 'Yellow' | 'White' | 'Blue' | 'Green' | 'Colorless';
type SymbolType = 'Normal' | 'EX';
type Rarity = 'Common' | 'Rare' | 'Master Rare' | 'X-Rare' | 'PR';

// Symbol Schema
export interface CardSymbol {
    color: Color;
    type: SymbolType;
}

// Level Schema
export interface CardLevel {
    level: number;
    coreCost: number;
    bp?: number;
    isTrueRelease?: boolean;
}

// Reduction Schema
export interface Reduction {
    color: Color;
    amount: number;
}

// Effect Schema
export type EffectTagColor = 'Orange' | 'Black' | 'Blue' | 'Purple' | 'Red';

export interface EffectTag {
    color: EffectTagColor;
    name: string;
}

export interface CardEffect {
    levels?: number[]; // ex. [1, 2, 3] (? for magic card skip it)
    tags: EffectTag[];
    description: string;
}
// Base Card Schema (for all cards)
export interface BaseCard {
    id: string;
    name: string;
    type: CardType;
    colors: Color[];
    cost: number;
    reductions: Reduction[];
    symbols: CardSymbol[];
    families: string[];
    hasLegacy?: boolean;
    rarity: Rarity[];
    effects: (string | CardEffect)[];
    imageUrl?: string;
}

// Spirit Card Schema
export interface SpiritCard extends BaseCard {
    type: 'Spirit';
    levels: CardLevel[];
}

// Nexus Card Schema
export interface NexusCard extends BaseCard {
    type: 'Nexus';
    levels: CardLevel[];
}

// Magic Card Schema
export interface MagicCard extends BaseCard {
    type: 'Magic';
    soulMagicConditionColor?: Color;
    isMain?: boolean;
    isFlash?: boolean;
}

// Combine all card type to single name for simpler calls
export type Card = SpiritCard | NexusCard | MagicCard;