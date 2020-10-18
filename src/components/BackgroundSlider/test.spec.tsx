import * as api from "../../api";
import { render } from "@testing-library/react";
import BackgroundSlider from "./index";
import React from "react";

describe("Background Slider spec", () => {
    it("renders the component", () => {
        jest.spyOn(api, "getImages");

        const container = render(<BackgroundSlider />);
        expect(container).toMatchSnapshot();
    });
});
