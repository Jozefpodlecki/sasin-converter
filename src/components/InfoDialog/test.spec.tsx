import React from "react"
import { render, fireEvent } from "@testing-library/react"
import InfoDialog from "./index"

describe('Info Dialog spec', () => {
    const onClose = jest.fn();

    it('renders the component', () => {
        const container = render(<InfoDialog
            show={false}
            onClose={onClose} />)
        expect(container).toMatchSnapshot();
    });
   
});