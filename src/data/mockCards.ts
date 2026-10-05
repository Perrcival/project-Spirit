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
    },

    {
        id: "26RSD03-001",
        name: "Flutty",
        type: "Spirit",
        colors: [
            "Green"
        ],
        cost: 2,
        reductions: [
            {
                color: "Green",
                amount: 1
            }
        ],
        symbols: [
            {
                color: "Green",
                type: "Normal",
                amount: 1
            }
        ],
        families: [
            "Armored Fish"
        ],
        rarity: [
            "Common"
        ],
        hasLegacy: false,
        effects: [
            {
                levels: [],
                tags: [
                    {
                        color: "Blue",
                        name: "Flash - Opposing Attack Step"
                    }
                ],
                description: "You can summon this card from the Hand using cores from the Reserve to pay for the summon cost and putting onto it."
            }
        ],
        imageUrl: "/cards/green/26RSD03-001.webp",
        levels: [
            {
                level: 1,
                coreCost: 1,
                bp: 1000
            },
            {
                level: 2,
                coreCost: 3,
                bp: 3000
            }
        ]
    },

    {
        id: "26RSD03-002",
        name: "Puffer",
        type: "Spirit",
        colors: [
            "Green"
        ],
        cost: 3,
        reductions: [
            {
                color: "Green",
                amount: 1
            }
        ],
        symbols: [
            {
                color: "Green",
                type: "Normal",
                amount: 1
            }
        ],
        families: [
            "Armored Fish"
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
                description: "Put a core from the Void to your Trash."
            }
        ],
        imageUrl: "/cards/green/26RSD03-002.webp",
        levels: [
            {
                level: 1,
                coreCost: 1,
                bp: 2000
            },
            {
                level: 2,
                coreCost: 2,
                bp: 3000
            }
        ]
    },

    {
        id: "26RSD03-003",
        name: "Rassehead",
        type: "Spirit",
        colors: [
            "Green"
        ],
        cost: 3,
        reductions: [
            {
                color: "Green",
                amount: 1
            }
        ],
        symbols: [
            {
                color: "Green",
                type: "EX",
                amount: 1
            }
        ],
        families: [
            "Oceanic Green",
            "Armored Fish"
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
                description: "You can target an opposing Cost 4 or less Spirits. Exhaust it."
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
        imageUrl: "/cards/green/26RSD03-003.webp",
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
        id: "26RSD03-004",
        name: "Straray",
        type: "Spirit",
        colors: [
            "Green"
        ],
        cost: 3,
        reductions: [
            {
                color: "Green",
                amount: 2
            }
        ],
        symbols: [
            {
                color: "Green",
                type: "EX",
                amount: 1
            }
        ],
        families: [
            "Oceanic Green",
            "Armored Fish"
        ],
        rarity: [
            "Common"
        ],
        hasLegacy: false,
        effects: [],
        imageUrl: "/cards/green/26RSD03-004.webp",
        levels: [
            {
                level: 1,
                coreCost: 1,
                bp: 4000
            },
            {
                level: 2,
                coreCost: 3,
                bp: 7000
            }
        ]
    },

    {
        id: "26RSD03-005",
        name: "Mola Moula",
        type: "Spirit",
        colors: [
            "Green"
        ],
        cost: 4,
        reductions: [
            {
                color: "Green",
                amount: 3
            }
        ],
        symbols: [
            {
                color: "Green",
                type: "EX",
                amount: 1
            }
        ],
        families: [
            "Oceanic Green",
            "Armored Fish"
        ],
        rarity: [
            "Common"
        ],
        hasLegacy: false,
        effects: [],
        imageUrl: "/cards/green/26RSD03-005.webp",
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
        id: "26RSD03-006",
        name: "The OceanPhantom Coela-Canth",
        type: "Spirit",
        colors: [
            "Green"
        ],
        cost: 5,
        reductions: [
            {
                color: "Green",
                amount: 2
            }
        ],
        symbols: [
            {
                color: "Green",
                type: "Normal",
                amount: 1
            }
        ],
        families: [
            "Armored Fish"
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
                description: "Besides this Spirit, you can target an \"Armored Fish\" family Spirit you control. Put a core from the Void to it. Then, if you control any exhausted \"Armored Fish\" family Spirit, you can target one of your Spirits. Refresh it."
            }
        ],
        imageUrl: "/cards/green/26RSD03-006.webp",
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
        id: "26RSD03-007",
        name: "Garizarot",
        type: "Spirit",
        colors: [
            "Green"
        ],
        cost: 5,
        reductions: [
            {
                color: "Green",
                amount: 3
            }
        ],
        symbols: [
            {
                color: "Green",
                type: "Normal",
                amount: 1
            }
        ],
        families: [
            "Armored Fish"
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
                        name: "When Attacks"
                    }
                ],
                description: "You can target an opposing exhausted Spirit. During this battle, it must block if possible even while exhausted."
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
        imageUrl: "/cards/green/26RSD03-007.webp",
        levels: [
            {
                level: 1,
                coreCost: 1,
                bp: 5000
            },
            {
                level: 2,
                coreCost: 2,
                bp: 6000,
                isTrueRelease: true
            }
        ]
    },

    {
        id: "26RSD03-008",
        name: "The HeavyJaws Dorogoliath",
        type: "Spirit",
        colors: [
            "Green"
        ],
        cost: 5,
        reductions: [
            {
                color: "Green",
                amount: 3
            }
        ],
        symbols: [
            {
                color: "Green",
                type: "Normal",
                amount: 1
            }
        ],
        families: [
            "Armored Fish"
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
                        name: "During Attack"
                    }
                ],
                description: "For each \"Armored Fish\" family Spirit you control, this Spirit gains +1000 BP."
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
                description: "You can target an opposing Cost 3 or less Spirit. Exhaust it."
            }
        ],
        imageUrl: "/cards/green/26RSD03-008.webp",
        levels: [
            {
                level: 1,
                coreCost: 1,
                bp: 5000
            },
            {
                level: 2,
                coreCost: 2,
                bp: 6000
            }
        ]
    },

    {
        id: "26RSD03-009",
        name: "The TransparentHood Olindias",
        type: "Spirit",
        colors: [
            "Green"
        ],
        cost: 6,
        reductions: [
            {
                color: "Green",
                amount: 3
            }
        ],
        symbols: [
            {
                color: "Green",
                type: "Normal",
                amount: 1
            }
        ],
        families: [
            "Armored Fish"
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
                description: "Reveal three cards from your decktop. Among them, you can summon/deploy a Cost 3 or less \"Armored Fish\" family card. Return any remaining cards to the deckbottom in any order."
            },
            {
                levels: [
                    2
                ],
                tags: [
                    {
                        color: "Blue",
                        name: "When Blocks"
                    }
                ],
                description: "You can target an opposing Spirit. Exhaust it."
            }
        ],
        imageUrl: "/cards/green/26RSD03-009.webp",
        levels: [
            {
                level: 1,
                coreCost: 1,
                bp: 6000
            },
            {
                level: 2,
                coreCost: 2,
                bp: 7000
            }
        ]
    },

    {
        id: "26RSD03-010",
        name: "Utmost Depth: The Emerald Abyss",
        type: "Nexus",
        colors: [
            "Green"
        ],
        cost: 3,
        reductions: [
            {
                color: "Green",
                amount: 2
            }
        ],
        symbols: [
            {
                color: "Green",
                type: "Normal",
                amount: 1
            }
        ],
        families: [
            "Armored Fish"
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
                    }
                ],
                description: "All your attacking \"Armored Fish\" family Spirits gain +1000 BP."
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
                        color: "Purple",
                        name: "Invoke: Main"
                    },
                    {
                        color: "Red",
                        name: "Once Per Turn"
                    }
                ],
                description: "Show a Cost 4 or less \"Armored Fish\" family card from your Hand to the opponent. Return it to the deckbottom ▶ Draw a card."
            }
        ],
        imageUrl: "/cards/green/26RSD03-010.webp",
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
        id: "26RSD03-011",
        name: "The Bubble Cluster Realm",
        type: "Nexus",
        colors: [
            "Green"
        ],
        cost: 4,
        reductions: [
            {
                color: "Green",
                amount: 2
            }
        ],
        symbols: [
            {
                color: "Green",
                type: "Normal",
                amount: 1
            }
        ],
        families: [
            "Armored Fish"
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
                description: "You can target an opposing Spirit. Exhaust it."
            },
            {
                levels: [
                    2
                ],
                tags: [
                    {
                        color: "Blue",
                        name: "Start of Your Main Step"
                    }
                ],
                description: "If you control two or more exhausted \"Armored Fish\" family Spirits, put a core from the Void to your Reserve."
            }
        ],
        imageUrl: "/cards/green/26RSD03-011.webp",
        levels: [
            {
                level: 1,
                coreCost: 0
            },
            {
                level: 2,
                coreCost: 2
            }
        ]
    },

    {
        id: "26RSD03-012",
        name: "Hand Molt",
        type: "Magic",
        colors: [
            "Green"
        ],
        cost: 4,
        reductions: [
            {
                color: "Green",
                amount: 2
            }
        ],
        symbols: [],
        families: [
            "Armored Fish"
        ],
        rarity: [
            "Common"
        ],
        hasLegacy: false,
        effects: [],
        imageUrl: "/cards/green/26RSD03-012.webp",
        mainEffect: "Return all your Hand to the deckbottom in any order. When one or more card is returned, draw a card for each card in the opposing Hand",
        flashEffect: "Target one of your Spirits. During this turn, give it +2000 BP"
    },

    {
        id: "26RSD03-013",
        name: "Vortex Shave",
        type: "Magic",
        colors: [
            "Green"
        ],
        cost: 4,
        reductions: [
            {
                color: "Green",
                amount: 3
            }
        ],
        symbols: [
            {
                color: "Green",
                type: "EX",
                amount: 1
            }
        ],
        families: [
            "Armored Fish"
        ],
        rarity: [
            "Common"
        ],
        hasLegacy: false,
        effects: [],
        imageUrl: "/cards/green/26RSD03-013.webp",
        mainEffect: "",
        flashEffect: "Target an opposing Spirit. Exhaust it."
    },

    {
        id: "26RSD03-014",
        name: "Tentacle Attack",
        type: "Magic",
        colors: [
            "Green"
        ],
        cost: 6,
        reductions: [
            {
                color: "Green",
                amount: 3
            }
        ],
        symbols: [
            {
                color: "Green",
                type: "EX",
                amount: 1
            }
        ],
        families: [
            "Armored Fish"
        ],
        rarity: [
            "Common"
        ],
        hasLegacy: false,
        effects: [],
        imageUrl: "/cards/green/26RSD03-014.webp",
        mainEffect: "",
        flashEffect: "Target an opposing Spirit. Heavy exhaust it.",
        soulMagicConditionColor: "Green"
    },

    {
        id: "26RSD03-X01",
        name: "The ArmoredHands Squid",
        type: "Spirit",
        colors: [
            "Green"
        ],
        cost: 5,
        reductions: [
            {
                color: "Green",
                amount: 3
            }
        ],
        symbols: [
            {
                color: "Green",
                type: "Normal",
                amount: 1
            }
        ],
        families: [
            "Oceanic Green", "Armored Fish"
        ],
        rarity: [
            "X-Rare"
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
                description: "You can target an opposing exhausted Spirit. Heavy exhaust it."
            },
            {
                levels: [
                    2
                ],
                tags: [
                    {
                        color: "Blue",
                        name: "During Attack"
                    },
                    {
                        color: "Red",
                        name: "Once Per Turn"
                    }
                ],
                description: "At the end of battle, this Spirit can refresh."
            }
        ],
        imageUrl: "/cards/green/26RSD03-X01.webp",
        levels: [
            {
                level: 1,
                coreCost: 1,
                bp: 5000
            },
            {
                level: 2,
                coreCost: 3,
                bp: 7000
            }
        ]
    },

    {
        id: "26RSD03-X02",
        name: "The DeepNest Duntekleo",
        type: "Spirit",
        colors: [
            "Green"
        ],
        cost: 6,
        reductions: [
            {
                color: "Green",
                amount: 3
            }
        ],
        symbols: [
            {
                color: "Green",
                type: "Normal",
                amount: 1
            }
        ],
        families: [
            "Armored Fish"
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
                description: "Target up to two \"Armored Fish\" family Spirits you control. During this turn, they gain +3000 BP."
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
                        name: "Your Attack Step"
                    },
                    {
                        color: "Purple",
                        name: "Invoke: Flash"
                    },
                    {
                        color: "Red",
                        name: "Once Per Turn"
                    }
                ],
                description: "Besides this Spirit, target an \"Armored Fish\" family Spirit you control. Refresh it."
            }
        ],
        imageUrl: "/cards/green/26RSD03-X02.webp",
        levels: [
            {
                level: 1,
                coreCost: 1,
                bp: 6000
            },
            {
                level: 2,
                coreCost: 4,
                bp: 9000,
                isTrueRelease: true
            }
        ]
    },

    {
        id: "26RSD04-001",
        name: "Atun",
        type: "Spirit",
        colors: [
            "White"
        ],
        cost: 2,
        reductions: [
            {
                color: "White",
                amount: 1
            }
        ],
        symbols: [
            {
                color: "White",
                type: "EX",
                amount: 1
            }
        ],
        families: [
            "Mineroid"
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
                        name: "When Blocks"
                    }
                ],
                description: "Target an \"Mineroid\" family Nexus you control. Put a core from the Void to it."
            }
        ],
        imageUrl: "/cards/white/26RSD04-001.webp",
        levels: [
            {
                level: 1,
                coreCost: 1,
                bp: 1000
            },
            {
                level: 2,
                coreCost: 3,
                bp: 3000,
                isTrueRelease: true
            }
        ]
    },

    {
        id: "26RSD04-002",
        name: "Nonril",
        type: "Spirit",
        colors: [
            "White"
        ],
        cost: 3,
        reductions: [
            {
                color: "White",
                amount: 1
            }
        ],
        symbols: [
            {
                color: "White",
                type: "Normal",
                amount: 1
            }
        ],
        families: [
            "Mineroid"
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
                description: "Put a core from the Void to your Trash."
            },
            {
                levels: [
                    2
                ],
                tags: [
                    {
                        color: "Blue",
                        name: "During Block"
                    }
                ],
                description: "If you have three or more White symbols, this Spirit gains +5000 BP."
            }
        ],
        imageUrl: "/cards/white/26RSD04-002.webp",
        levels: [
            {
                level: 1,
                coreCost: 1,
                bp: 2000
            },
            {
                level: 2,
                coreCost: 3,
                bp: 3000
            }
        ]
    },

    {
        id: "26RSD04-003",
        name: "Arsinus",
        type: "Spirit",
        colors: [
            "White"
        ],
        cost: 4,
        reductions: [
            {
                color: "White",
                amount: 2
            }
        ],
        symbols: [
            {
                color: "White",
                type: "Normal",
                amount: 1
            }
        ],
        families: [
            "Mineroid"
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
                        color: "Purple",
                        name: "Invoke: Main"
                    }
                ],
                description: "Exhaust this Spirit ▶ Reveal two cards from your decktop. Among them, add a Cost 6 or more \"Mineroid\" family Spirit card to the Hand. Return any remaining cards to the deckbottom in any order."
            }
        ],
        imageUrl: "/cards/white/26RSD04-003.webp",
        levels: [
            {
                level: 1,
                coreCost: 1,
                bp: 3000
            },
            {
                level: 2,
                coreCost: 3,
                bp: 5000
            }
        ]
    },

    {
        id: "26RSD04-004",
        name: "The HeavyClaw Forclawer",
        type: "Spirit",
        colors: [
            "White"
        ],
        cost: 4,
        reductions: [
            {
                color: "White",
                amount: 3
            }
        ],
        symbols: [
            {
                color: "White",
                type: "Normal",
                amount: 1
            }
        ],
        families: [
            "Leucomyst",
            "Mineroid"
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
                        name: "Start of Opposing Attack Step"
                    },
                    {
                        color: "Red",
                        name: "Can't Stack"
                    }
                ],
                description: "You can target an opposing Spirit. It must attack at the start of the step if possible."
            },
            {
                levels: [
                    2
                ],
                tags: [],
                description: "When you're summoning any Cost 6 or more \"Mineroid\" family Spirit card, this Spirit gains an extra White symbol."
            }
        ],
        imageUrl: "/cards/white/26RSD04-004.webp",
        levels: [
            {
                level: 1,
                coreCost: 1,
                bp: 3000
            },
            {
                level: 2,
                coreCost: 3,
                bp: 5000
            }
        ]
    },

    {
        id: "26RSD04-005",
        name: "Chimeniruga",
        type: "Spirit",
        colors: [
            "White"
        ],
        cost: 4,
        reductions: [
            {
                color: "White",
                amount: 3
            }
        ],
        symbols: [
            {
                color: "White",
                type: "EX",
                amount: 1
            }
        ],
        families: [
            "Leucomyst",
            "Mineroid"
        ],
        rarity: [
            "Common"
        ],
        hasLegacy: false,
        effects: [],
        imageUrl: "/cards/white/26RSD04-005.webp",
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
        id: "26RSD04-006",
        name: "Dabity",
        type: "Spirit",
        colors: [
            "White"
        ],
        cost: 5,
        reductions: [
            {
                color: "White",
                amount: 2
            }
        ],
        symbols: [
            {
                color: "White",
                type: "Normal",
                amount: 1
            }
        ],
        families: [
            "Mineroid"
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
                description: "Target a \"Mineroid\" family Spirit you control. Put a core from the Void to it."
            },
            {
                levels: [
                    2
                ],
                tags: [
                    {
                        color: "Blue",
                        name: "During Block"
                    }
                ],
                description: "This Spirit gains +2000 BP."
            }
        ],
        imageUrl: "/cards/white/26RSD04-006.webp",
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
        id: "26RSD04-007",
        name: "Junks",
        type: "Spirit",
        colors: [
            "White"
        ],
        cost: 6,
        reductions: [
            {
                color: "White",
                amount: 3
            }
        ],
        symbols: [
            {
                color: "White",
                type: "EX",
                amount: 1
            }
        ],
        families: [
            "Leucomyst",
            "Mineroid"
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
                        name: "Your End Step"
                    }
                ],
                description: "This Spirit can refresh."
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
                        name: "When Attacks"
                    }
                ],
                description: "Target an opposing 4000 BP or less Spirit. Return it to the Hand."
            }
        ],
        imageUrl: "/cards/white/26RSD04-007.webp",
        levels: [
            {
                level: 1,
                coreCost: 1,
                bp: 5000
            },
            {
                level: 2,
                coreCost: 3,
                bp: 7000,
                isTrueRelease: true
            }
        ]
    },

    {
        id: "26RSD04-008",
        name: "The MightyArm Anatoma",
        type: "Spirit",
        colors: [
            "White"
        ],
        cost: 7,
        reductions: [
            {
                color: "White",
                amount: 4
            }
        ],
        symbols: [
            {
                color: "White",
                type: "Normal",
                amount: 1
            }
        ],
        families: [
            "Leucomyst",
            "Mineroid"
        ],
        rarity: [
            "Common"
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
                description: "Target an opposing 6000 BP or less Spirit. Return it to the Hand."
            }
        ],
        imageUrl: "/cards/white/26RSD04-008.webp",
        levels: [
            {
                level: 1,
                coreCost: 1,
                bp: 7000
            },
            {
                level: 2,
                coreCost: 2,
                bp: 8000
            }
        ]
    },

    {
        id: "26RSD04-009",
        name: "The Quarry Plain",
        type: "Nexus",
        colors: [
            "White"
        ],
        cost: 3,
        reductions: [
            {
                color: "White",
                amount: 2
            }
        ],
        symbols: [
            {
                color: "White",
                type: "Normal",
                amount: 1
            }
        ],
        families: [
            "Mineroid"
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
                        name: "Your Main Step"
                    }
                ],
                description: "When you're summoning a Cost 6 or more \"Mineroid\" family Spirit card, this Nexus gains an extra White symbol."
            },
            {
                levels: [
                    2
                ],
                tags: [
                    {
                        color: "Blue",
                        name: "Your End Step"
                    }
                ],
                description: "You can target one of your \"Mineroid\" family Spirits. Refresh it."
            }
        ],
        imageUrl: "/cards/white/26RSD04-009.webp",
        levels: [
            {
                level: 1,
                coreCost: 0
            },
            {
                level: 2,
                coreCost: 2
            }
        ]
    },

    {
        id: "26RSD04-010",
        name: "Utmost Depth: The White Heaven Plain",
        type: "Nexus",
        colors: [
            "White"
        ],
        cost: 3,
        reductions: [
            {
                color: "White",
                amount: 2
            }
        ],
        symbols: [
            {
                color: "White",
                type: "Normal",
                amount: 1
            }
        ],
        families: [
            "Mineroid"
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
                        name: "Opposing Attack Step"
                    }
                ],
                description: "All your Cost 5 or less \"Mineroid\" family Spirits gain +1000 BP."
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
                        name: "Your Attack Step"
                    }
                ],
                description: "When only the opposing Spirit is destroyed by comparing BP with your Cost 6 or more \"Mineroid\" family Spirits, target one of your Spirits. Put a core from the Void to it."
            }
        ],
        imageUrl: "/cards/white/26RSD04-010.webp",
        levels: [
            {
                level: 1,
                coreCost: 0
            },
            {
                level: 2,
                coreCost: 2,
                isTrueRelease: true
            }
        ]
    },

    {
        id: "26RSD04-011",
        name: "The Menhir Circle",
        type: "Nexus",
        colors: [
            "White"
        ],
        cost: 4,
        reductions: [
            {
                color: "White",
                amount: 3
            }
        ],
        symbols: [
            {
                color: "White",
                type: "Normal",
                amount: 1
            }
        ],
        families: [
            "Mineroid"
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
                description: "Show up to two White \"Mineroid\" family cards from your Hand to the opponent. Return them to the deckbottom in any order. For each card returned, draw a card."
            },
            {
                levels: [
                    2
                ],
                tags: [
                    {
                        color: "Blue",
                        name: "Opposing Attack Step"
                    },
                    {
                        color: "Purple",
                        name: "Invoke: Flash"
                    }
                ],
                description: "Exhaust this Nexus ▶ Target an opposing attacking 3000 BP or less Spirit. Return it to the Hand."
            }
        ],
        imageUrl: "/cards/white/26RSD04-011.webp",
        levels: [
            {
                level: 1,
                coreCost: 0
            },
            {
                level: 2,
                coreCost: 3
            }
        ]
    },

    {
        id: "26RSD04-012",
        name: "Rock Drilling",
        type: "Magic",
        colors: [
            "White"
        ],
        cost: 2,
        reductions: [
            {
                color: "White",
                amount: 1
            }
        ],
        symbols: [],
        families: [
            "Mineroid"
        ],
        rarity: [
            "Common"
        ],
        hasLegacy: true,
        effects: [],
        imageUrl: "/cards/white/26RSD04-012.webp",
        mainEffect: "Show up to three \"Mineroid\" family cards from your Hand to the opponent. Return them to the deckbottom in any order. For each card returned, draw a card.",
        flashEffect: "Target one of your Spirits. During this turn, give it +3000 BP."
    },

    {
        id: "26RSD04-013",
        name: "Dream Rotor",
        type: "Magic",
        colors: [
            "White"
        ],
        cost: 4,
        reductions: [
            {
                color: "White",
                amount: 3
            }
        ],
        symbols: [
            {
                color: "White",
                type: "EX",
                amount: 1
            }
        ],
        families: [
            "Mineroid"
        ],
        rarity: [
            "Common"
        ],
        hasLegacy: false,
        effects: [],
        imageUrl: "/cards/white/26RSD04-013.webp",
        mainEffect: "",
        flashEffect: "Target an opposing 5000 BP or less Spirit. Return it to the Hand."
    },

    {
        id: "26RSD04-014",
        name: "Defensive Gate",
        type: "Magic",
        colors: [
            "White"
        ],
        cost: 5,
        reductions: [
            {
                color: "White",
                amount: 3
            }
        ],
        symbols: [
            {
                color: "White",
                type: "EX",
                amount: 1
            }
        ],
        families: [
            "Mineroid"
        ],
        rarity: [
            "Common"
        ],
        hasLegacy: false,
        effects: [],
        imageUrl: "/cards/white/26RSD04-014.webp",
        mainEffect: "",
        flashEffect: "Target an opposing Spirit. During this turn, your Life can't be reduced by its attack. If your Life was reduced during this turn, change to target two instead.",
        soulMagicConditionColor: "White"
    },

    {
        id: "26RSD04-X01",
        name: "The ContinentalShip Matanda",
        type: "Spirit",
        colors: [
            "White"
        ],
        cost: 8,
        reductions: [
            {
                color: "White",
                amount: 4
            }
        ],
        symbols: [
            {
                color: "White",
                type: "Normal",
                amount: 1
            }
        ],
        families: [
            "Mineroid"
        ],
        rarity: [
            "X-Rare"
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
                        name: "Your End Step"
                    }
                ],
                description: "You can target up to two \"Mineroid\" family Spirits you control. Refresh them."
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
                description: "This Spirit can't be blocked by opposing Cost 7 or less Spirits."
            }
        ],
        imageUrl: "/cards/white/26RSD04-X01.webp",
        levels: [
            {
                level: 1,
                coreCost: 1,
                bp: 9000
            },
            {
                level: 2,
                coreCost: 4,
                bp: 11000,
                isTrueRelease: true
            }
        ]
    },

    {
        id: "26RSD04-X02",
        name: "The TrueGateMinister Savatoma",
        type: "Spirit",
        colors: [
            "White"
        ],
        cost: 9,
        reductions: [
            {
                color: "White",
                amount: 4
            }
        ],
        symbols: [
            {
                color: "White",
                type: "Normal",
                amount: 1
            }
        ],
        families: [
            "Mineroid"
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
                description: "Target an opposing Spirit. Return it to the Hand. If you control any exhausted \"Mineroid\" family Spirit, you can return it to the deckbottom instead."
            }
        ],
        imageUrl: "/cards/white/26RSD04-X02.webp",
        levels: [
            {
                level: 1,
                coreCost: 1,
                bp: 10000
            },
            {
                level: 2,
                coreCost: 3,
                bp: 12000
            }
        ]
    },

    {
        id: "26RSD05-001",
        name: "Quill",
        type: "Spirit",
        colors: [
            "Yellow"
        ],
        cost: 2,
        reductions: [
            {
                color: "Yellow",
                amount: 1
            }
        ],
        symbols: [
            {
                color: "Yellow",
                type: "EX",
                amount: 1
            }
        ],
        families: [
            "Topaz",
            "Thunder Dragon"
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
                        name: "When Destroyed"
                    }
                ],
                description: "You can target an opposing Spirit. During this turn, give it -2000 BP. Then, if it has 0 BP, destroy it."
            }
        ],
        imageUrl: "/cards/yellow/26RSD05-001.webp",
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
        id: "26RSD05-002",
        name: "Amaru",
        type: "Spirit",
        colors: [
            "Yellow"
        ],
        cost: 3,
        reductions: [
            {
                color: "Yellow",
                amount: 1
            }
        ],
        symbols: [
            {
                color: "Yellow",
                type: "Normal",
                amount: 1
            }
        ],
        families: [
            "Thunder Dragon"
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
                description: "You can reveal three cards from your decktop. Among them, add a \"Thunder Dragon\" family Magic card to the Hand. Return any remaining cards to the deckbottom in any order."
            }
        ],
        imageUrl: "/cards/yellow/26RSD05-002.webp",
        levels: [
            {
                level: 1,
                coreCost: 1,
                bp: 2000
            },
            {
                level: 2,
                coreCost: 2,
                bp: 3000
            }
        ]
    },

    {
        id: "26RSD05-003",
        name: "Raniraya",
        type: "Spirit",
        colors: [
            "Yellow"
        ],
        cost: 3,
        reductions: [
            {
                color: "Yellow",
                amount: 2
            }
        ],
        symbols: [
            {
                color: "Yellow",
                type: "Normal",
                amount: 1
            }
        ],
        families: [
            "Topaz",
            "Thunder Dragon"
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
                        name: "When Destroyed"
                    }
                ],
                description: "You can target an opposing Spirit. During this turn, give it -2000 BP. Then, if it has 0 BP, destroy it."
            }
        ],
        imageUrl: "/cards/yellow/26RSD05-003.webp",
        levels: [
            {
                level: 1,
                coreCost: 1,
                bp: 3000
            },
            {
                level: 2,
                coreCost: 2,
                bp: 4000
            }
        ]
    },

    {
        id: "26RSD05-004",
        name: "Divaes",
        type: "Spirit",
        colors: [
            "Yellow"
        ],
        cost: 4,
        reductions: [
            {
                color: "Yellow",
                amount: 2
            }
        ],
        symbols: [
            {
                color: "Yellow",
                type: "EX",
                amount: 1
            }
        ],
        families: [
            "Thunder Dragon"
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
                        name: "When Attacks"
                    }
                ],
                description: "Target an opposing Spirit. During this turn, give it -2000 BP. Then, if it has 0 BP, destroy it."
            }
        ],
        imageUrl: "/cards/yellow/26RSD05-004.webp",
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
        id: "26RSD05-005",
        name: "Lucance",
        type: "Spirit",
        colors: [
            "Yellow"
        ],
        cost: 4,
        reductions: [
            {
                color: "Yellow",
                amount: 3
            }
        ],
        symbols: [
            {
                color: "Yellow",
                type: "EX",
                amount: 1
            }
        ],
        families: [
            "Thunder Dragon"
        ],
        rarity: [
            "Common"
        ],
        hasLegacy: false,
        effects: [],
        imageUrl: "/cards/yellow/26RSD05-005.webp",
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
        id: "26RSD05-006",
        name: "Semarogue",
        type: "Spirit",
        colors: [
            "Yellow"
        ],
        cost: 5,
        reductions: [
            {
                color: "Yellow",
                amount: 3
            }
        ],
        symbols: [
            {
                color: "Yellow",
                type: "Normal",
                amount: 1
            }
        ],
        families: [
            "Topaz",
            "Thunder Dragon"
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
                        name: "When Attacks"
                    }
                ],
                description: "Target an opposing Spirit. During this turn, give it -2000 BP. Then, if it has 0 BP, destroy it."
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
                    },
                    {
                        color: "Red",
                        name: "Can't Stack"
                    }
                ],
                description: "When you use a \"Thunder Dragon\" family Magic card, draw a card."
            }
        ],
        imageUrl: "/cards/yellow/26RSD05-006.webp",
        levels: [
            {
                level: 1,
                coreCost: 1,
                bp: 5000
            },
            {
                level: 2,
                coreCost: 3,
                bp: 7000,
                isTrueRelease: true
            }
        ]
    },

    {
        id: "26RSD05-007",
        name: "The SearchingThunder Pelborg",
        type: "Spirit",
        colors: [
            "Yellow"
        ],
        cost: 5,
        reductions: [
            {
                color: "Yellow",
                amount: 3
            }
        ],
        symbols: [
            {
                color: "Yellow",
                type: "Normal",
                amount: 1
            }
        ],
        families: [
            "Thunder Dragon"
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
                description: "You can reveal three cards from your decktop. Among them, add a \"Thunder Dragon\" family card, besides any \"The SearchingThunder Pelborg\", to the Hand. Return any remaining cards to the deckbottom."
            }
        ],
        imageUrl: "/cards/yellow/26RSD05-007.webp",
        levels: [
            {
                level: 1,
                coreCost: 1,
                bp: 3000
            },
            {
                level: 2,
                coreCost: 2,
                bp: 4000
            }
        ]
    },

    {
        id: "26RSD05-008",
        name: "The CelestialThunderFist Wigil",
        type: "Spirit",
        colors: [
            "Yellow"
        ],
        cost: 6,
        reductions: [
            {
                color: "Yellow",
                amount: 3
            }
        ],
        symbols: [
            {
                color: "Yellow",
                type: "Normal",
                amount: 1
            }
        ],
        families: [
            "Thunder Dragon"
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
                description: "You can target an opposing Spirit. During this turn, give it -2000 BP. Then, if it has 0 BP, destroy it."
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
                        name: "When Attacks"
                    }
                ],
                description: "You can target an opposing Spirit. During this turn, give it -2000 BP. Then, if it has 0 BP, destroy it."
            }
        ],
        imageUrl: "/cards/yellow/26RSD05-008.webp",
        levels: [
            {
                level: 1,
                coreCost: 1,
                bp: 6000
            },
            {
                level: 2,
                coreCost: 2,
                bp: 7000,
                isTrueRelease: true
            }
        ]
    },

    {
        id: "26RSD05-009",
        name: "The Thunder Driftways",
        type: "Nexus",
        colors: [
            "Yellow"
        ],
        cost: 3,
        reductions: [
            {
                color: "Yellow",
                amount: 2
            }
        ],
        symbols: [
            {
                color: "Yellow",
                type: "Normal",
                amount: 1
            }
        ],
        families: [
            "Thunder Dragon"
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
                    }
                ],
                description: "All your \"Thunder Dragon\" family Spirits can't be blocked by opposing 1000 BP or less Spirits."
            },
            {
                levels: [
                    2
                ],
                tags: [
                    {
                        color: "Blue",
                        name: "Start of Your Main Step"
                    },
                    {
                        color: "Red",
                        name: " Can't Stack"
                    }
                ],
                description: "If you control any exhausted \"Thunder Dragon\" family Spirit, you can target an opposing Spirit. During this turn, give it -2000 BP. Then, if it has 0 BP, destroy it."
            }
        ],
        imageUrl: "/cards/yellow/26RSD05-009.webp",
        levels: [
            {
                level: 1,
                coreCost: 0
            },
            {
                level: 2,
                coreCost: 3
            }
        ]
    },

    {
        id: "26RSD05-010",
        name: "Utmost Depth: The Peaks of Great Thunder Mountain",
        type: "Nexus",
        colors: [
            "Yellow"
        ],
        cost: 4,
        reductions: [
            {
                color: "Yellow",
                amount: 2
            }
        ],
        symbols: [
            {
                color: "Yellow",
                type: "Normal",
                amount: 1
            }
        ],
        families: [
            "Thunder Dragon"
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
                        name: "Start of Opposing Attack Step"
                    }
                ],
                description: "You can target a color. During this step, every opposing 1000 BP or less Spirit loses a symbol of that color."
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
                        name: "Your Attack Step"
                    },
                    {
                        color: "Red",
                        name: "Can't Stack • Once Per Turn"
                    }
                ],
                description: "When you destroy any opposing 0 BP Spirit via your Spirit effects, draw a card."
            }
        ],
        imageUrl: "/cards/yellow/26RSD05-010.webp",
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
        id: "26RSD05-011",
        name: "Fire Pillar",
        type: "Magic",
        colors: [
            "Yellow"
        ],
        cost: 3,
        reductions: [
            {
                color: "Yellow",
                amount: 2
            }
        ],
        symbols: [],
        families: [
            "Thunder Dragon"
        ],
        rarity: [
            "Common"
        ],
        hasLegacy: false,
        effects: [],
        imageUrl: "/cards/yellow/26RSD05-011.webp",
        mainEffect: "Draw a card.",
        flashEffect: "Target an opposing Spirit. During this turn, give it -2000 BP. Then, destroy it if it has 0 BP."
    },

    {
        id: "26RSD05-012",
        name: "Rebirth Thunder",
        type: "Magic",
        colors: [
            "Yellow"
        ],
        cost: 3,
        reductions: [
            {
                color: "Yellow",
                amount: 2
            }
        ],
        symbols: [],
        families: [
            "Thunder Dragon"
        ],
        rarity: [
            "Common"
        ],
        hasLegacy: false,
        effects: [
            {
                levels: [],
                tags: [],
                description: "When your \"Thunder Dragon\" family Spirits are destroyed, you can return this card from the Trash to your Hand. You can only use this effect of the same card name once per turn."
            }
        ],
        imageUrl: "/cards/yellow/26RSD05-012.webp",
        mainEffect: "",
        flashEffect: "Target an opposing Spirit. During this turn, give it -2000 BP. Then, destroy it if it has 0 BP."
    },

    {
        id: "26RSD05-013",
        name: "Nestling",
        type: "Magic",
        colors: [
            "Yellow"
        ],
        cost: 4,
        reductions: [
            {
                color: "Yellow",
                amount: 2
            }
        ],
        symbols: [
            {
                color: "Yellow",
                type: "EX",
                amount: 1
            }
        ],
        families: [
            "Thunder Dragon"
        ],
        rarity: [
            "Common"
        ],
        hasLegacy: true,
        effects: [],
        imageUrl: "/cards/yellow/26RSD05-013.webp",
        mainEffect: "Show up to two \"Thunder Dragon\" family cards from your Hand to the opponent. Return them to the deckbottom in any order. If two cards are returned, draw three cards.",
        flashEffect: "Target one of your Spirits. During this turn, give it +3000 BP."
    },

    {
        id: "26RSD05-014",
        name: "Triple Thunder",
        type: "Magic",
        colors: [
            "Yellow"
        ],
        cost: 6,
        reductions: [
            {
                color: "Yellow",
                amount: 3
            }
        ],
        symbols: [
            {
                color: "Yellow",
                type: "EX",
                amount: 1
            }
        ],
        families: [
            "Thunder Dragon"
        ],
        rarity: [
            "Common"
        ],
        hasLegacy: false,
        effects: [],
        imageUrl: "/cards/yellow/26RSD05-014.webp",
        mainEffect: "",
        flashEffect: "Target an opposing Spirit. During this turn, give it -2000 BP. Then, destroy it if it's 0 BP. These happen three times.",
        soulMagicConditionColor: "Yellow"
    },

    {
        id: "26RSD05-X01",
        name: "The EruptingThunder Palecoeurl",
        type: "Spirit",
        colors: [
            "Yellow"
        ],
        cost: 7,
        reductions: [
            {
                color: "Yellow",
                amount: 3
            }
        ],
        symbols: [
            {
                color: "Yellow",
                type: "Normal",
                amount: 1
            }
        ],
        families: [
            "Thunder Dragon"
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
                        name: "During Attack"
                    }
                ],
                description: "This Spirit can't be blocked by opposing 4000 BP or less Spirit."
            },
            {
                levels: [
                    2
                ],
                tags: [
                    {
                        color: "Blue",
                        name: "Start of Your Attack Step"
                    }
                ],
                description: "During this turn, give every opposing Spirit -2000 BP. Then, if they have 0 BP, destroy them."
            }
        ],
        imageUrl: "/cards/yellow/26RSD05-X01.webp",
        levels: [
            {
                level: 1,
                coreCost: 1,
                bp: 8000
            },
            {
                level: 2,
                coreCost: 3,
                bp: 10000
            }
        ]
    },

    {
        id: "26RSD05-X02",
        name: "The SpellThunder Lucnas",
        type: "Spirit",
        colors: [
            "Yellow"
        ],
        cost: 7,
        reductions: [
            {
                color: "Yellow",
                amount: 4
            }
        ],
        symbols: [
            {
                color: "Yellow",
                type: "Normal",
                amount: 1
            }
        ],
        families: [
            "Thunder Dragon"
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
                description: "Target an opposing Spirit. During this turn, give it -4000 BP. Then, if it has 0 BP, destroy it."
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
                        name: "When Attacks"
                    }
                ],
                description: "Target an opposing Spirit. During this turn, give it -4000 BP. Then, if it has 0 BP, destroy it."
            }
        ],
        imageUrl: "/cards/yellow/26RSD05-X02.webp",
        levels: [
            {
                level: 1,
                coreCost: 1,
                bp: 7000
            },
            {
                level: 2,
                coreCost: 3,
                bp: 9000,
                isTrueRelease: true
            }
        ]
    },

    {
        id: "26RSD06-001",
        name: "Nausa",
        type: "Spirit",
        colors: [
            "Blue"
        ],
        cost: 2,
        reductions: [
            {
                color: "Blue",
                amount: 1
            }
        ],
        symbols: [
            {
                color: "Blue",
                type: "EX",
                amount: 1
            }
        ],
        families: [
            "Ferobeast"
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
                        name: "When Destroyed"
                    }
                ],
                description: "Target a Nexus you control. Put a core from the Void to it."
            }
        ],
        imageUrl: "/cards/blue/26RSD06-001.webp",
        levels: [
            {
                level: 1,
                coreCost: 1,
                bp: 1000
            },
            {
                level: 2,
                coreCost: 2,
                bp: 3000
            }
        ]
    },

    {
        id: "26RSD06-002",
        name: "Deertora",
        type: "Spirit",
        colors: [
            "Blue"
        ],
        cost: 3,
        reductions: [
            {
                color: "Blue",
                amount: 1
            }
        ],
        symbols: [
            {
                color: "Blue",
                type: "Normal",
                amount: 1
            }
        ],
        families: [
            "Ferobeast"
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
                description: "You can reveal three cards from your decktop. Among them, add a \"Ferobeast\" family Nexus card to the Hand. Return any remaining cards to the deckbottom in any order."
            }
        ],
        imageUrl: "/cards/blue/26RSD06-002.webp",
        levels: [
            {
                level: 1,
                coreCost: 1,
                bp: 2000
            },
            {
                level: 2,
                coreCost: 2,
                bp: 3000
            }
        ]
    },

    {
        id: "26RSD06-003",
        name: "Melrak",
        type: "Spirit",
        colors: [
            "Blue"
        ],
        cost: 3,
        reductions: [
            {
                color: "Blue",
                amount: 1
            }
        ],
        symbols: [
            {
                color: "Blue",
                type: "EX",
                amount: 1
            }
        ],
        families: [
            "Ferobeast"
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
                        name: "True Release "
                    },
                    {
                        color: "Blue",
                        name: "When Destroyed"
                    }
                ],
                description: "Target an opposing Cost 3 or less Spirit. Destroy it."
            }
        ],
        imageUrl: "/cards/blue/26RSD06-003.webp",
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
        id: "26RSD06-004",
        name: "Rhiceros",
        type: "Spirit",
        colors: [
            "Blue"
        ],
        cost: 4,
        reductions: [
            {
                color: "Blue",
                amount: 2
            }
        ],
        symbols: [
            {
                color: "Blue",
                type: "Normal",
                amount: 1
            }
        ],
        families: [
            "Cyantree",
            "Ferobeast"
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
                        name: "During Block"
                    },
                    {
                        color: "Purple",
                        name: "Invoke: Flash"
                    },
                    {
                        color: "Red",
                        name: "Once Per Turn"
                    }
                ],
                description: "Exhaust one of your \"Ferobeast\" family Nexuses ▶ During this battle, this Spirit gains +3000 BP."
            },
            {
                levels: [
                    2
                ],
                tags: [
                    {
                        color: "Blue",
                        name: "During Attack"
                    },
                    {
                        color: "Purple",
                        name: "Invoke: Flash"
                    },
                    {
                        color: "Red",
                        name: "Once Per Turn"
                    }
                ],
                description: "Exhaust one of your \"Ferobeast\" family Nexuses ▶ Put a core from the Void to your Trash."
            }
        ],
        imageUrl: "/cards/blue/26RSD06-004.webp",
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
        id: "26RSD06-005",
        name: "Slouth",
        type: "Spirit",
        colors: [
            "Blue"
        ],
        cost: 4,
        reductions: [
            {
                color: "Blue",
                amount: 3
            }
        ],
        symbols: [
            {
                color: "Blue",
                type: "EX",
                amount: 1
            }
        ],
        families: [
            "Cyantree",
            "Ferobeast"
        ],
        rarity: [
            "Common"
        ],
        hasLegacy: false,
        effects: [],
        imageUrl: "/cards/blue/26RSD06-005.webp",
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
        id: "26RSD06-006",
        name: "Svarris",
        type: "Spirit",
        colors: [
            "Blue"
        ],
        cost: 5,
        reductions: [
            {
                color: "Blue",
                amount: 3
            }
        ],
        symbols: [
            {
                color: "Blue",
                type: "Normal",
                amount: 1
            }
        ],
        families: [
            "Ferobeast"
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
                description: "Draw two cards, then return two cards from your Hand to the deckbottom in any order."
            }
        ],
        imageUrl: "/cards/blue/26RSD06-006.webp",
        levels: [
            {
                level: 1,
                coreCost: 1,
                bp: 3000
            },
            {
                level: 2,
                coreCost: 3,
                bp: 5000
            }
        ]
    },

    {
        id: "26RSD06-007",
        name: "Armalido",
        type: "Spirit",
        colors: [
            "Blue"
        ],
        cost: 6,
        reductions: [
            {
                color: "Blue",
                amount: 3
            }
        ],
        symbols: [
            {
                color: "Blue",
                type: "Normal",
                amount: 1
            }
        ],
        families: [
            "Cyantree",
            "Ferobeast"
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
                        name: "During Block"
                    },
                    {
                        color: "Purple",
                        name: "Invoke: Flash"
                    },
                    {
                        color: "Red",
                        name: "Once Per Turn"
                    }
                ],
                description: "Exhaust one of your \"Ferobeast\" family Nexuses ▶ During this battle, this Spirit gains +3000 BP."
            }
        ],
        imageUrl: "/cards/blue/26RSD06-007.webp",
        levels: [
            {
                level: 1,
                coreCost: 1,
                bp: 5000
            },
            {
                level: 2,
                coreCost: 3,
                bp: 7000,
                isTrueRelease: true
            }
        ]
    },

    {
        id: "26RSD06-008",
        name: "The TreeShadow Felio",
        type: "Spirit",
        colors: [
            "Blue"
        ],
        cost: 7,
        reductions: [
            {
                color: "Blue",
                amount: 4
            }
        ],
        symbols: [
            {
                color: "Blue",
                type: "Normal",
                amount: 1
            }
        ],
        families: [
            "Ferobeast"
        ],
        rarity: [
            "Common"
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
                description: "For each Nexus you control, during this turn, this Spirit gains +1000 BP."
            }
        ],
        imageUrl: "/cards/blue/26RSD06-008.webp",
        levels: [
            {
                level: 1,
                coreCost: 1,
                bp: 7000
            },
            {
                level: 2,
                coreCost: 3,
                bp: 8000
            }
        ]
    },

    {
        id: "26RSD06-009",
        name: "The Misty Forest",
        type: "Nexus",
        colors: [
            "Blue"
        ],
        cost: 3,
        reductions: [
            {
                color: "Blue",
                amount: 2
            }
        ],
        symbols: [
            {
                color: "Blue",
                type: "Normal",
                amount: 1
            }
        ],
        families: [
            "Ferobeast"
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
                    }
                ],
                description: "All your attacking \"Ferobeast\" family Spirits gain +1000 BP."
            },
            {
                levels: [
                    2
                ],
                tags: [
                    {
                        color: "Blue",
                        name: "Your End Step"
                    },
                    {
                        color: "Red",
                        name: "Can't Stack"
                    }
                ],
                description: "For every two Nexuses you control, you can target one \"Ferobeast\" family Spirit you control. Refresh them."
            }
        ],
        imageUrl: "/cards/blue/26RSD06-009.webp",
        levels: [
            {
                level: 1,
                coreCost: 0
            },
            {
                level: 2,
                coreCost: 3
            }
        ]
    },

    {
        id: "26RSD06-010",
        name: "Utmost Depth: The Extreme Giant Tree",
        type: "Nexus",
        colors: [
            "Blue"
        ],
        cost: 3,
        reductions: [
            {
                color: "Blue",
                amount: 2
            }
        ],
        symbols: [
            {
                color: "Blue",
                type: "Normal",
                amount: 1
            }
        ],
        families: [
            "Ferobeast"
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
                        name: "Your Main Step"
                    }
                ],
                description: "If you control three or more Blue Nexuses, this Nexus gains an extra Blue symbol."
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
                        name: "Opposing Attack Step"
                    }
                ],
                description: "When an opposing Spirit attacks, you can target one of your \"Ferobeast\" family Spirits with the same cost as that Spirit. Refresh it."
            }
        ],
        imageUrl: "/cards/blue/26RSD06-010.webp",
        levels: [
            {
                level: 1,
                coreCost: 0
            },
            {
                level: 2,
                coreCost: 2,
                isTrueRelease: true
            }
        ]
    },

    {
        id: "26RSD06-011",
        name: "The Barrage Forest",
        type: "Nexus",
        colors: [
            "Blue"
        ],
        cost: 5,
        reductions: [
            {
                color: "Blue",
                amount: 2
            }
        ],
        symbols: [
            {
                color: "Blue",
                type: "Normal",
                amount: 1
            }
        ],
        families: [
            "Ferobeast"
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
                description: "Target an opposing Cost 3 or less Spirit. Destroy it."
            },
            {
                levels: [
                    2
                ],
                tags: [
                    {
                        color: "Blue",
                        name: "Opposing Attack Step"
                    },
                    {
                        color: "Red",
                        name: "Can't Stack"
                    }
                ],
                description: "When an opposing LV1 Spirit would attack, unless the opponent pay one cost, it can't attack."
            }
        ],
        imageUrl: "/cards/blue/26RSD06-011.webp",
        levels: [
            {
                level: 1,
                coreCost: 0
            },
            {
                level: 2,
                coreCost: 2
            }
        ]
    },

    {
        id: "26RSD06-012",
        name: "Feeding Draw",
        type: "Magic",
        colors: [
            "Blue"
        ],
        cost: 3,
        reductions: [
            {
                color: "Blue",
                amount: 2
            }
        ],
        symbols: [],
        families: [
            "Ferobeast"
        ],
        rarity: [
            "Common"
        ],
        hasLegacy: false,
        effects: [],
        imageUrl: "/cards/blue/26RSD06-012.webp",
        mainEffect: "Draw three cards, then return two cards from your Hand to the deckbottom in any order.",
        flashEffect: "Target one of your Spirits. During this turn, give it +3000 BP."
    },

    {
        id: "26RSD06-013",
        name: "Stem Lance",
        type: "Magic",
        colors: [
            "Blue"
        ],
        cost: 5,
        reductions: [
            {
                color: "Blue",
                amount: 3
            }
        ],
        symbols: [
            {
                color: "Blue",
                type: "EX",
                amount: 1
            }
        ],
        families: [
            "Ferobeast"
        ],
        rarity: [
            "Common"
        ],
        hasLegacy: false,
        effects: [],
        imageUrl: "/cards/blue/26RSD06-013.webp",
        mainEffect: "",
        flashEffect: "Target an opposing Cost 4 or below Spirit. Destroy it. When choosing the target, you can target one of your Nexuses. Destroy it. For each cost of the Nexus destroyed, the target cost increases by +1 instead.",
        soulMagicConditionColor: "Blue"
    },

    {
        id: "26RSD06-014",
        name: "Full Stomach",
        type: "Magic",
        colors: [
            "Blue"
        ],
        cost: 6,
        reductions: [
            {
                color: "Blue",
                amount: 4
            }
        ],
        symbols: [
            {
                color: "Blue",
                type: "EX",
                amount: 1
            }
        ],
        families: [
            "Ferobeast"
        ],
        rarity: [
            "Common"
        ],
        hasLegacy: true,
        effects: [],
        imageUrl: "/cards/blue/26RSD06-014.webp",
        mainEffect: "Target a Nexus you or the opponent controls that isn't during True Release. Destroy it. If you've done so, draw a card.",
        flashEffect: "Target one of your Spirits. During this turn, give it +3000 BP.",
        soulMagicConditionColor: "Blue"
    },

    {
        id: "26RSD06-X01",
        name: "The ShieldHorn Gigantherion",
        type: "Spirit",
        colors: [
            "Blue"
        ],
        cost: 8,
        reductions: [
            {
                color: "Blue",
                amount: 4
            }
        ],
        symbols: [
            {
                color: "Blue",
                type: "Normal",
                amount: 1
            }
        ],
        families: [
            "Ferobeast"
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
                description: "Target an opposing Cost 4 or less Spirit. Destroy it. If you control three or more Nexuses, the targeting Cost becomes 6 or less instead."
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
                description: "When the opponent would block, unless they exhaust a Spirit they control other than the blocking Spirit, they can't block."
            }
        ],
        imageUrl: "/cards/blue/26RSD06-X01.webp",
        levels: [
            {
                level: 1,
                coreCost: 1,
                bp: 9000
            },
            {
                level: 2,
                coreCost: 4,
                bp: 12000,
                isTrueRelease: true
            }
        ]
    },

    {
        id: "26RSD06-X02",
        name: "The ExtremeTree Elephas",
        type: "Spirit",
        colors: [
            "Blue"
        ],
        cost: 10,
        reductions: [
            {
                color: "Blue",
                amount: 4
            }
        ],
        symbols: [
            {
                color: "Blue",
                type: "Normal",
                amount: 1
            }
        ],
        families: [
            "Ferobeast"
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
                        name: "During Attack"
                    },
                    {
                        color: "Purple",
                        name: "Invoke: Flash"
                    },
                    {
                        color: "Red",
                        name: "Once Per Turn"
                    }
                ],
                description: "Exhaust one of your \"Ferobeast\" family Nexuses ▶ Target an opposing Cost 7 or less Spirit. Destroy it."
            },
            {
                levels: [
                    2
                ],
                tags: [
                    {
                        color: "Blue",
                        name: "During Attack"
                    }
                ],
                description: "When this Spirit's attack would reduce the opposing Life, reduce +1 core."
            }
        ],
        imageUrl: "/cards/blue/26RSD06-X02.webp",
        levels: [
            {
                level: 1,
                coreCost: 1,
                bp: 10000
            },
            {
                level: 2,
                coreCost: 4,
                bp: 14000
            }
        ]
    }

];
