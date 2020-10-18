import React from "react"
import { render, fireEvent } from "@testing-library/react"
import Popup from "./index"

describe('Popup spec', () => {

    const onTimeout = jest.fn();

    it('renders the component', () => {
        const container = render(<Popup
            onTimeout={onTimeout}
            show={false}
        />)
        expect(container).toMatchSnapshot();
    });
   
});