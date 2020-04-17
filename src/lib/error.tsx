export const test_error = (tournament:string, player1:string) => (
  tournament === `` && player1 === `` ? `All fields are empty` :
  tournament === `` ? `The tournament field is empty` : 
  ``  
);