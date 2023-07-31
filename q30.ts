// Array of usernames
let usernames = ['eric', 'jhone', 'admin', 'test','test2'];

// Loop through the array and print greetings
for (let i = 0; i < usernames.length; i++) {
  if (usernames[i] === 'admin') {
    console.log("Hello admin, would you like to see a status report?");
  }else if(usernames[i]=='eric'){
    console.log();
  }
}