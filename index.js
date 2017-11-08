// Code your solutions in this file


function printBadges(people){
for(i=0; i<people.length; i++){
  console.log('Welcome ${peolpe[i]}! You are employee #${i + 1}.');
}

}


function tailsNeverFails () {
  let tails = 0;

  while (Math.random() >= 0.5) {
    tails++;
  }

  return `You got ${tails} tails in a row!`;
}
