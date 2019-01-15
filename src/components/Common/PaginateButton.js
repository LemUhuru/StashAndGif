import React from 'react';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import { withStyles } from '@material-ui/core/styles';

// const styles = theme => ({
//     fab: {
//       margin: theme.spacing.unit,
//     },
//     extendedIcon: {
//       marginRight: theme.spacing.unit,
//     },
//   });

const PaginateButton = props => {
    const { searchQuery, fetchNextPage, pagination, classes } = props;
    const { count, total_count, offset } = pagination;
    const paginateCTA = total_count - count > count ? `Load ${count} more` : "Load all";
    console.log(total_count, 'totalCount')
    console.log(count, 'count')

    const handlePaginate = () => {
        let newOffset = offset + count
        fetchNextPage(searchQuery, count, newOffset);
    };

        
    return (
        <div className="paginate-btn">
            <Fab onClick={handlePaginate} variant="extended" aria-label="Delete" >
                <NavigationIcon  />
                {paginateCTA}
            </Fab>
        </div>
    );
};


export default PaginateButton;