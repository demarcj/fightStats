import React from 'react';

export const Home = (props:any) => (
  <>
    <h2 className="main_header">Select the Tournament</h2>
    <p className="errot_text">{props.error}</p>
  </>
);