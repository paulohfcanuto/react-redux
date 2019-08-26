import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
    verao: {
        text: "Let's hit the bitch(kkk)",
        icon: 'massive sun icon',
        iconName: 'sun'
    },
    inverno: {
        text: "Burr, it is chilly",
        icon: 'massive snowflake icon',
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'verao' : 'inverno';
    } else {
        return lat > 0 ? 'inverno' : 'verao';
    }
};

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, icon } = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left ${icon}`} />
            <h1>{text}</h1>
            <i className={`icon-right ${icon}`} />
        </div>
    );
};

export default SeasonDisplay;
