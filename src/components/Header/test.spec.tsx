import React from "react"
import { render, fireEvent } from "@testing-library/react"
import Header from "./index"

describe('Header spec', () => {
    
    it('renders the component', () => {
        const container = render(<Header />)
        expect(container).toMatchSnapshot();
    });
   
});