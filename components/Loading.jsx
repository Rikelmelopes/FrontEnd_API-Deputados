import React from "react";
import PuffLoader from "react-spinners/PuffLoader";

const Loading = () => {
  return (
    <div
      style={{
        backgroundColor: "#1C1C1C",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <PuffLoader color={"#17583B"} size={90} />
    </div>
  );
};

export default Loading;
