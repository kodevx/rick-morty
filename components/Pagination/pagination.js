'use client';
import Button from "../Button";
import { NEXT, PREV } from '@/constants/constants';

const Pagination = (props) => {

    const { 
        nextPage,
        prevPage,
        currentPage,
        totalPages,
        handleNext,
        handlePrev, 
        handlePageUpdate
    } = props;

    return (
        <div className="flex items-center">
            <Button
                isDisabled={currentPage - 1 === 0}
                label={prevPage}
                styles={"text-sm h-6 w-6 self-center cursor-pointer disabled:bg-gray-300 disabled:text-white active:shadow-none text-white bg-green-500 hover:bg-white active:bg-gray-50 hover:text-green-500 shadow-lg shadow-green-200 transition-all duration-300 rounded-2xl"}
                handleClick={() => { 
                    handlePrev();
                    handlePageUpdate(PREV, currentPage)
                }}
            />
            <Button 
                label={currentPage}
                styles={"text-md cursor-none mx-4 h-9 w-9 self-center cursor-pointer active:shadow-none text-white bg-green-500 shadow-lg shadow-green-200 transition-all duration-300 rounded-3xl"}
                handleClick={() => null}
            />
            <Button
                isDisabled={currentPage + 1 === totalPages}
                label={nextPage}
                styles={"text-sm h-6 w-6 self-center cursor-pointer disabled:bg-gray-300 active:shadow-none text-white bg-green-500 hover:bg-white active:bg-gray-50 hover:text-green-500 shadow-lg shadow-green-200 transition-all duration-300 rounded-2xl"}
                handleClick={() => {
                    handleNext();
                    handlePageUpdate(NEXT, currentPage)
                }}
            />
        </div>
    )
}

export default Pagination;
