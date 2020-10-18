import React from "react"
import { render, fireEvent } from "@testing-library/react"
import Footer from "./index"

describe('Footer spec', () => {
    
    it('renders the component', () => {
        const container = render(<Footer />)
        expect(container).toMatchSnapshot();
    });

});