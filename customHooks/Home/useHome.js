'use client'
import { useQuery } from "@apollo/client";

const useHome = (props) => {

    const { 
        queries: { getAllCartoonCharactersQuery } 
    } = props;

    const { data, loading, error } = useQuery(getAllCartoonCharactersQuery, { 
        fetchPolicy: 'no-cache',
        onCompleted: (data) => {
            console.log("data: ",data);
        }
    });

    return { 
        data, 
        loading, 
        error
    }
}

export default useHome;
