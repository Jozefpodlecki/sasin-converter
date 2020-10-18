import { render } from "@testing-library/react";
import Header from "./index";
import React from "react";

describe("Header spec", () => {
    it("renders the component", () => {
        const container = render(<Header />);
        expect(container).toMatchSnapshot();
    });
});
