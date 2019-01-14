import React from 'react';

const PaginateButton = props => {
    const { searchQuery, fetchNextPage, pagination } = props;
    const { count, total_count, offset } = pagination;
    const paginateCTA = total_count % count ? `Load ${count} more` : "Load all";

    const handlePaginate = () => {
        let newOffset = offset + count
        fetchNextPage(searchQuery, count, newOffset);
    };


    return <button onClick={handlePaginate}>{paginateCTA}</button>;
};


export default PaginateButton;