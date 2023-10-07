import React from "react";

import Sidebar from "@/components/Sidebar/index";
import {
    fireEvent, render, screen
} from "@testing-library/react";

test("it calls setFilteredType with the selected value when the filter changes", () => {
    const setFilteredTypeMock = jest.fn();
    render(<Sidebar setFilteredType={setFilteredTypeMock} />);

    fireEvent.change(screen.getByLabelText("Filter"), {
        target: { value: "grass" },
    });

    expect(setFilteredTypeMock).toHaveBeenCalledWith("grass");
});
