'use client'
import { useQuery } from "@apollo/client";

const useHome = (props) => {

    const { 
        queries: { getCartoonCharactersByIdQuery } 
    } = props;

    console.log("random number: ",Math.floor(Math.random()*100));

    const { data, loading, error } = useQuery(getCartoonCharactersByIdQuery, { 
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
