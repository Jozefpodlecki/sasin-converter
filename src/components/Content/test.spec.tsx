import { render } from "@testing-library/react";
import Content from "./index";
import React from "react";

describe("Content spec", () => {
    it("renders the component", () => {
        const container = render(<Content />);
        expect(container).toMatchSnapshot();
    });
});
