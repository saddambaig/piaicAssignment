"use strict";
let guestListQ16 = [
    "Ssadam",
    "Fahim",
    "Sabit"
];
console.log("Original Invitation to Dinner:");
for (let i = 0; i < guestListQ16.length; i++) {
    console.log("Dear " + guestListQ16[i] + ",\nYou are cordially invited to a dinner at my place on Saturday. Looking forward to meeting you!");
}
const guestUnableToAttendQ16 = "Sabit";
const newGuestQ16 = "Atahar Shah";
const Q16 = guestListQ16.indexOf(guestUnableToAttendQ16);
if (Q16 !== -1) {
    guestListQ16.splice(Q16, 1, newGuestQ16);
}
guestListQ16.push("Isaac Newton", "Rosalind Franklin", "William Shakespeare");
console.log("\nUpdated Invitation to Dinner:");
for (let i = 0; i < guestListQ16.length; i++) {
    console.log("Dear " + guestListQ16[i] + ",\nYou are cordially invited to a dinner at my place on Saturday. Looking forward to meeting you!");
}
console.log("\nGreat news! I just found a bigger dinner table. There's more space available for everyone!");
