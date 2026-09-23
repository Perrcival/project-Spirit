import type { Card } from '../types/cardSchema';

export const mockCards: Card[] = [
    // 26RSD01 Spirit Card
    {
        id: '26RSD01-001',
        name: 'Mushakko',
        type: 'Spirit',
        colors: ['Red'],
        cost: 3,
        reductions: [
            { color: 'Red', amount: 1 }
        ],
        symbols: [
            { color: 'Red', type: 'Normal' } // มี EX Symbol เมื่อตก Trash
        ],
        hasLegacy: false, // มีความสามารถ Legacy
        families: ['Windfang'],
        rarity: ['Common'],
        levels: [
            { level: 1, coreCost: 1, bp: 2000 },
            { level: 2, coreCost: 2, bp: 30000 },
        ],
        effects: [
            '[LV2] <During Attack> : At the end of battle, if your Hand is five or less, draw a card.'
        ],
        imageUrl: '/cards/26RSD01/26RSD01-001.webp' // รูปจำลองชั่วคราว
    },

    {
        id: '26RSD01-002',
        name: 'Gen-Bor',
        type: 'Spirit',
        colors: ['Red'],
        cost: 3,
        reductions: [
            { color: 'Red', amount: 2 }
        ],
        symbols: [
            { color: 'Red', type: 'EX' }
        ],
        hasLegacy: false,
        families: ['Red Cloud', 'Windfang'],
        rarity: ['Common'],
        levels: [
            { level: 1, coreCost: 1, bp: 3000 },
            { level: 2, coreCost: 3, bp: 5000, isTrueRelease: true },
        ],
        effects: [
            '[LV2] <True Release> During Attack : This Spirit gains +2000 BP.'
        ],
        imageUrl: '/cards/26RSD01/26RSD01-002.webp'

    },

    {
        id: '26RSD01-003',
        name: 'Rowamiku',
        type: 'Spirit',
        colors: ['Red'],
        cost: 3,
        reductions: [
            { color: 'Red', amount: 2 }
        ],
        symbols: [
            { color: 'Red', type: 'EX' }
        ],
        hasLegacy: false,
        families: ['Red Cloud', 'Windfang'],
        rarity: ['Common'],
        levels: [
            { level: 1, coreCost: 1, bp: 3000 },
            { level: 2, coreCost: 3, bp: 5000 }
        ],
        effects: [
            '[LV1-2] <When Summoned> : If you control any exhausted Red Spirit, target an opposing 3000 BP or less Spirit. Destroy it.'
        ],
        imageUrl: '/cards/26RSD01/26RSD01-003.webp'
    },

    {
        id: '26RSD01-004',
        name: 'Haarier',
        type: 'Spirit',
        colors: ['Red'],
        cost: 4,
        reductions: [
            { color: 'Red', amount: 2 }
        ],
        symbols: [
            { color: 'Red', type: 'Normal' }
        ],
        hasLegacy: false,
        families: ['Windfang'],
        rarity: ['Common'],
        levels: [
            { level: 1, coreCost: 1, bp: 4000 },
            { level: 2, coreCost: 3, bp: 6000 }
        ],
        effects: [
            '[LV2] <When Attacks> : Reveal two cards from your decktop. Amoung them, add a "Windfang" family card to the Hand. Discard any remaining cards.'
        ],
        imageUrl: '/cards/26RSD01/26RSD01-004.webp'
    },

    {
        id: '26RSD01-005',
        name: 'Goon-Gata',
        type: 'Spirit',
        colors: ['Red'],
        cost: 4,
        reductions: [
            { color: 'Red', amount: 3 }
        ],
        symbols: [
            { color: 'Red', type: 'EX' }
        ],
        hasLegacy: false,
        families: ['Red Cloud', 'Windfang'],
        rarity: ['Common'],
        levels: [
            { level: 1, coreCost: 1, bp: 5000 },
            { level: 2, coreCost: 3, bp: 8000 }
        ],
        effects: [],
        imageUrl: '/cards/26RSD01/26RSD01-005.webp'
    },

    {
        id: '26RSD01-006',
        name: 'Cupell',
        type: 'Spirit',
        colors: ['Red'],
        cost: 5,
        reductions: [
            { color: 'Red', amount: 2 }
        ],
        symbols: [
            { color: 'Red', type: 'Normal' }
        ],
        hasLegacy: false,
        families: ['Windfang'],
        rarity: ['Common'],
        levels: [
            { level: 1, coreCost: 1, bp: 4000 },
            { level: 2, coreCost: 4, bp: 7000 }
        ],
        effects: [
            '[LV1-2] <When Summoned> : Send up to two cores, besides Soul core, from your Trash to this Spirit.',
            '[LV2] <Your End Step> : You can target one of your "Windfang" family Spirit/Nexuses. Send the Soul core from your Tash to it.'
        ],
        imageUrl: '/cards/26RSD01/26RSD01-006.webp'
    },

    {
        id: '26RSD01-007',
        name: 'Griffar',
        type: 'Spirit',
        colors: ['Red'],
        cost: 5,
        reductions: [
            { color: 'Red', amount: 3 }
        ],
        symbols: [
            { color: 'Red', type: 'EX' }
        ],
        hasLegacy: false,
        families: ['Windfang'],
        rarity: ['Common'],
        levels: [
            { level: 1, coreCost: 1, bp: 5000 },
            { level: 2, coreCost: 3, bp: 7000, isTrueRelease: true }
        ],
        effects: [
            '[LV1-2] <During Attack> <Invoke:Flash> <Once Per Turn>: Discard a "Windfang" family card from your Hand. During this battle, this Spirit gains +3000 BP.',
            '[LV2] <True Release> <When Attacks> : Target an opposing 3000 BP or less Spirit. Destroy it.'
        ],
        imageUrl: '/cards/26RSD01/26RSD01-007.webp'
    },

    {
        id: '26RSD01-008',
        name: 'Sertarius',
        type: 'Spirit',
        colors: ['Red'],
        cost: 6,
        reductions: [
            { color: 'Red', amount: 3 }
        ],
        symbols: [
            { color: 'Red', type: 'Normal' }
        ],
        hasLegacy: true,
        families: ['Windfang'],
        rarity: ['Common'],
        levels: [
            { level: 1, coreCost: 1, bp: 6000 },
            { level: 2, coreCost: 2, bp: 7000 }
        ],
        effects: [
            '[Legacy]',
            'You can banish EX Symbols from your Trash for reductions.',
            '[LV1-2] <When Summoned> : You can target a "Windfang" family Spirit card, besieds "Sertarius", in your Trash. Return it to the Hand.'
        ],
        imageUrl: '/cards/26RSD01/26RSD01-008.webp'
    },

    {
        id: '26RSD01-009',
        name: 'The FlyingAce Reufalx',
        type: 'Spirit',
        colors: ['Red'],
        cost: 6,
        reductions: [
            { color: 'Red', amount: 3 }
        ],
        symbols: [
            { color: 'Red', type: 'Normal' }
        ],
        hasLegacy: false,
        families: ['Red Cloud', 'Windfang'],
        rarity: ['Common'],
        levels: [
            { level: 1, coreCost: 1, bp: 6000 },
            { level: 2, coreCost: 3, bp: 8000, isTrueRelease: true }
        ],
        effects: [
            '[LV1-2] <When Summoned> : If you control any exhausted "Windfang" family Spirit, target an opposing 5000 BP or less Spirit. Destroy it.',
            '[LV2] <True Release> <During Attack> :'
        ],
        imageUrl: '/cards/26RSD01/26RSD01-009.webp'
    },

    {
        id: '26RSD01-010',
        name: 'Utmost Depth: The Windfang Crag',
        type: 'Nexus',
        colors: ['Red'],
        cost: 3,
        reductions: [
            { color: 'Red', amount: 2 }
        ],
        symbols: [
            { color: 'Red', type: 'Normal' }
        ],
        families: ['Windfang'],
        rarity: ['Common'],
        levels: [
            { level: 1, coreCost: 0 },
            { level: 2, coreCost: 2, isTrueRelease: true }
        ],
        effects: [
            '[LV1-LV2] <Your Attack Step> <Invoke:Flash> : Exhaust this Nexus => Target one of your attacking "Windfang" family Spirits. During this battle, it gains +2000 BP.',
            '[LV2] <True Release> <Your Attack Step> <Once Per Turn> : When you destroy any opposing Spirits, you can target one of your Spirits. Send a core, besides Soul Core, from your Trash to it.'
        ],
        imageUrl: '/cards/26RSD01/26RSD01-010.webp'
    },

    {
        id: '26RSD01-011',
        name: 'The Floating Stone Realm',
        type: 'Nexus',
        colors: ['Red'],
        cost: 4,
        reductions: [
            { color: 'Red', amount: 2 }
        ],
        symbols: [
            { color: 'Red', type: 'Normal' }
        ],
        families: ['Windfang'],
        rarity: ['Common'],
        levels: [
            { level: 1, coreCost: 0 },
            { level: 2, coreCost: 2 }
        ],
        effects: [
            '[LV1-LV2] <When Deployed> : If you control any exhausted Red Spirit, target a Cost 4 or less "Windfang" family Spirit card in your Trash. Return it to the Hand.',
            '[LV2] <Your Attack Step> : All your Spirits with Legacy gain +2000 BP.'
        ],
        imageUrl: '/cards/26RSD01/26RSD01-011.webp'
    },

    {
        id: '26RSD01-012',
        name: 'Break Claw',
        type: 'Magic',
        colors: ['Red'],
        cost: 3,
        reductions: [
            { color: 'Red', amount: 2 }
        ],
        symbols: [
            { color: 'Red', type: 'EX' }
        ],
        families: ['Windfang'],
        rarity: ['Common'],
        isMain: true,
        isFlash: true,
        effects: [
            '[Main] : Target an opposing Nexus that isn\'t during True Release. Destroy it. Then, if you control any exhausted Red Spirit, send a core, besides Soul Core, from your Trash to the Reserve.',
            '[Flash] : Target one of your Spirits. During this turn, give it +3000 BP.'
        ],
        imageUrl: '/cards/26RSD01/26RSD01-012.webp'
    },

    {
        id: '26RSD01-013',
        name: 'Offering Draw',
        type: 'Magic',
        colors: ['Red'],
        cost: 4,
        reductions: [
            { color: 'Red', amount: 2 }
        ],
        symbols: [],
        families: ['Windfang'],
        hasLegacy: true,
        rarity: ['Common'],
        isMain: true,
        isFlash: true,
        effects: [
            '[Legacy] : You can banish EX Symbols from your Trash for reductions.',
            '[Main] : Reveal three cards from your decktop. Among them, besides "Offering Draw", add two "Windfang" family cards to the Hand. Return any remaining cards to the deckbottom in any order.',
            '[Flash] : Target one of your Spirits. During this turn, give it +2000 BP.'
        ],
        imageUrl: '/cards/26RSD01/26RSD01-013.webp'
    },

    {
        id: '26RSD01-014',
        name: 'Flame Hurricane',
        type: 'Magic',
        colors: ['Red'],
        cost: 6,
        reductions: [
            { color: 'Red', amount: 3 }
        ],
        symbols: [
            { color: 'Red', type: 'EX' }
        ],
        families: ['Windfang'],
        soulMagicConditionColor: 'Red',
        rarity: ['Common'],
        isMain: false,
        isFlash: true,
        effects: [
            '[Soul Magic: Red] : If you control any Red symbol, you can use it with just the Soul Core.',
            '[Flash] : Target an opposing 7000 BP or less Spirit. Destroy it. If your Life was reduced during this turn, the targeting BP becomes 10000 instead.'
        ],
        imageUrl: '/cards/26RSD01/26RSD01-014.webp'
    },

    {
        id: '26RSD01-X01',
        name: 'The FlyingScarlet Rensis',
        type: 'Spirit',
        colors: ['Red'],
        cost: 7,
        reductions: [
            { color: 'Red', amount: 4 }
        ],
        symbols: [
            { color: 'Red', type: 'Normal' }
        ],
        hasLegacy: true,
        families: ['Windfang'],
        rarity: ['X-Rare'],
        levels: [
            { level: 1, coreCost: 1, bp: 6000 },
            { level: 2, coreCost: 3, bp: 8000 }
        ],
        effects: [
            '[Legacy] : You can banish EX Symbols from your Trash for reductions.',
            '[LV1-2] <When Summoned> : Target an opposing 7000 BP or less Spirit. Destroy it.',
            '[LV2] <When Attacks> : You can target a "Windfang" family Spirit you control. Put up to two cores, besides Soul Core, from your Trash to it.'
        ],
        imageUrl: '/cards/26RSD01/26RSD01-X01.webp'
    },

    {
        id: '26RSD01-X02',
        name: 'The FlyingIron Akurai',
        type: 'Spirit',
        colors: ['Red'],
        cost: 7,
        reductions: [
            { color: 'Red', amount: 4 }
        ],
        symbols: [
            { color: 'Red', type: 'Normal' }
        ],
        hasLegacy: true,
        families: ['Windfang'],
        rarity: ['X-Rare'],
        levels: [
            { level: 1, coreCost: 1, bp: 7000 },
            { level: 2, coreCost: 4, bp: 10000, isTrueRelease: true }
        ],
        effects: [
            '[LV1-2] <During Attack> <Invoke: Flash> <Once Per Turn> : Discard a "Windfang" family card from your Hand => During this battle, this Spirit gains +3000 BP.',
            '[LV2] <True Release> <When Attacks> : Reveal three cards from your decktop. Among them, add a "Windfang" family card to the Hand. Discard any remaining cards.'
        ],
        imageUrl: '/cards/26RSD01/26RSD01-X02.webp'
    }
];