import { render } from "@testing-library/react";
import Footer from "./index";
import React from "react";

describe("Footer spec", () => {
    it("renders the component", () => {
        const container = render(<Footer />);
        expect(container).toMatchSnapshot();
    });
});
