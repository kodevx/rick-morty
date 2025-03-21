'use client'

import LocationCards from "@/components/LocationCards";
import CardsShimmer from "@/components/Shimmers/cardsShimmer";
import Pagination from "@/components/Pagination";
import useEpisodes from "@/customHooks/Episodes/useEpisodes";

import GET_ALL_EPISODES_QUERY from '@/queries/getAllEpisodes.graphql';

const Episodes = (props) => {

    const {
      episodes,
      handleNext, 
      handlePrev,
      totalCount,
      isCalled,
      isLoading,
      paginationState,
      handlePageUpdate,
    } = useEpisodes({
      queries: { 
        getAllEpisodessQuery: GET_ALL_EPISODES_QUERY
      }
    });

  if(isCalled && locations.length === 0) { 
    <div className="flex flex-col justify-center mt-5 items-center">
      No Locations Found
    </div>
  }

  return (
    <div>
      <main>
        <div className="flex flex-col font-grobold mt-5">
          <div className="text-2xl self-center tracking-wider">
            All Locations <span className="text-green-600">({`${totalCount ? totalCount : ''}`})</span>
          </div>
          <div className="px-20 py-5 flex flex-col justify-center items-center">
            <div className="grid grid-cols-2 gap-5 justify-between">
              {isLoading || !locations 
                ? <CardsShimmer /> 
                :   episodes && episodes.length > 0 && (
                    episodes.map(episode => (
                      <Episode key={location.id} {...episode} />
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

export default Episodes;
