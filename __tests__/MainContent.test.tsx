import React from "react";

import MainContent from "@/components/MainContent/index";
import { act, render } from "@testing-library/react";

test("renders MainContent component with correct props", async () => {
    const mockSetSelectedPokemon = jest.fn();
    const mockFilteredType = "grass";

    global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue({
            results: [
                {
                    name: "bulbasaur",
                    url: "https://pokeapi.co/api/v2/pokemon/1/",
                },
            ],
        }),
    });

    let getByText;
    await act(async () => {
        const { getByText: getByTextInner } = render(
            <MainContent setSelectedPokemon={mockSetSelectedPokemon} filteredType={mockFilteredType} />
        );
        getByText = getByTextInner;
    });

    const loadingElement = getByText("Loading...");
    expect(loadingElement).toBeInTheDocument();

    await new Promise((resolve) => setTimeout(resolve, 100));

    const bulbasaurElement = getByText("Bulbasaur");
    expect(bulbasaurElement).toBeInTheDocument();
});
