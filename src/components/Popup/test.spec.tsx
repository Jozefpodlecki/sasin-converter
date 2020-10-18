import { render } from "@testing-library/react";
import Popup from "./index";
import React from "react";

describe("Popup spec", () => {
    const onTimeout = jest.fn();

    it("renders the component", () => {
        const container = render(<Popup onTimeout={onTimeout} show={false} />);
        expect(container).toMatchSnapshot();
    });
});
