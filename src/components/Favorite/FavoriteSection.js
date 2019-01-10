import React from 'react';
import FaveButton from './FaveButton';

const FavoriteSection = ({ gifId }) => {
    return <div className="favorite-section"><FaveButton gifId={gifId} /></div>
};

export default FavoriteSection;