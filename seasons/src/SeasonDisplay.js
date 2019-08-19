import React from 'react';


const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'verão' : 'inverno';
    } else {
        return lat > 0 ? 'inverno' : 'verão';
    }
};

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());

    console.log(season);
    return <div>Season Display: {season}</div>
};

export default SeasonDisplay;
