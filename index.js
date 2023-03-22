/* // Code your solutions in this file
for (let age =30; age < 40; age++) {
     console.log(`I'm ${age} years old. Happy birthday to me!`);
    // debugger;
}
 */



const arrNames = [];
const storeCards = []
let event = ""
function writeCards(arrNames,event){
for (let i = 0; i < arrNames.length; i++) {
  //console.log(`I'm ${names} years old. Happy ${event} to me!  `i);
 
   storeCards.push(`Thank you, ${arrNames[i]}, for the wonderful ${event} gift!`)
  
  if (i === 2){
    
    return storeCards
  } 
}
}

writeCards(arrNames,event)

num = 10
function countDown(num){

    while (num >= 0) {
      
      console.log(num);
      num--;
    }
    
}

countDown(num)