import React from 'react';

const gifList =  [
    "https://media.giphy.com/media/l2Sq9qGTQnL5NyI6Y/giphy.gif",
    "https://media.giphy.com/media/5fBH6zoAQg9dHK2ttsc/giphy.gif",
    "https://media.giphy.com/media/72HahsJD4atSE/giphy.gif",
    "https://media.giphy.com/media/5fBH6z8aMV1RbA4FaSc/giphy.gif",
    "https://media.giphy.com/media/3oz8xBkRsgPTnbK1GM/giphy.gif",
];

const FavoriteGifList = props => {
    const renderGifList = gifList.map((gifSrc, index) => <li key={index}><img alt="" src={gifSrc} /></li>);

    return (
        <ul className="gif-list">
            {renderGifList}           
        </ul>
    );
};

export default FavoriteGifList;