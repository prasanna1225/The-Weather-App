import React from "react";
import { css } from "@emotion/react";
import { PacmanLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Loading= () => {
  return (
    <div className="sweet-loading">
      <PacmanLoader css={override} size={20} color={"#4B77BE"} timeout={3000} />
    </div>
  );
};

export default Loading;
