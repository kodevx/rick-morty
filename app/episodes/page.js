'use client'

import EpisodeShimmer from "@/components/Shimmers/episodeShimmer";
import Pagination from "@/components/Pagination";
import Episode from '@/components/Episode/episode';
import useEpisodes from "@/customHooks/Episodes/useEpisodes";

import GET_ALL_EPISODES_QUERY from "@/queries/getAllEpisodes.graphql";

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
        getAllEpisodesQuery: GET_ALL_EPISODES_QUERY
      }
    });

  if(isCalled && episodes.length === 0) { 
    return ( 
      <div className="flex flex-col justify-center mt-5 items-center">
        No Epsiodes Found
      </div>
    )
  }


  return (
    <div>
      <main>
        <div className="flex flex-col font-grobold mt-5">
          <div className="text-2xl self-center tracking-wider">
            All Episodes 
            {totalCount ? (
              <span className="text-green-600 ml-1">
                ({totalCount})
              </span>
            ) : null}
          </div>
          <div className="px-20 py-5 flex flex-col justify-center items-center">
            <div>
              {isLoading || !episodes 
                ? <EpisodeShimmer /> 
                :   episodes && episodes.length > 0 && (
                    episodes.map(episode => (
                      <Episode key={episode.id} {...episode} />
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
