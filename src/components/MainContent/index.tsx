// components/MainContent.tsx

import React, { useEffect, useState } from "react";

import PokemonCard from "../PokemonCard/index";

interface Pokemon {
    name: string;
    id: number;
    types: string[];
}

interface MainContentProps {
    setSelectedPokemon: React.Dispatch<React.SetStateAction<string | null>>;
    filteredType: string;
}

const MainContent: React.FC<MainContentProps> = ({ setSelectedPokemon, filteredType }) => {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
    const [offset, setOffset] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`);
            const data = await response.json();

            const pokemonData: Pokemon[] = await Promise.all(
                data.results.map(async (result: any) => {
                    const response = await fetch(result.url);
                    const pokemonDetails = await response.json();
                    return {
                        name: pokemonDetails.name,
                        id: pokemonDetails.id,
                        types: pokemonDetails.types.map((type: any) => type.type.name),
                        height: pokemonDetails.height,
                        weight: pokemonDetails.weight,
                    };
                })
            );

            setPokemonList((prevList) => [...prevList, ...pokemonData]);
            setIsLoading(false);
        };

        fetchData();
    }, [offset]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
                setOffset((prevOffset) => prevOffset + 20);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const filteredPokemon = filteredType
        ? pokemonList.filter((pokemon) => pokemon.types.includes(filteredType))
        : pokemonList;

    return (
        <>
            <div className="flex flex-wrap justify-center gap-4">
                {filteredPokemon.map((pokemon: any, index: number) => (
                    <PokemonCard
                        key={index}
                        name={pokemon.name}
                        imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                        height={pokemon.height}
                        weight={pokemon.weight}
                    />
                ))}
            </div>
            {isLoading && <div className="text-center mt-4 text-white">Loading...</div>}
        </>
    );
};

export default MainContent;
