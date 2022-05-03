import {
  getPokemonInOrder,
  PokemonQueryResult,
} from "@/backend/utils/getPokemonInOrder";
import PokemonListing from "@/components/pokemonRow";
import SearchInput from "@/components/searchInput";
import { FileSearchOutlined, SearchOutlined } from "@ant-design/icons";
import type { GetServerSideProps } from "next";
import React, { useState } from "react";

const ResultsPage: React.FC<{
  pokemon: PokemonQueryResult;
}> = (props) => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="h-screen w-screen flex flex-col justify-between align-middle items-center overflow-auto">
      <div className="p-2" />
      <div className="flex sticky top-0">
        <h2 className="text-2xl mr-2">Results</h2>
        <button
          onClick={() => setShowSearch(!showSearch)}
          className="bg-gray-100 p-1 px-2 border border-gray-600"
        >
          <SearchOutlined />
        </button>
      </div>
      <div className="p-2" />
      <SearchInput visible={showSearch} />
      <div className="flex flex-col w-full max-w-2xl shadow-2xl">
        {props.pokemon.map((currentPokemon, index) => (
          <PokemonListing pokemon={currentPokemon} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ResultsPage;

export const getStaticProps: GetServerSideProps = async () => {
  const pokemonOrdered = await getPokemonInOrder();
  return { props: { pokemon: pokemonOrdered, revalidate: 60 } };
};
