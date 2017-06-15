import {OPEN_APPT_FORM,CANCEL_APPT_FORM,SAVE_APPT,EDIT_SCHEDULING} from './../actions';

const initialState = {
    isScheduling: false,
    scheduling: {
        day: '',
        time: null,
        name: '',
        phone: ''
    },
    schedule: {
        'Monday': null,
        'Tuesday': null,
        'Wednesday': null,
        'Thursday': null,
        'Friday': null,
        'Saturday': null,
        'Sunday': null
    },
    fromTime: 9,
    toTime: 17
}

function scheduleApp(state = initialState,action) {
    let schedule;
    let scheduling;
    switch (action.type) {
        case OPEN_APPT_FORM:
            scheduling = {
                day: action.day,
                time: action.time,
                name: action.name,
                phone: action.phone
            };
            return Object.assign({}, state, {
                scheduling,
                isScheduling: true
            });
        case CANCEL_APPT_FORM:
            scheduling = {
                day: '',
                time: null,
                name: '',
                phone: ''
            };
            return Object.assign({}, state, {
                scheduling,
                isScheduling: false 
            });
        case SAVE_APPT:
            schedule = Object.assign({}, state.schedule);
            schedule[action.day] = Object.assign({},state.schedule[action.day])
            schedule[action.day][action.time] = {
                name: action.name,
                phone: action.phone
            };
            scheduling = {
                day: '',
                time: null,
                name: '',
                phone: ''
            };
            return Object.assign({}, state, {
                scheduling,
                isScheduling: false,
                schedule 
            });
        case EDIT_SCHEDULING:
            scheduling = Object.assign({},state.scheduling);
            scheduling[action.field] = action.value;
            return Object.assign({}, state, {
                scheduling
            });
        default:
            return state;
    }
}

export default scheduleApp;