import type { Card } from '../types/cardSchema';
import { set26RSD } from './sets/26RSD';

// Future sets can be imported and added here
// import { set27RSD } from './sets/27RSD';

export const allSets = {
    '26RSD': set26RSD,
    // '27RSD': set27RSD
};

// Flattened array of all cards for general gallery/deck builder use
export const allCards: Card[] = [
    ...set26RSD,
    // ...set27RSD
];
