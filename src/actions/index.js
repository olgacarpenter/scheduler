// Action types
export const OPEN_APPT_FORM = 'OPEN_APPT_FORM';
export const CANCEL_APPT_FORM = 'CANCEL_APPT_FORM';
export const SAVE_APPT = 'SAVE_APPT';
export const EDIT_SCHEDULING = 'EDIT_SCHEDULING';


//Action creators
export function openApptForm(day,time,name='',phone='') {
    return {
        type: OPEN_APPT_FORM,
        day,
        time,
        name,
        phone
    }
}

export function cancelApptForm() {
    return {
        type: CANCEL_APPT_FORM
    }
}

export function saveAppt(day,time,name='',phone='') {
    return {
        type: SAVE_APPT,
        day,
        time,
        name,
        phone
    }
}

export function editScheduling(event) {
    return {
        type: EDIT_SCHEDULING,
        field: event.target.id,
        value: event.target.value
    }
}