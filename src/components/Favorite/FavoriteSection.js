import React from 'react';
import FaveIcon from './FaveIcon';

const FavoriteSection = ({ gifId }) => {
    return <div className="favorite-section"><FaveIcon gifId={gifId} /></div>
};

export default FavoriteSection;