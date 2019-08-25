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
    const text = season === 'inverno' ? 'Burr, it is chilly' : 'Let\'s hit the bitch(kkk)';

    return (
        <div>
            <h1>{text}</h1>
        </div>
    );
};

export default SeasonDisplay;
