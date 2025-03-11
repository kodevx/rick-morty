'use client'

import useHome from "@/customHooks/Home/useHome";
import GET_ALL_CARTOON_CHARACTER_QUERY from '@/queries/getAllCartoonCharacters.graphql';

export default function Home() {

  const { 
    data,
    loading,
    error 
  } = useHome({
    queries: { 
      getAllCartoonCharactersQuery: GET_ALL_CARTOON_CHARACTER_QUERY 
    }
  });

  return (
    <div>
      <main>
        Homepage
      </main>
    </div>
  );
}
