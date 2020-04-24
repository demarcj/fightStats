import React from "react";
import parse from "html-react-parser";
import "./help_style.scss";

export const Help: React.FC = () => {
  const instruction_list = [
    parse(`To test the form go to <a href="https://smash.gg" target="_blank">smash.gg</a> and copy and paste the name of the tournament in the first`),
    `Select a game`,
    `Type a player's name in the Player field to see if that person attended the tournament`
  ];
  return(
    <>
      <h2 className="content_header header">Help</h2>
      {instruction_list.map((item, i) => <p className="body_test" key={i}>{i + 1}.{item}</p>)}
    </>
  );
};