import React from 'react';
import PropTypes from 'prop-types';
import DaySchedule from './DaySchedule';
import TimeLegend from './TimeLegend';


const weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const WeekSchedule = (props) => {
    const omit = props.omitDays ? props.omitDays : [];
    const days = weekdays.map(d => {
        if(omit.indexOf(d) !== -1)  return;
        let schedule = props.schedule && props.schedule[d] ? props.schedule[d] : null;
        return <DaySchedule 
                    key={d}
                    fromTime={props.fromTime} 
                    toTime={props.toTime} 
                    day={d} 
                    schedule={schedule}
                    onClick={props.onClick}
                />;
    });
    return (
        <div className="d-flex">
            <TimeLegend fromTime={props.fromTime} toTime={props.toTime} />
            {days}
        </div>
    );
}


WeekSchedule.propTypes = {
    omitDays: PropTypes.arrayOf(PropTypes.oneOf(weekdays)),
    fromTime: PropTypes.number.isRequired, // 24 hour clock
    toTime: PropTypes.number.isRequired, // 24 hour clock
    schedule: PropTypes.object,
    onClick: PropTypes.func
}

export default WeekSchedule;