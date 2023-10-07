import React from "react";

import PokemonCard from "../PokemonCard/index";

interface PokemonListProps {
    pokemonList: {
        name: string;
        imageUrl: string;
        height: number;
        weight: number;
    }[];
    onSelect: (name: string) => void;
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemonList }) => {
    return (
        <div className="flex flex-wrap justify-center">
            {pokemonList.map((pokemon, index) => (
                <PokemonCard
                    key={index}
                    name={pokemon.name}
                    imageUrl={pokemon.imageUrl}
                    height={pokemon.height}
                    weight={pokemon.weight}
                />
            ))}
        </div>
    );
};

export default PokemonList;
