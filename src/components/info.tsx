import React from 'react';

export const Info = (props:any) => (
  <aside className="stats_aside">
    <h2 className="header stats_header">Stats</h2>
    <p className="body_text">{props.results} <a href="https://smash.gg">{props.helper_message}</a></p>
  </aside>
);