import { useReducer, useMemo, useCallback} from 'react';

const INCREMENT_PAGE = 'increment_page';
const DECREMENT_PAGE = 'decrement_page';
const UPDATE_TOTAL_PAGES_AND_COUNT = 'update_total_pages_and_count';

const initialState = {
    nextPage: 2,
    prevPage: 0,
    currentPage: 1,
    totalPages: 0,
    totalCount: 0
}

function reducer (state, action) {

    switch(action.type) {
        case INCREMENT_PAGE: {
            return {
                ...state,
                currentPage: state.currentPage + 1,
                nextPage: state.nextPage + 1,
                prevPage: state.prevPage + 1,
            }
        };
        case DECREMENT_PAGE: {
            return {
                ...state,
                currentPage: state.currentPage - 1,
                nextPage: state.nextPage - 1,
                prevPage: state.prevPage - 1,       
            }
        };
        case UPDATE_TOTAL_PAGES_AND_COUNT: {
            return {
                ...state,
                totalPages: action.payload.pages,
                totalCount: action.payload.count            
            }
        };

        throw Error('Unknown action: ' + action.type);
    }
}

const usePagination = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleNext = useCallback (
        () => {
            dispatch({ type: INCREMENT_PAGE });
        },
        [dispatch]
    );

    const handlePrev = useCallback(
        () => {
            dispatch({ type: DECREMENT_PAGE });
        },
        [dispatch]
    );

    const handleTotalPagesAndCount = useCallback(
        (payload) => {
            dispatch({ type: UPDATE_TOTAL_PAGES_AND_COUNT, payload });
        },
        [dispatch]
    );


    const api = useMemo(() => 
        ({
            handleNext,
            handlePrev,
            handleTotalPagesAndCount
        }),
        [handleNext, handlePrev, handleTotalPagesAndCount]
    );

    return [
        state, 
        api
    ];
}

export default usePagination;
