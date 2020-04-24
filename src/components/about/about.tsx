import React from "react";
import "./about_style.scss";

export const About: React.FC = () => (
  <>
    <h2 className="content_header header">About Fight Stat</h2>
    <p className="body_text">
      Are you tired of the work of searching top 8 results in&nbsp; 
      <a href="https://smash.gg" target="_blank">smash.gg</a>. 
      I like that site a lot but it take some work to get tournament result. 
      Fight Stats uses the smash.gg api to get the tournament result in a 
      faster by typing in the tournament, game and player tag name
    </p>
  </>
);