'use client'

import CharacterCards from "@/components/CharacterCards";
import CardsShimmer from "@/components/Shimmers/cardsShimmer";
import Pagination from "@/components/Pagination";
import useHome from "@/customHooks/Home/useHome";

import GET_ALL_CARTOON_CHARACTER_QUERY from '@/queries/getAllCartoonCharacters.graphql';

const Home = () => {

    const {
      characters,
      handleNext, 
      handlePrev,
      totalCount,
      isCalled,
      isLoading,
      paginationState,
      handlePageUpdate,
    } = useHome({
      queries: { 
        getAllCartoonCharactersQuery: GET_ALL_CARTOON_CHARACTER_QUERY
      }
    });

  if(isCalled && characters.length === 0) { 
    <div className="flex flex-col justify-center mt-5 items-center">
      No Characters Found
    </div>
  }

  return (
    <div>
      <main>
        <div className="flex flex-col font-grobold mt-5">
          <div className="text-2xl self-center tracking-wider">
            All Characters <span className="text-green-600">({`${totalCount ? totalCount : ''}`})</span>
          </div>
          <div className="px-20 py-5 flex flex-col justify-center items-center">
            <div className="flex flex-col justify-between">
              {isLoading || !characters 
                ? <CardsShimmer /> 
                : characters && characters.length > 0 && (
                    characters.map(character => (
                      <CharacterCards key={character.id} {...character} />
                    ))
                  )
              }
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
