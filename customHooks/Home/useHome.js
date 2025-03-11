'use client'
import { useQuery } from "@apollo/client";

const useHome = ({ queries }) => {

    const { getAllCartoonCharactersQuery } = queries;

    console.log("random number: ",Math.floor(Math.random()*100));

    const { data, loading, error } = useQuery(getAllCartoonCharactersQuery, { 
        fetchPolicy: 'no-cache',
        variables: {
            id: "3"
        },
        onCompleted: (data) => {
            console.log("data: ",data);
        }
    });

    console.log("Query reponse: ",data);

    return { 
        data, 
        loading, 
        error
    }
}

export default useHome;
