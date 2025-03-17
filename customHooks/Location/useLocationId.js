'use client';

import { useState } from 'react';
import { useQuery } from '@apollo/client';

const useLocationId = props => {

    const { 
        id,
        queries
    } = props;
    
    const { getLocationByIdQuery } = queries;

    const [location, setLocation] = useState(null);

    const { loading: isLoading, error } = useQuery(getLocationByIdQuery, {
        variables: { id },
        onCompleted: (data) => {
            console.log("location: ",data);
            if(
                data && 
                data.location && 
                Object.keys(data.location)
            ){
                setLocation(data.location);
            }
        }
    });

    return {
        location,
        isLoading
    }
}

export default useLocationId;