"use strict";
let current_usersq32 = ['john_doe', 'jane_smith', 'admin', 'alice_wonderland', 'bob_marley'];
let new_usersq32 = ['admin', 'sarah_green', 'peter_pan', 'Alice_Wonderland', 'Emma_Stone'];
for (let i = 0; i < new_usersq32.length; i++) {
    let new_user_lower = new_usersq32[i].toLowerCase();
    if (current_usersq32.some(user => user.toLowerCase() === new_user_lower)) {
        console.log("Sorry, the username '" + new_usersq32[i] + "' is already taken. Please choose a different username.");
    }
    else {
        console.log("Congratulations! The username '" + new_usersq32[i] + "' is available.");
    }
}
