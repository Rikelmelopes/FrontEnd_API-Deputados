import React, { useEffect, useState } from "react";

import PuffLoader from "react-spinners/PuffLoader";
import { useRouter } from "next/router";

const index = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      router.push("/deputados");
    }, 5000);
  }, []);
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
      {loading ? (
        <PuffLoader color={"#17583B"} loading={loading} size={90} />
      ) : (
        <></>
      )}
      {loading && (
        <img
          src="https://cdn.discordapp.com/attachments/954503804676603998/1112484623402926150/Pokebola.png"
          alt="Loading"
          style={{ width: "50px", height: "50px", position: "absolute" }}
        />
      )}
    </div>
  );
};

export default index;
