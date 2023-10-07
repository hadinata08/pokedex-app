import React from "react";

import Navbar from "@/components/Navbar/index";
import { render } from "@testing-library/react";

test("renders Navbar component", () => {
    const { getByText } = render(<Navbar />);
    const headingElement = getByText(/Pokedex/i);
    expect(headingElement).toBeInTheDocument();
});
