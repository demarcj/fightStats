import React from "react";
import moment from "moment";

export const Footer = () => (
  <footer className="footer">
    <h3 className="copyright">&copy; {moment().year()} DeMarc Johnson</h3>
  </footer>
);