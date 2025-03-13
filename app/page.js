'use client'
// import Button from '@/components/Button';
import CharacterCards from "@/components/characterCards/characterCards";
import useHome from "@/customHooks/Home/useHome";

import GET_ALL_CARTOON_CHARACTER_QUERY from '@/queries/getAllCartoonCharacters.graphql';

const Home = () => {

  const { 
    data,
    loading,
    error
  } = useHome({
    queries: { 
      getAllCartoonCharactersQuery: GET_ALL_CARTOON_CHARACTER_QUERY
    }
  });

  console.log("Data: ",data);

  return (
    <div>
      <main>
        <div className="flex flex-col font-grobold mt-5">
          {/* <Button 
            styles={"text-lg h-16 w-72 self-center cursor-pointer active:shadow-none text-white bg-green-500 hover:bg-white active:bg-gray-50 hover:text-green-500 shadow-lg shadow-green-200 transition-all duration-300 rounded-2xl"} 
            label={'Click to see any character!'} 
            handleClick={handleFetchCharacter}
          /> */}
          <div className="px-20 py-5 flex justify-center">
            <CharacterCards />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
