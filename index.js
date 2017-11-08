// Code your solutions in this file


function printBadges(){
for(i=0; i<printBadges.length; i++){
  console.log(printBadges[i]);
}
  
}


function tailsNeverFails () {
  let tails = 0;

  while (Math.random() >= 0.5) {
    tails++;
  }

  return `You got ${tails} tails in a row!`;
}
