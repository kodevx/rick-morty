'use client'

import LocationCards from "@/components/LocationCards";
import CardsShimmer from "@/components/Shimmers/cardsShimmer";
import Pagination from "@/components/Pagination";
import useEpisodes from "@/customHooks/Episodes/useEpisodes";

import GET_ALL_EPISODES_QUERY from '@/queries/getAllLocations.graphql';

const Episodes = (props) => {

    const {
        id,
        name,
        air_date,
        episode,
        characters
    } = props;

    return (
        <div className="flex flex-col">
            <div>
                <div>
                    
                </div>
            </div>
            <div>
                
            </div>
        </div>
    );
}

export default Episodes;
