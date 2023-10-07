import React from "react";

import Home from "@/app/page";
import { fireEvent, render } from "@testing-library/react";

test("renders Home component with correct props", () => {
    const { getByText, getByLabelText } = render(<Home />);

    const navbarElement = getByText(/Pokedex/i);
    expect(navbarElement).toBeInTheDocument();

    const filterLabelElement = getByText(/Filter/i);
    expect(filterLabelElement).toBeInTheDocument();

    const loadingElement = getByText(/Loading.../i);
    expect(loadingElement).toBeInTheDocument();

    const grassOption = getByLabelText("Filter by Grass type");
    fireEvent.click(grassOption);
    expect(grassOption).toBeChecked();
});
