import React from "react"
import { render, fireEvent } from "@testing-library/react"
import NumericField from "./index"

describe('Numeric Field spec', () => {

    const onBlur = jest.fn();
    const onChange = jest.fn();
    const onFocus = jest.fn();

    it('renders the component', () => {
        const container = render(<NumericField
            onBlur={onBlur}
            onChange={onChange}
            onFocus={onFocus}
            placeholder={"placeholder"}
            value={0}
            key={"key"}
        />)
        expect(container).toMatchSnapshot();
    });
   
});