import { render } from "@testing-library/react";
import InfoDialog from "./index";
import React from "react";

describe("Info Dialog spec", () => {
    const onClose = jest.fn();

    it("renders the component", () => {
        const container = render(<InfoDialog show={false} onClose={onClose} />);
        expect(container).toMatchSnapshot();
    });
});
