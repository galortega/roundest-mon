import { trpc } from "@/utils/trpc";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(["hello", { text: "GALO" }]);
  if (isLoading) return <div>...</div>;
  if (data) return <div>Hello {data.greeting}</div>;
  return (
    <div className="h-screen w-screen flex flex-col justify-center align-center items-center">
      <div className="text-2xl text-center">Which Pokémon is Rounder?</div>
      <div className="p-2" />
      <div className="border rounded p-8 flex justify-between max-w-2xl items-center">
        <div className="w-16 h-16 bg-red-200"></div>
        <div className="p-8">VS</div>
        <div className="w-16 h-16 bg-red-200"></div>
      </div>
    </div>
  );
};

export default Home;
