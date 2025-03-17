'use client'
import { useCallback, useState, useTransition, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import usePagination from "../Pagination/usePagination";

import { NEXT } from '@/constants/constants';

const useLocation = (props) => {

    const [locations, setLocations] = useState(null);
    const [isPending, startTransition] = useTransition();

    const { 
        queries: { getAllLocationsQuery } 
    } = props;

    const [
        paginationState,
        { handleNext, handlePrev, handleTotalPagesAndCount }
    ] = usePagination();

    const { totalCount } = paginationState;

    const [
        runLocationsQuery,
        { loading, error, isCalled }
    ] = useLazyQuery(getAllLocationsQuery, { 
        fetchPolicy: 'no-cache',
        onCompleted: (data) => {
            startTransition(() => {
                setLocations(data.locations.results);
                handleTotalPagesAndCount({ ...data.locations.info });
            });
        }
    });

    useEffect(
        () => {
            runLocationsQuery({ 
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

                await runLocationsQuery({ 
                    variables: { page: currentPage } 
                });

            } catch (error) {
                console.log("Page Update Callback Error: ",error);
            }
        }, 
        [runLocationsQuery]
    );

    return {
        locations,
        totalCount,
        paginationState,
        isLoading: isPending || loading,
        isCalled,
        handleNext, 
        handlePrev,
        handlePageUpdate
    }
}

export default useLocation;
