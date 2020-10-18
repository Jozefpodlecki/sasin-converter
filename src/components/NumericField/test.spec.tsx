import { render } from "@testing-library/react";
import NumericField from "./index";
import React from "react";

describe("Numeric Field spec", () => {
    const onBlur = jest.fn();
    const onChange = jest.fn();
    const onFocus = jest.fn();

    it("renders the component", () => {
        const container = render(
            <NumericField
                onBlur={onBlur}
                onChange={onChange}
                onFocus={onFocus}
                placeholder="placeholder"
                value={0}
                key="key"
            />
        );
        expect(container).toMatchSnapshot();
    });
});
