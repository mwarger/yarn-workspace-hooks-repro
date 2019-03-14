import * as React from "react";

export type Stuff = {
  aString: string;
};

export const Child: React.FC = ({ children }) => {
  return <div>{children}</div>;
};
