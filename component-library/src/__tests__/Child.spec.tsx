import "react-testing-library/cleanup-after-each";
import * as React from "react";
import { render } from "react-testing-library";
import { Child } from "../Child";

test("renders", () => {
  const { container } = render(<Child />);
  console.log(container.innerHTML);
});
