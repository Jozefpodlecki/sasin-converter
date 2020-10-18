import { render } from "@testing-library/react";
import Main from "./Main";
import React from "react";

describe("Main spec", () => {
    it("renders the component", () => {
        const container = render(<Main />);
        expect(container).toMatchSnapshot();
    });
});
