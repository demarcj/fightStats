import React from "react";

export const Help = (props:any) => (
  <>
    <p className="body_text">1. To test the form go to <a href="https://smash.gg">smash.gg</a> and copy and paste the name of the tournament in the first</p>
    <p className="body_text">2. Select a game</p>
    <p className="body_text">3. Type a player's name in the Player field to see if that person attended the tournament</p>
    <p className="body_text">{props.results} <a href="https://smash.gg">{props.helper_message}</a></p>
  </>
);