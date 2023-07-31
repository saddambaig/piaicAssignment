"use strict";
let placesToVisit = [
    "Naltar",
    "Naran",
    "Kumrat Vally",
    "Neelam Vally",
    "Lahor"
];
console.log("Original Order:");
console.log(placesToVisit);
console.log("\nAlphabetical Order (without modifying the original list):");
console.log([...placesToVisit].sort());
console.log("\nOriginal Order (after sorting):");
console.log(placesToVisit);
console.log("\nReverse Alphabetical Order (without modifying the original list):");
console.log([...placesToVisit].sort().reverse());
console.log("\nOriginal Order (after reverse sorting):");
console.log(placesToVisit);
placesToVisit.reverse();
console.log("\nReversed Order:");
console.log(placesToVisit);
placesToVisit.reverse();
console.log("\nOriginal Order (after double reverse):");
console.log(placesToVisit);
placesToVisit.sort();
console.log("\nSorted in Alphabetical Order:");
console.log(placesToVisit);
placesToVisit.sort().reverse();
console.log("\nSorted in Reverse Alphabetical Order:");
console.log(placesToVisit);
