import React from 'react';
import PropTypes from 'prop-types';

require('./../styles/components/HourSlot.css');

const HourSlot = (props) => {
    const available = props.name && props.phone ? false : true;
    const name = props.name ? <div className="name">{props.name}</div> : null;
    const phone = props.phone ? <div className="phone">{props.phone}</div> : null;
    const id = props.legend ? null : `${props.day}-${props.time}-${props.name}-${props.phone}`;
    const onClickFn = props.onClick ? props.onClick.bind(null,props.day,props.time,props.name,props.phone) : null;
    return (
        <div id={id} onClick={onClickFn} className={`hour-slot${!available ? ' alert-danger':''}${props.legend ? ' hour-legend':''}`}>
            {name}
            {phone}
        </div>
    );
};

HourSlot.propTypes = {
    legend: PropTypes.bool,
    name: PropTypes.string,
    phone: PropTypes.string,
    day: PropTypes.string,
    time: PropTypes.number,
    onClick: PropTypes.func
}

export default HourSlot;