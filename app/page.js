'use client'
// import Button from '@/components/Button';
import CharacterCards from "@/components/CharacterCards";
import Pagination from "@/components/Pagination";
import useHome from "@/customHooks/Home/useHome";

import GET_ALL_CARTOON_CHARACTER_QUERY from '@/queries/getAllCartoonCharacters.graphql';

const Home = () => {

  const {
    characters,
    handleNext, 
    handlePrev,
    totalCount,
    isLoading,
    paginationState,
    handlePageUpdate
  } = useHome({
    queries: { 
      getAllCartoonCharactersQuery: GET_ALL_CARTOON_CHARACTER_QUERY
    }
  });

  console.log("Data: ",characters);

  return (
    <div>
      <main>
        <div className="flex flex-col font-grobold mt-5">
          {/* <Button 
            styles={"text-lg h-16 w-72 self-center cursor-pointer active:shadow-none text-white bg-green-500 hover:bg-white active:bg-gray-50 hover:text-green-500 shadow-lg shadow-green-200 transition-all duration-300 rounded-2xl"} 
            label={'Click to see any character!'} 
            handleClick={handleFetchCharacter}
          /> */}
          <div className="text-2xl self-center">{`All Characters (${totalCount})`}</div>
          <div className="px-20 py-5 flex flex-col justify-center items-center">
            <div className="flex flex-col justify-between">
              {characters && 
               characters.length > 0 
                ? characters.map(character => (<CharacterCards key={character.id} {...character} />))
                : isLoading ? 'loading...' /* <Shimmer /> */ : null}   {/* TODO: Add Shimmer Component */}
            </div>
            <div className="py-10">
              <Pagination 
                  {...paginationState}
                  handlePageUpdate={handlePageUpdate}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
