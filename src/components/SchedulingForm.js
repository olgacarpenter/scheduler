import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const SchedulingForm = (props) => {
    return (
        <Form onSubmit={props.onSave}>
            <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" id="name" value={props.name} onChange={props.onChange} required />
                <Input type="hidden" id="day" value={props.day} />
                <Input type="hidden" id="time" value={props.time} />
            </FormGroup>
            <FormGroup>
                <Label for="phone">Phone</Label>
                <Input type="tel" id="phone" value={props.phone} onChange={props.onChange} />
            </FormGroup>
            <Button type="submit" color="primary">Save</Button>
            <Button onClick={props.onCancel} color="secondary">Cancel</Button>
        </Form>
    );
}

SchedulingForm.propTypes = {
    day: PropTypes.string,
    time: PropTypes.number,
    name: PropTypes.string,
    phone: PropTypes.string,
    onSave: PropTypes.func,
    onCancel: PropTypes.func
}

export default SchedulingForm;