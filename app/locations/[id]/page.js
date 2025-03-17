'use-client'

// import GET_ALL_LOCATIONS_QUERY from '@/queries/getAllLocation.graphql';
import { useParams } from 'next/navigation';
// import useLocations from '@/customHooks/Location/useLocation';

const Locations = props => {

    const { 
        id 
    } = useParams();

    // const { 
    //     locations
    // } = useLocations({
    //     queries: {
    //         getAllLocation: GET_ALL_LOCATIONS_QUERY
    //     }
    // });

    return (
        <div>
            Location
        </div>
    )
}

export default Locations;
