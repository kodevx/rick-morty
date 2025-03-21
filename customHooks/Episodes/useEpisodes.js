'use client'
import { useCallback, useState, useTransition, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import usePagination from "../Pagination/usePagination";

import { NEXT } from '@/constants/constants';

const useEpisodes = (props) => {

    const { id } = props;

    const [episodes, setEpisodes] = useState(null);
    const [isPending, startTransition] = useTransition();

    const { 
        queries: { getAllEpsiodesQuery } 
    } = props;

    const [
        paginationState,
        { handleNext, handlePrev, handleTotalPagesAndCount }
    ] = usePagination();

    const { totalCount } = paginationState;

    const [
        runEpisodessQuery,
        { loading, error, isCalled }
    ] = useLazyQuery(getAllEpsiodesQuery, { 
        variables: {
            id
        },
        onCompleted: (data) => {
            startTransition(() => {
                setEpisodes(data.episodes.results);
                handleTotalPagesAndCount({ ...data.episodes.info });
            });
        }
    });

    useEffect(
        () => {
            runEpisodessQuery({ 
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

                await runEpisodessQuery({ 
                    variables: { page: currentPage } 
                });

            } catch (error) {
                console.log("Page Update Callback Error: ",error);
            }
        }, 
        [runEpisodessQuery]
    );

    return {
        episodes,
        totalCount,
        paginationState,
        isLoading: isPending || loading,
        isCalled,
        handleNext, 
        handlePrev,
        handlePageUpdate
    }
}

export default useEpisodes;
