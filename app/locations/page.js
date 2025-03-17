'use client'

import LocationCards from "@/components/LocationCards";
import CardsShimmer from "@/components/Shimmers/cardsShimmer";
import Pagination from "@/components/Pagination";
import useLocation from "@/customHooks/Location/useLocation";

import GET_ALL_LOCATIONS_QUERY from '@/queries/getAllLocations.graphql';

const Location = () => {

    const {
      locations,
      handleNext, 
      handlePrev,
      totalCount,
      isCalled,
      isLoading,
      paginationState,
      handlePageUpdate,
    } = useLocation({
      queries: { 
        getAllLocationsQuery: GET_ALL_LOCATIONS_QUERY
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
            <div className="flex flex-col justify-between">
              {isLoading || !locations 
                ? <CardsShimmer /> 
                : locations && locations.length > 0 && (
                    locations.map(location => (
                      <LocationCards key={location.id} {...location} />
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

export default Location;
