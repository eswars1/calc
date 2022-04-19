import React from "react";

const formattedSeconds = (sec) =>
  ("0" + Math.floor((sec % 3600) / 60)).slice(-2) +
  ":" +
  ("0" + (sec % 60)).slice(-2);

  const Header = (props) => {
    
    return <h1>{formattedSeconds(props.timer)}</h1>
};


export default Header;
