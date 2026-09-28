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
        imageUrl: '/cards/red/26RSD01-001.webp' // รูปจำลองชั่วคราว
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
        imageUrl: '/cards/red/26RSD01-002.webp'

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
        imageUrl: '/cards/red/26RSD01-003.webp'
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
            '[LV2] <When Attacks> : Reveal two cards from your decktop. Among them, add a "Windfang" family card to the Hand. Discard any remaining cards.'
        ],
        imageUrl: '/cards/red/26RSD01-004.webp'
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
        imageUrl: '/cards/red/26RSD01-005.webp'
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
        imageUrl: '/cards/red/26RSD01-006.webp'
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
        imageUrl: '/cards/red/26RSD01-007.webp'
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
        imageUrl: '/cards/red/26RSD01-008.webp'
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
        imageUrl: '/cards/red/26RSD01-009.webp'
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
        imageUrl: '/cards/red/26RSD01-010.webp'
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
        imageUrl: '/cards/red/26RSD01-011.webp'
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
        imageUrl: '/cards/red/26RSD01-012.webp'
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
        imageUrl: '/cards/red/26RSD01-013.webp'
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
        imageUrl: '/cards/red/26RSD01-014.webp'
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
        imageUrl: '/cards/red/26RSD01-X01.webp'
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
        imageUrl: '/cards/red/26RSD01-X02.webp'
    },

    {
        id: "26RSD02-001",
        name: "Sclouse",
        type: "Spirit",
        colors: [
            "Purple"
        ],
        cost: 2,
        reductions: [
            {
                color: "Purple",
                amount: 1
            }
        ],
        symbols: [
            {
                color: "Purple",
                type: "EX",
                amount: 1
            }
        ],
        families: [
            "Dark Puce",
            "Bloodrouse"
        ],
        rarity: [
            "Common"
        ],
        hasLegacy: false,
        effects: [
            {
                levels: [
                    2
                ],
                tags: [
                    {
                        color: "Blue",
                        name: "When Destroy"
                    }
                ],
                description: "Target an opposing Spirit. Send a core, besides Soul Core, from it to the Reserve."
            }
        ],
        imageUrl: "/cards/purple/26RSD02-001.webp",
        levels: [
            {
                level: 1,
                coreCost: 1,
                bp: 1000
            },
            {
                level: 2,
                coreCost: 2,
                bp: 2000
            }
        ]
    },

    {
        id: "26RSD02-002",
        name: "Firalba",
        type: "Spirit",
        colors: [
            "Purple"
        ],
        cost: 3,
        reductions: [
            {
                color: "Purple",
                amount: 1
            }
        ],
        symbols: [
            {
                color: "Purple",
                type: "Normal",
                amount: 1
            }
        ],
        families: [
            "Bloodrouse"
        ],
        rarity: [
            "Common"
        ],
        hasLegacy: false,
        effects: [
            {
                levels: [
                    1,
                    2
                ],
                tags: [
                    {
                        color: "Blue",
                        name: "When Destroy"
                    }
                ],
                description: "Draw a card."
            }
        ],
        imageUrl: "/cards/purple/26RSD02-002.webp",
        levels: [
            {
                level: 1,
                coreCost: 1,
                bp: 2000
            },
            {
                level: 2,
                coreCost: 3,
                bp: 2000
            }
        ]
    },

    {
        id: "26RSD02-003",
        name: "Medici-Cattery",
        type: "Spirit",
        colors: [
            "Purple"
        ],
        cost: 3,
        reductions: [
            {
                color: "Purple",
                amount: 2
            }
        ],
        symbols: [
            {
                color: "Purple",
                type: "EX",
                amount: 1
            }
        ],
        families: [
            "Dark Puce",
            "Bloodrouse"
        ],
        rarity: [
            "Common"
        ],
        hasLegacy: false,
        effects: [
            {
                levels: [
                    2
                ],
                tags: [
                    {
                        color: "Orange",
                        name: "True Release"
                    },
                    {
                        color: "Blue",
                        name: "During Attack"
                    }
                ],
                description: "This Spirit gains +3000 BP."
            }
        ],
        imageUrl: "/cards/purple/26RSD02-003.webp",
        levels: [
            {
                level: 1,
                coreCost: 1,
                bp: 3000
            },
            {
                level: 2,
                coreCost: 3,
                bp: 5000,
                isTrueRelease: true
            }
        ]
    },

    {
        id: "26RSD02-004",
        name: "Garsis",
        type: "Spirit",
        colors: [
            "Purple"
        ],
        cost: 4,
        reductions: [
            {
                color: "Purple",
                amount: 2
            }
        ],
        symbols: [
            {
                color: "Purple",
                type: "Normal",
                amount: 1
            }
        ],
        families: [
            "Bloodrouse"
        ],
        rarity: [
            "Common"
        ],
        hasLegacy: false,
        effects: [
            {
                levels: [
                    2
                ],
                tags: [
                    {
                        color: "Orange",
                        name: "True Release"
                    },
                    {
                        color: "Blue",
                        name: "When Attack"
                    }
                ],
                description: "Target an opposing Cost 4 or less Spirit. Send a core, besides Soul Core from it to the Reserve."
            }
        ],
        imageUrl: "/cards/purple/26RSD02-004.webp",
        levels: [
            {
                level: 1,
                coreCost: 1,
                bp: 3000
            },
            {
                level: 2,
                coreCost: 2,
                bp: 5000,
                isTrueRelease: true
            }
        ]
    },

    {
        id: "26RSD02-005",
        name: "Boogilugar",
        type: "Spirit",
        colors: [
            "Purple"
        ],
        cost: 4,
        reductions: [
            {
                color: "Purple",
                amount: 3
            }
        ],
        symbols: [
            {
                color: "Purple",
                type: "EX",
                amount: 1
            }
        ],
        families: [
            "Dark Puce",
            "Bloodrouse"
        ],
        rarity: [
            "Common"
        ],
        hasLegacy: false,
        effects: [],
        imageUrl: "/cards/purple/26RSD02-005.webp",
        levels: [
            {
                level: 1,
                coreCost: 1,
                bp: 5000
            },
            {
                level: 2,
                coreCost: 3,
                bp: 8000
            }
        ]
    },

    {
        id: "26RSD02-006",
        name: "Ram Toker",
        type: "Spirit",
        colors: [
            "Purple"
        ],
        cost: 5,
        reductions: [
            {
                color: "Purple",
                amount: 2
            }
        ],
        symbols: [
            {
                color: "Purple",
                type: "Normal",
                amount: 1
            }
        ],
        families: [
            "Dark Puce",
            "Bloodrouse"
        ],
        rarity: [
            "Common"
        ],
        hasLegacy: false,
        effects: [
            {
                levels: [
                    1,
                    2
                ],
                tags: [
                    {
                        color: "Blue",
                        name: "When Summoned"
                    }
                ],
                description: "Draw a card."
            }
        ],
        imageUrl: "/cards/purple/26RSD02-006.webp",
        levels: [
            {
                level: 1,
                coreCost: 1,
                bp: 4000
            },
            {
                level: 2,
                coreCost: 3,
                bp: 6000
            }
        ]
    },

    {
        id: "26RSD02-007",
        name: "Lady Lamica",
        type: "Spirit",
        colors: [
            "Purple"
        ],
        cost: 5,
        reductions: [
            {
                color: "Purple",
                amount: 3
            }
        ],
        symbols: [
            {
                color: "Purple",
                type: "Normal",
                amount: 1
            }
        ],
        families: [
            "Bloodrouse"
        ],
        rarity: [
            "Common"
        ],
        hasLegacy: false,
        effects: [
            {
                levels: [
                    1,
                    2
                ],
                tags: [
                    {
                        color: "Blue",
                        name: "When Summoned"
                    }
                ],
                description: "If you control any exhausted \"Bloodrouse\" family Spirit, target an opposing Spirit. Send a core, besides Soul Core, from it to the Reserve."
            },
            {
                levels: [
                    2
                ],
                tags: [
                    {
                        color: "Orange",
                        name: "True Release"
                    },
                    {
                        color: "Blue",
                        name: "During Attack"
                    }
                ],
                description: "This Spirit gains +2000 BP."
            }
        ],
        imageUrl: "/cards/purple/26RSD02-007.webp",
        levels: [
            {
                level: 1,
                coreCost: 1,
                bp: 4000
            },
            {
                level: 2,
                coreCost: 3,
                bp: 6000,
                isTrueRelease: true
            }
        ]
    },

    {
        id: "26RSD02-008",
        name: "Ogrul",
        type: "Spirit",
        colors: [
            "Purple"
        ],
        cost: 6,
        reductions: [
            {
                color: "Purple",
                amount: 3
            }
        ],
        symbols: [
            {
                color: "Purple",
                type: "Normal",
                amount: 1
            }
        ],
        families: [
            "Bloodrouse"
        ],
        rarity: [
            "Common"
        ],
        hasLegacy: false,
        effects: [
            {
                levels: [
                    2
                ],
                tags: [
                    {
                        color: "Blue",
                        name: "When Attacks"
                    }
                ],
                description: "Target an opposing Spirit. Send a core, besides Soul Core, from it to the Reserve."
            }
        ],
        imageUrl: "/cards/purple/26RSD02-008.webp",
        levels: [
            {
                level: 1,
                coreCost: 1,
                bp: 6000
            },
            {
                level: 2,
                coreCost: 3,
                bp: 8000
            }
        ]
    },

    {
        id: "26RSD02-009",
        name: "Utmost Depth: The Bloodrouse Mountain Range",
        type: "Nexus",
        colors: [
            "Purple"
        ],
        cost: 3,
        reductions: [
            {
                color: "Purple",
                amount: 2
            }
        ],
        symbols: [
            {
                color: "Purple",
                type: "Normal",
                amount: 1
            }
        ],
        families: [
            "Bloodrouse"
        ],
        rarity: [
            "Common"
        ],
        hasLegacy: false,
        effects: [
            {
                levels: [
                    1,
                    2
                ],
                tags: [
                    {
                        color: "Blue",
                        name: "Your Attack Step"
                    },
                    {
                        color: "Purple",
                        name: "Invoke: Flash"
                    }
                ],
                description: "Exhaust this Nexus > Target one of your attacking \"Bloodrouse\" family Spirits. During this battle, it gains +2000 BP."
            },
            {
                levels: [
                    2
                ],
                tags: [
                    {
                        color: "Orange",
                        name: "True Release"
                    },
                    {
                        color: "Blue",
                        name: "Your Main Step"
                    }
                ],
                description: "When you're summoning any \"Bloodrouse\" family Spirit card, if any opposing Spirit is depleted this turn, this Nexus gains an extra Purple symbol."
            }
        ],
        imageUrl: "/cards/purple/26RSD02-009.webp",
        levels: [
            {
                level: 1,
                coreCost: 0
            },
            {
                level: 2,
                coreCost: 3,
                isTrueRelease: true
            }
        ]
    },

    {
        id: "26RSD02-010",
        name: "The Violet Witherlands",
        type: "Nexus",
        colors: [
            "Purple"
        ],
        cost: 4,
        reductions: [
            {
                color: "Purple",
                amount: 2
            }
        ],
        symbols: [
            {
                color: "Purple",
                type: "Normal",
                amount: 1
            }
        ],
        families: [
            "Bloodrouse"
        ],
        rarity: [
            "Common"
        ],
        hasLegacy: false,
        effects: [
            {
                levels: [
                    1,
                    2
                ],
                tags: [
                    {
                        color: "Blue",
                        name: "When Deployed"
                    }
                ],
                description: "Target an opposing Spirit. Send a core, besides Soul Core, from it to the Reserve."
            },
            {
                levels: [
                    2
                ],
                tags: [
                    {
                        color: "Purple",
                        name: "Invoke: Main"
                    }
                ],
                description: "Destroy this Nexus ▶ Target an opposing Cost 3 or less Spirit. Send cores from it to the Reserve until one core remains. (The opponent chooses which cores to send.)"
            }
        ],
        imageUrl: "/cards/purple/26RSD02-010.webp",
        levels: [
            {
                level: 1,
                coreCost: 0
            },
            {
                level: 2,
                coreCost: 1
            }
        ]
    },

    {
        id: "26RSD02-011",
        name: "Dark Hang",
        type: "Magic",
        colors: [
            "Purple"
        ],
        cost: 4,
        reductions: [
            {
                color: "Purple",
                amount: 2
            }
        ],
        symbols: [],
        families: [
            "Bloodrouse"
        ],
        rarity: [
            "Common"
        ],
        hasLegacy: false,
        effects: [],
        imageUrl: "/cards/purple/26RSD02-011.webp",
        mainEffect: "Target one of your \"Bloodrouse\" family Spirits. Destroy it. If you've done so, put a core from the Void to your Reserve.",
        flashEffect: "Target one of your Spirits. During this turn, give it +2000 BP."
    },

    {
        id: "26RSD02-012",
        name: "Blood Sip",
        type: "Magic",
        colors: [
            "Purple"
        ],
        cost: 4,
        reductions: [
            {
                color: "Purple",
                amount: 2
            }
        ],
        symbols: [
            {
                color: "Purple",
                type: "EX",
                amount: 1
            }
        ],
        families: [
            "Bloodrouse"
        ],
        rarity: [
            "Common"
        ],
        hasLegacy: false,
        effects: [],
        imageUrl: "/cards/purple/26RSD02-012.webp",
        mainEffect: "",
        flashEffect: "Target an opposing Spirit. Send cores from it to the Reserve until one core remains. (The opponent choses which cores to send)"
    },

    {
        id: "26RSD02-013",
        name: "Rainy Poison",
        type: "Magic",
        colors: [
            "Purple"
        ],
        cost: 4,
        reductions: [
            {
                color: "Purple",
                amount: 3
            }
        ],
        symbols: [],
        families: [
            "Bloodrouse"
        ],
        rarity: [
            "Common"
        ],
        hasLegacy: true,
        effects: [],
        imageUrl: "/cards/purple/26RSD02-013.webp",
        mainEffect: "",
        flashEffect: "Target one of your Spirits. During this turn, give it +2000 BP. Then, if your Life was reduced this turn, during this turn, your Life can't be reduced by the attacks of opposing Spirits with one core on them."
    },

    {
        id: "26RSD02-014",
        name: "Soul Bite",
        type: "Magic",
        colors: [
            "Purple"
        ],
        cost: 6,
        reductions: [
            {
                color: "Purple",
                amount: 3
            }
        ],
        symbols: [
            {
                color: "Purple",
                type: "EX",
                amount: 1
            }
        ],
        families: [
            "Bloodrouse"
        ],
        rarity: [
            "Common"
        ],
        hasLegacy: false,
        effects: [],
        imageUrl: "/cards/purple/26RSD02-014.webp",
        mainEffect: "",
        flashEffect: "Target an opposing Spirit. Send two cores from it to the Reserve. (The opponent chooses which cores to send)",
        soulMagicConditionColor: "Purple"
    },

    {
        id: "26RSD02-X01",
        name: "The HeadNurse Nephila",
        type: "Spirit",
        colors: [
            "Purple"
        ],
        cost: 7,
        reductions: [
            {
                color: "Purple",
                amount: 3
            }
        ],
        symbols: [
            {
                color: "Purple",
                type: "Normal",
                amount: 1
            }
        ],
        families: [
            "Bloodrouse"
        ],
        rarity: [
            "X-Rare"
        ],
        hasLegacy: true,
        effects: [
            {
                levels: [
                    1,
                    2
                ],
                tags: [
                    {
                        color: "Blue",
                        name: "When Summoned"
                    }
                ],
                description: "Target an opposing Spirit. Send cores from it to the Reserve until one core remains. (The opponent chooses which cores to send.)"
            },
            {
                levels: [
                    2
                ],
                tags: [
                    {
                        color: "Blue",
                        name: "When Attacks"
                    }
                ],
                description: "Target an opposing Spirit. Send a core, besides Soul Core, from it to the Reserve. If it depletes, draw a card."
            }
        ],
        imageUrl: "/cards/purple/26RSD02-X01.webp",
        levels: [
            {
                level: 1,
                coreCost: 1,
                bp: 7000
            },
            {
                level: 2,
                coreCost: 3,
                bp: 9000
            }
        ]
    },

    {
        id: "26RSD02-X02",
        name: "Emperor Perigorouge",
        type: "Spirit",
        colors: [
            "Purple"
        ],
        cost: 9,
        reductions: [
            {
                color: "Purple",
                amount: 4
            }
        ],
        symbols: [
            {
                color: "Purple",
                type: "Normal",
                amount: 1
            }
        ],
        families: [
            "Bloodrouse"
        ],
        rarity: [
            "X-Rare"
        ],
        hasLegacy: true,
        effects: [
            {
                levels: [
                    1,
                    2
                ],
                tags: [
                    {
                        color: "Blue",
                        name: "When Summoned"
                    }
                ],
                description: "Target an opposing Spirit. Send a total of two cores from it to the Reserve. If you control any exhausted \"Bloodrouse\" family Spirit, target up to two Spirits instead. (The opponent chooses which cores to send.)"
            },
            {
                levels: [
                    2
                ],
                tags: [
                    {
                        color: "Orange",
                        name: "True Release"
                    },
                    {
                        color: "Blue",
                        name: "During Attacks"
                    }
                ],
                description: "If any opposing Spirit is depleted by your effects this turn, this Spirit can't be blocked by opposing Cost 4 or less Spirits."
            }
        ],
        imageUrl: "/cards/purple/26RSD02-X02.webp",
        levels: [
            {
                level: 1,
                coreCost: 1,
                bp: 7000
            },
            {
                level: 2,
                coreCost: 4,
                bp: 10000,
                isTrueRelease: true
            }
        ]
    }
];
