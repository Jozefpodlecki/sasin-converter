import React from "react"
import { render, fireEvent } from "@testing-library/react"
import Icon from "./index"
import { faGem } from "@fortawesome/free-solid-svg-icons";

describe('Icon spec', () => {
    
    it('renders the component', () => {
        const container = render(<Icon icon={faGem} />)
        expect(container).toMatchSnapshot();
    });
   
});