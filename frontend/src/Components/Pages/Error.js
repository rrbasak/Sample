import React from "react";
import { useNavigate } from "react-router-dom";
export function Error() {
  const navigate = useNavigate();

  const buttonStyle = {
    position: "absolute",
    left: "49%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    color: "black",
    padding: "2px 102px;",
    border: "none",
    borderRadius: "65px",
    cursor: "pointer",
    width: "209px",
    height: "61px",
    // eslint-disable-next-line no-dupe-keys
    backgroundColor: "white",
    top: "510px",
  };

  return (
    <div style={{ position: "relative" }}>
      <img src="images/errorpage.jpg" alt="..." />

      {/* Button positioned on top of the image */}
      <button
        style={buttonStyle}
        onClick={() => {
          navigate("/");
        }}
      >
        Click Me
      </button>
    </div>
  );
}
