
let current_users = ['john_doe', 'jane_smith', 'admin', 'alice_wonderland', 'bob_marley'];


let new_users = ['admin', 'sarah_green', 'peter_pan', 'Alice_Wonderland', 'Emma_Stone'];

for (let i = 0; i < new_users.length; i++) {
  let new_user_lower = new_users[i].toLowerCase(); 

  if (current_users.some(user => user.toLowerCase() === new_user_lower)) {
    console.log("Sorry, the username '" + new_users[i] + "' is already taken. Please choose a different username.");
  } else {
    console.log("Congratulations! The username '" + new_users[i] + "' is available.");
  }
}