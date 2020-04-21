import React from 'react';

export const Home = (props:any) => (
  <>
    <h2 className="content_header header">Select the Tournament</h2>
    <p className="errot_text">{props.error}</p>
  </>
);