import * as React from "react";

import { Child } from "./Child";

export const App: React.FC<{ message?: string }> = ({ message = "hello" }) => {
  React.useEffect(() => {
    console.log("hi");
  }, []);

  return <Child>{message}</Child>;
};
