import PropTypes from "prop-types";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const getPageNumbers = () => {
        const pageNumbers = [];

        if (currentPage <= 3) {
            for (let i = 1; i <= Math.min(3, totalPages); i++) {
                pageNumbers.push(i);
            }
        } else if (currentPage > totalPages - 3) {
            for (let i = totalPages - 2; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                pageNumbers.push(i);
            }
        }

        return pageNumbers;
    };

    return (
        <div className="flex items-center justify-center space-x-2   bottom-10 mt-10 gap-2">

            {getPageNumbers().map((number) => (
                <button
                    key={number}
                    className={`p-2 rounded-full border-none outline-none shadow-sm text-lg font-semibold  ${currentPage === number
                        ? "bg-gray-100 text-white-300  hover:bg-white-300  w-10 flex justify-center items-center  h-10 scale-125"
                        : "bg-gray-300 text-white-200 hover:bg-white-200 hover:text-gray-200  w-10 flex justify-center items-center h-10"
                        }`}
                    onClick={() => onPageChange(number)}
                >
                    {number}
                </button>
            ))}
            <button
                className=" text-2xl text-gray-400 hover:text-gray-500 disabled:opacity-50 "
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                <MdNavigateNext className="text-4xl" />
            </button>
        </div>
    );
};

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
};

export default Pagination;