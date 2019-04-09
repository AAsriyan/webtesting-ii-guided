import React from "react";

export default function Greeting(props) {
  const noMsg = <div>No Message</div>;
  return !props.msg ? noMsg : <div>{props.msg}</div>;
}
