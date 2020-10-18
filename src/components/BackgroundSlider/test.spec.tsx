import React from "react"
import { render, fireEvent } from "@testing-library/react"
import BackgroundSlider from "./index"
import * as api from "../../api";

describe('Background Slider spec', () => {

    it('renders the component', () => {

        jest.spyOn(api, "getImages");

        const container = render(<BackgroundSlider/>)
        expect(container).toMatchSnapshot();
    });
   
});