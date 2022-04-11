import PokemonCard from "@/components/pokemonCard";
import { useGetPokemonPair } from "@/hooks/useGetPokemonPair";
import type { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  const { pokemonPair, fetchingNext, voteForRoundest } = useGetPokemonPair();

  return (
    <>
      {pokemonPair ? (
        <>
          <div className="p-4 md:p-5 md:flex justify-between items-center max-w-2xl relative bg-white md:shadow-2xl shadow-black md:border-2 border-black animate-fade-in">
            <div className="hidden md:block absolute -right-2 -bottom-2 bg-black h-full w-full -z-50" />
            <PokemonCard
              pokemon={pokemonPair.firstPokemon}
              vote={() => voteForRoundest(pokemonPair.firstPokemon.id)}
              disabled={fetchingNext}
            />
            <div className="p-2.5 flex md:p-8 font-bold underline underline-offset-2 decoration-2 decoration-pink-600">
              <p className="mx-auto">Vs</p>
            </div>
            <PokemonCard
              pokemon={pokemonPair.secondPokemon}
              vote={() => voteForRoundest(pokemonPair.secondPokemon.id)}
              disabled={fetchingNext}
            />
          </div>
        </>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src="/grid.svg" alt="loading" className="invert" />
      )}
    </>
  );
};

export default Home;
