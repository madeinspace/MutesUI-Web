import React from "react";
const styles = {
  border: "1px dashed gray",
  padding: "0.5rem 1rem",
  cursor: "move",
};
export const Box = ({ title, yellow }: any) => {
  const backgroundColor = yellow ? "yellow" : "white";
  return <div style={{ ...styles, backgroundColor }}>{title}</div>;
};
