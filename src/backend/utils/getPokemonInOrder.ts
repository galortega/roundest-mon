import { prisma } from "./prisma";
import { AsyncReturnType } from "@/utils/ts-bs";
export type PokemonQueryResult = AsyncReturnType<typeof getPokemonInOrder>;

export const getPokemonInOrder = async () =>
  await prisma.pokemon.findMany({
    orderBy: { VoteFor: { _count: "desc" } },
    select: {
      id: true,
      name: true,
      spriteUrl: true,
      _count: {
        select: {
          VoteAgainst: true,
          VoteFor: true,
        },
      },
    },
  });
