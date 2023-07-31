"use strict";
let guestListQ18 = [
    "Sadam Baig",
    "Fahim Zaib",
    "Atahar Shah",
    "Farhad"
];
console.log("Original Invitation to Dinner:");
for (let i = 0; i < guestListQ18.length; i++) {
    console.log("Dear " + guestListQ18[i] + ",\nYou are cordially invited to a dinner at my place on Saturday. Looking forward to meeting you!");
}
console.log("\nSorry, the dinner table won't arrive in time, and I can only invite two people for dinner.");
while (guestListQ18.length > 2) {
    const removedGuest = guestListQ18.pop();
    console.log("Dear " + removedGuest + ",\nI'm sorry, but I can't invite you to dinner this time.");
}
console.log("\nInvitation to the Final Guests:");
for (let i = 0; i < guestListQ18.length; i++) {
    console.log("Dear " + guestListQ18[i] + ",\nYou are still invited to a dinner at my place on Saturday. Looking forward to meeting you!");
}
guestListQ18.pop();
guestListQ18.pop();
console.log("\nEmpty Guest List:");
console.log(guestListQ18);
