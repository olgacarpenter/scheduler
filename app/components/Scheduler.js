import React from 'react';
import WeekSchedule from './WeekSchedule';
import SchedulingForm from './SchedulingForm';
import {Modal,ModalHeader,ModalBody,ModalFooter} from 'reactstrap';
import {convertTime} from './../util/functions';
import { saveAppt } from '../actions';

require('./../styles/components/Scheduler.scss');

export default class Scheduler extends React.Component {
    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(event) {
        event.preventDefault();
        const data = this.props.scheduling;
        this.props.dispatch(saveAppt(data.day,data.time,data.name,data.phone));
    }

    render() {
        const scheduling = this.props.scheduling;
        const time = this.props.scheduling.time ? convertTime(this.props.scheduling.time,true) : null ;
        const form = (
            <Modal isOpen={this.props.isScheduling} toggle={this.props.toggleForm} >
                <ModalHeader>Scheduling for {this.props.scheduling.day} @ {time}</ModalHeader>
                <ModalBody>
                    <SchedulingForm 
                        day={scheduling.day} 
                        time={scheduling.time} 
                        name={scheduling.name} 
                        phone={scheduling.phone}
                        onChange={this.props.handleInputChange}
                        onSave={this.handleFormSubmit} 
                        onCancel={this.props.toggleForm}
                    />
                </ModalBody>
            </Modal>
        );
        return (
            <div>
                {form}
                <header>
                    <div className="container text-center">
                        Scheduler
                    </div>
                </header>
                <main>
                    <div className="container">
                        <WeekSchedule 
                            fromTime={this.props.fromTime} 
                            toTime={this.props.toTime} 
                            schedule={this.props.schedule} 
                            onClick={this.props.handleHourClick} 
                        />
                    </div>
                </main>
            </div>
        );
    }
}