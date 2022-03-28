import {
  getPokemonInOrder,
  PokemonQueryResult,
} from "@/backend/utils/getPokemonInOrder";
import PokemonListing from "@/components/pokemonRow";
import SearchInput from "@/components/searchInput";
import type { GetServerSideProps } from "next";
import React from "react";

const ResultsPage: React.FC<{
  pokemon: PokemonQueryResult;
}> = (props) => {
  return (
    <div className="flex flex-col w-screen items-center overflow-auto">
      <div className="p-2" />
      <h2 className="text-2xl sticky top-0">Results</h2>
      <div className="p-2" />
      <SearchInput />
      <div className="p-4" />
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
