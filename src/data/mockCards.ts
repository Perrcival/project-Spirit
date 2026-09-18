import type { Card } from '../types/cardSchema';

export const mockCards: Card[] = [
    {
        id: '26RSD01-001',
        name: 'The FlyingIron Akurai',
        type: 'Spirit',
        colors: ['Red'],
        cost: 7,
        reductions: [
            { color: 'Red', amount: 4 }
        ],
        symbols: [
            { color: 'Red', type: 'EX' } // มี EX Symbol เมื่อตก Trash
        ],
        hasLegacy: true, // มีความสามารถ Legacy
        families: ['Astral Dragon', 'Winged Dragon'],
        rarity: ['X-Rare'],
        levels: [
            { level: 1, coreCost: 1, bp: 6000 },
            { level: 2, coreCost: 3, bp: 10000 },
            { level: 3, coreCost: 5, bp: 14000, isTrueRelease: true } // LV3 True Release (จ่าย 5 คอร์ หรือใช้ 1 Soul Core ก็ได้)
        ],
        effects: [
            '[Legacy: Red EX Symbol] (You can banish EX Symbols from your Trash for reductions.)',
            '[LV1-LV2-LV3] When Summoned: Destroy 1 opposing Spirit with 7000 BP or less.',
            '[LV3: True Release] When Attacking: Draw 1 card from your deck.'
        ],
        imageUrl: 'https://placehold.co/300x420/dc2626/ffffff?text=Akurai' // รูปจำลองชั่วคราว
    },

    {
        id: '26RSD01-005',
        name: 'Flame Hurricane',
        type: 'Magic',
        colors: ['Red'],
        cost: 6,
        reductions: [
            { color: 'Red', amount: 3 }
        ],
        symbols: [],
        soulMagicConditionColor: 'Red', // สามารถร่ายด้วย 1 Soul Core ได้ถ้ามีสัญลักษณ์ Red บนฟิลด์
        rarity: ['Common'],
        mainEffect: 'Target 1 opposing Spirit; destroy it.',
        flashEffect: 'During this turn, all your Red Spirits gain +3000 BP.',
        effects: [
            '[Soul Magic: Red] (If you control any Red symbol, you can use it with just the Soul Core.)',
            '[Main] Target 1 opposing Spirit; destroy it.',
            '[Flash] During this turn, all your Red Spirits gain +3000 BP.'
        ],
        imageUrl: 'https://placehold.co/300x420/991b1b/ffffff?text=Flame+Hurricane'
    },

    // 3. ตัวอย่าง Nexus Card
    {
        id: '26RSD01-008',
        name: 'Volcano of the Red Dragon',
        type: 'Nexus',
        colors: ['Red'],
        cost: 3,
        reductions: [
            { color: 'Red', amount: 2 }
        ],
        symbols: [
            { color: 'Red', type: 'Normal' }
        ],
        rarity: ['Rare'],
        levels: [
            { level: 1, coreCost: 0 },
            { level: 2, coreCost: 1 }
        ],
        effects: [
            '[LV1-LV2] Draw Phase: Draw +1 extra card.',
            '[LV2] Your Red Spirits gain +1000 BP.'
        ],
        imageUrl: 'https://placehold.co/300x420/7f1d1d/ffffff?text=Red+Volcano'
    },

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
            '[LV2] During Attack : At the end of battle, if your Hand is five or less, draw a card.'
        ],
        imageUrl: '/cards/26RSD01-001.webp' // รูปจำลองชั่วคราว
    }
];