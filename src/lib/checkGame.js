export const checkGame = (eventArr, game)=> {
    let selectedGame = game;  
    const isEmpty = game === "" ? selectedGame = eventArr[1] : undefined;
    const isDefault = game === "Select Game" ? selectedGame = eventArr[1] : undefined;
    return selectedGame;
};