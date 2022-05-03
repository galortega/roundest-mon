import PokemonListing from "@/components/pokemonRow";
import SearchInput from "@/components/searchInput";
import { trpc } from "@/utils/trpc";
import { SearchOutlined } from "@ant-design/icons";
import Head from "next/head";
import React, { useState } from "react";

const ResultsPage: React.FC<{}> = () => {
  const [showSearch, setShowSearch] = useState(false);
  const { data: session } = trpc.useQuery(["next-auth.getSession"]);

  const { data: pokemons, error } = trpc.useQuery([
    "get-pokemon-votes-by-user",
  ]);
  if (error) alert(error);
  return (
    <>
      <Head>
        <title>{session?.user?.name}&apos;s results</title>
      </Head>
      <div className="h-screen w-screen flex flex-col justify-between align-middle items-center overflow-auto">
        <div className="p-2" />
        <div className="flex sticky top-0">
          <h2 className="text-2xl capitalize mr-2">
            {(session && session?.user?.name) || "User"}&apos;s results
          </h2>
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="bg-gray-100 p-1 px-2 border border-gray-600"
          >
            <SearchOutlined />
          </button>
        </div>
        <div className="p-2" />
        <SearchInput visible={showSearch} />
        <div className="p-2" />
        {!pokemons || !session ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src="/grid.svg" className="my-auto invert" alt="loading" />
        ) : (
          <>
            <div className="p-2" />
            <div className="flex flex-col w-full max-w-2xl shadow-2xl">
              {pokemons.map((currentPokemon, index) => (
                <PokemonListing pokemon={currentPokemon} key={index} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ResultsPage;
