import React from "react"
import { render, fireEvent } from "@testing-library/react"
import Main from "./Main";

describe('Main spec', () => {

    it('renders the component', () => {
        const container = render(<Main/>)
        expect(container).toMatchSnapshot();
    });
   
});