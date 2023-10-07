import React from "react";

import PokemonCard from "@/components/PokemonCard/index";
import { render } from "@testing-library/react";

test("renders PokemonCard component with correct props", () => {
    const name = "Bulbasaur";
    const imageUrl = "https://example.com/bulbasaur.png";
    const height = 7;
    const weight = 69;

    const { getByText, getByAltText } = render(
        <PokemonCard name={name} imageUrl={imageUrl} height={height} weight={weight} />
    );

    const nameElement = getByText(name);
    const heightElement = getByText(`Height: ${height} cm`);
    const weightElement = getByText(`Weight: ${weight} kg`);
    const imageElement = getByAltText(name);

    expect(nameElement).toBeInTheDocument();
    expect(heightElement).toBeInTheDocument();
    expect(weightElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();

});
