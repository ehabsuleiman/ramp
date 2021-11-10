import React, { useState } from "react";

import { FalsyComponenet, OtherComponent, ArrayComponent } from "./Types";

const types = {
  FALSY: "FALSY",
  ARRAY: "ARRAY",
  OTHER: "OTHER",
};

const Main: React.FC<any> = ({ input }) => {
  const type = !input
    ? types.FALSY
    : Array.isArray(input)
    ? types.ARRAY
    : types.OTHER;

  let toRender;

  //based on type conditionally render a different component
  switch (type) {
    case types.FALSY:
      toRender = <FalsyComponenet></FalsyComponenet>;
      break;

    case types.ARRAY:
      toRender = <ArrayComponent data={input}></ArrayComponent>;
      console.log(toRender);
      break;
    case types.OTHER:
      toRender = <OtherComponent data={input}></OtherComponent>;
      break;

    default:
      toRender = <div></div>;
      console.log("Something Went Wrong");
      break;
  }

  return <div>{toRender}</div>;
};

export default Main;
