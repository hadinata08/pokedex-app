import React from "react";

interface PokemonCardProps {
    name: string;
    imageUrl: string;
    height: number;
    weight: number;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, imageUrl, height, weight }) => {
    return (
        <div className="bg-white p-4 shadow-lg rounded-lg mb-4 text-black">
            <img src={imageUrl} alt={name} className="mx-auto w-32" />
            <h3 className="text-lg font-bold text-center mt-2">{name}</h3>
            <p className="text-center">Height: {height} cm</p>
            <p className="text-center">Weight: {weight} kg</p>
        </div>
    );
};

export default PokemonCard;
