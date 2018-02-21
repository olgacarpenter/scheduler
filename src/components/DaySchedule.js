import React from 'react';
import PropTypes from 'prop-types';
import HourSlot from './HourSlot';

require('./../styles/components/DaySchedule.css');

const DaySchedule = (props) => {
    let timeSlots = [];
    for(let i=props.fromTime; i<=props.toTime; i++) {
        let name = props.schedule && props.schedule[i] ? props.schedule[i].name : '';
        let phone = props.schedule && props.schedule[i] ? props.schedule[i].phone : '';
        timeSlots.push(<HourSlot key={i} day={props.day} time={i} name={name} phone={phone} onClick={props.onClick}/>);
    }
    return (
        <div className="day">
            <div className="d-flex flex-column">
                <div className="day-title text-center">{props.day}</div>
                {timeSlots}
            </div>
        </div>
    );
}

DaySchedule.propTypes = {
    day: PropTypes.oneOf(['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']).isRequired,
    fromTime: PropTypes.number.isRequired, // 24 hour clock
    toTime: PropTypes.number.isRequired, // 24 hour clock
    schedule: PropTypes.objectOf(PropTypes.shape({
        name: PropTypes.string,
        phone: PropTypes.string
    })),
    onClick: PropTypes.func
}

export default DaySchedule;