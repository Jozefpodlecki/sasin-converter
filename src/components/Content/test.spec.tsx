import React from "react"
import { render, fireEvent } from "@testing-library/react"
import Content from "./index"

describe('Content spec', () => {

    it('renders the component', () => {
        const container = render(<Content/>)
        expect(container).toMatchSnapshot();
    });
   
});