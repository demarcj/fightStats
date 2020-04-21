export const test_error = (tournament:string, player:string) => (
  tournament === `` && player === `` ? `All fields are empty` :
  tournament === `` ? `The tournament field is empty` : 
  ``  
);