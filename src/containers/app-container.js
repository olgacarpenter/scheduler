import { connect } from 'react-redux';
import { cancelApptForm, openApptForm, saveAppointment, editScheduling } from '../actions';
import Scheduler from './../components/Scheduler';

const mapStateToProps = (state) => {
  return {
    isScheduling: state.isScheduling,
    scheduling: state.scheduling,
    schedule: state.schedule,
    fromTime: state.fromTime,
    toTime: state.toTime
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      toggleForm: () => {
          dispatch(cancelApptForm())
      },
      handleHourClick: (day,time,name,phone) => {
          dispatch(openApptForm(day,time,name,phone))
      },
      handleInputChange: (event) => {
          dispatch(editScheduling(event));
      },
      dispatch
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Scheduler);

export default App;