import React from "react";
const ChildComponent = ({ text, number }) => {
  return (
    <>
      <p>Text:{text}</p>
      <p>Number:{number}</p>
    </>
  );
};
export default ChildComponent;
