import React, {useState} from 'react';
import './Pagination.scss';
import OffersItem from "../OffersItem/OffersItem";

interface DataItem {
    id: number;
    price: number;
    time: string;
    workName: string;
}

interface PaginationProps {
    data: DataItem[];
    itemsPerPage: number;
}

const Pagination: React.FC<PaginationProps> = ({data, itemsPerPage}) => {

    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const goToPage = (page: number) => {
        setCurrentPage(page);
    };

    const getPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => goToPage(i)}
                    className={currentPage === i ? 'active' : ''}
                >
                    {i}
                </button>
            );
        }
        return pageNumbers;
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedItems = data.slice(startIndex, endIndex);

    return (
        <div className='wrapper-pagination'>
            <ul>
                {displayedItems.map((item) => (
                    <OffersItem id={item.id} price={item.price} time={item.time} workName={item.workName}/>
                ))}
            </ul>

            <div className="pagination">
                {getPageNumbers()}
            </div>
        </div>
    );
};

export default Pagination;