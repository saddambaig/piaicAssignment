let guestListss = [
    "sadam",
    "Fahim",
    "Sabit"
  ];
  
  console.log("Original Invitation to Dinner:");
  
  for (let i = 0; i < guestListss.length; i++) {
    console.log("Hi " + guestListss[i] + ",\nYou are cordially invited to a dinner at my place on Saturday. Looking forward to meeting you!");
  }
  
  const guestUnableToAttend = "Leonardo da Vinci";
  const newGuest = "Marie Curie";
  
  const indexToRemove = guestListss.indexOf(guestUnableToAttend);
  if (indexToRemove !== -1) {
    guestListss.splice(indexToRemove, 1, newGuest);
  }
  
  console.log("\nUpdated Invitation to Dinner:");
  
  for (let i = 0; i < guestListss.length; i++) {
    console.log("Hi " + guestListss[i] + ",\nYou are cordially invited to a dinner at my place on Saturday. Looking forward to meeting you!");
  }