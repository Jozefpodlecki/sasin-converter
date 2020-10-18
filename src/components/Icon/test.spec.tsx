import { faGem } from "@fortawesome/free-solid-svg-icons";
import { render } from "@testing-library/react";
import Icon from "./index";
import React from "react";

describe("Icon spec", () => {
    it("renders the component", () => {
        const container = render(<Icon icon={faGem} />);
        expect(container).toMatchSnapshot();
    });
});
