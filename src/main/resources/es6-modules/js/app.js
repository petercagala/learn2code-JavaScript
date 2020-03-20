// // Ak chcem importovat len niektore premenne
// import {theGoodNumber as niceNumber,
//     doMath as sumFunction} from './mathmodules/math.js';

// Ak chem importnut vsetky premenne
// import * as math from './mathmodules/math.js';

// pri default import nemusim pouzit {}
// import Mario from "./mathmodules/math.js";

// alebo aj kombinacia default + {...., ....}

import Mario, {theGoodNumber as niceNumber,
    doMath as sumFunction} from "./mathmodules/math.js";

Mario.jump();


console.log(niceNumber);
// console.log(math.theGoodNumber);

console.log(sumFunction(1,2,3));
// console.log(math.doMath(1,2,3));