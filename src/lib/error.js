export const testError = (tournament, player1) => {
  let strError = ""
  if(tournament === "" && player1 === ""){
    strError = "All fields are empty";
  } else if(tournament === ""){
    strError = "The tournament field is empty";
  } else if(player1 === ""){
    strError = "The Player 1 field is empty";
  }
  console.log("The error function", strError);
  return strError;
}