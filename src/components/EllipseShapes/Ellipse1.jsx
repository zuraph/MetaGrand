import React from "react";

const Ellipse1 = () => {
  return (
    <div
      style={{
        width: "400px",
        height: "400px",
        position: "absolute",
        borderRadius: "50%",
        filter: "blur(150px  )",
        backgroundColor: "rgb(99 , 14 , 141)",
        zIndex: "-1",
        top: "-150px",
        boxShadow: "inset 0px 3.80463px 500px rgba(0, 0, 0, 0.25)",
      }}
    ></div>
  );
};

export default Ellipse1;
