import React from "react";
import loaderimg from "../assets/cargando.gif";

function Loading() {
  return (
    <>
      <div className="h-screen w-screen bg-black flex items-center justify-center">
        <div>
          <img src={loaderimg} alt="" />
        </div>
      </div>
    </>
  );
}

export default Loading;
