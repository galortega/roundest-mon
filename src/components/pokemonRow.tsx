import { generateCountPercent } from "@/utils/generateCountPercent";
import { PokemonQueryResult } from "@/backend/utils/getPokemonInOrder";
import Image from "next/image";

const PokemonListing: React.FC<{
  pokemon: PokemonQueryResult[number];
}> = ({ pokemon }) => {
  return (
    <div className="flex p-2 items-center justify-between border-2 hover:border-2 hover:border-black">
      <div className="flex items-center">
        <Image
          src={pokemon.spriteUrl}
          layout="fixed"
          width={64}
          height={64}
          alt={pokemon.name}
        />
        <div className="capitalze">{pokemon.name}</div>
      </div>
      <div className="pr-1">{generateCountPercent(pokemon)}%</div>
    </div>
  );
};

export default PokemonListing;
