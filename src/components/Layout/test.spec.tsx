import React from "react"
import { render, fireEvent } from "@testing-library/react"
import Layout from "./index"

describe('Layout spec', () => {

    it('renders the component', () => {
        const container = render(<Layout children={<div></div>} />)
        expect(container).toMatchSnapshot();
    });
   
});