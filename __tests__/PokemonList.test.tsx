import React from "react";

import PokemonList from "@/components/PokemonList/index";
import { render } from "@testing-library/react";

const mockPokemonList = [
    {
        name: "Bulbasaur",
        imageUrl: "https://example.com/bulbasaur.png",
        height: 7,
        weight: 69,
    },
];

test("renders PokemonList component with correct props", () => {
    const mockOnSelect = jest.fn(); // Mocking the onSelect function

    const { getByText, getAllByRole } = render(
        <PokemonList pokemonList={mockPokemonList} onSelect={mockOnSelect} />
    );

    // Check if Pokemon names are rendered
    mockPokemonList.forEach((pokemon) => {
        const nameElement = getByText(pokemon.name);
        expect(nameElement).toBeInTheDocument();
    });

    // Check if images are rendered
    const imageElements = getAllByRole("img");
    expect(imageElements.length).toBe(mockPokemonList.length);

    // Check if height and weight information is rendered
    mockPokemonList.forEach((pokemon) => {
        const heightElement = getByText(`Height: ${pokemon.height} cm`);
        const weightElement = getByText(`Weight: ${pokemon.weight} kg`);
        expect(heightElement).toBeInTheDocument();
        expect(weightElement).toBeInTheDocument();
    });
});
