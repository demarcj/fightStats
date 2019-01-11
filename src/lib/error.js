export const testError = (tournament, player1) => {
  let strError = ""
  if(tournament === "" && player1 === ""){
    strError = "All fields are empty";
  } else if(tournament === ""){
    strError = "The tournament field is empty";
  } 
  return strError;
}