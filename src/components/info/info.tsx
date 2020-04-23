import React from 'react';
import "./info_style.scss";

export const Info = (props:any) => (
  <aside className="stats_aside">
    <h2 className="header stats_header">Stats</h2>
    <p className="body_text">{props.results}</p>
    <p className="errot_text">{props.error}</p>
  </aside>
);