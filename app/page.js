'use client'

import useHome from "@/customHooks/Home/useHome";
import GET_CARTOON_CHARACTER_BY_ID_QUERY from '@/queries/getCartoonCharactersById.graphql';

export default function Home() {

  const { 
    data,
    loading,
    error 
  } = useHome({
    queries: { 
      getCartoonCharactersByIdQuery: GET_CARTOON_CHARACTER_BY_ID_QUERY
    }
  });

  return (
    <div>
      <main className="font-grobold text-2xl">
        Ricky N Morty
      </main>
      <div className="font-bluetea text-2xl">Bluetea</div>
    </div>
  );
}
