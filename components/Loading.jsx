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
      <img
        src="https://cdn.discordapp.com/attachments/954503804676603998/1112484623402926150/Pokebola.png"
        alt="Loading"
        style={{ width: "50px", height: "50px", position: "absolute" }}
      />
    </div>
  );
};

export default Loading;
