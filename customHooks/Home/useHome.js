'use client'
import { useCallback, useState, useTransition, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import usePagination from "../Pagination/usePagination";

import { NEXT } from '@/constants/constants';

const useHome = (props) => {

    const [characters, setCharacters] = useState(null);
    const [isPending, startTransition] = useTransition();

    const [
        paginationState,
        { handleNext, handlePrev, handleTotalPagesAndCount }
    ] = usePagination();

    console.log("paginationState: ",paginationState);
    const { totalCount } = paginationState;

    const { 
        queries: { getAllCartoonCharactersQuery } 
    } = props;

    const [
        runCharactersQuery,
        { data, loading, error }
    ] = useLazyQuery(getAllCartoonCharactersQuery, { 
        fetchPolicy: 'no-cache',
        onCompleted: (data) => {
            startTransition(() => {
                setCharacters(data.characters.results);
                handleTotalPagesAndCount({ ...data.characters.info });
            });
        }
    });

    useEffect(
        () => {
            runCharactersQuery({ 
                variables: { page: 1 } 
            });
        },
        []
    );

    const handlePageUpdate = useCallback(
        async (pageAction, pagePosition) => {
            try {
                const currentPage = 
                    pageAction === NEXT 
                        ? pagePosition + 1
                        : pagePosition - 1

                await runCharactersQuery({ 
                    variables: { page: currentPage } 
                });

            } catch (error) {
                console.log("Page Update Callback Error: ",error);
            }
        }, 
        [runCharactersQuery]
    );

    return {
        characters,
        totalCount,
        paginationState,
        isLoading: isPending,
        handleNext, 
        handlePrev,
        handlePageUpdate
    }
}

export default useHome;
