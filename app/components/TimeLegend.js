import React from 'react';
import PropTypes from 'prop-types';
import HourSlot from './HourSlot';
import {convertTime} from './../util/functions';


const TimeLegend = (props) => {
    let timeSlots = [];
    for(let i=props.fromTime; i<=props.toTime; i++) {
        let time = convertTime(i,i===props.fromTime || i===12);
        timeSlots.push(<HourSlot key={i} legend={true} name={time} />);
    }
    return (
        <div>
            <div className="d-flex flex-column">
                <div className="day-title text-center"></div>
                {timeSlots}
            </div>
        </div>
    );
}

export default TimeLegend;