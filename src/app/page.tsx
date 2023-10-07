'use client'

import React, { useState } from "react";

import MainContent from "@/components/MainContent/index";
import Navbar from "@/components/Navbar/index";
import Sidebar from "@/components/Sidebar/index";

const Home: React.FC = () => {
  const [selectedPokemon, setSelectedPokemon] = useState<string | null>(null);
  const [filteredType, setFilteredType] = useState<string>('');

  return (
    <div>
      <Navbar />
      <div className="container mx-auto flex mt-4">
        <div className="w-1/4">
          <Sidebar setFilteredType={setFilteredType} />
        </div>
        <div className="w-3/4">
          <MainContent setSelectedPokemon={setSelectedPokemon} filteredType={filteredType} />
        </div>
      </div>
    </div>
  );
};

export default Home;
