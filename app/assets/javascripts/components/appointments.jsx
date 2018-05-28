class Appointments extends React.Component {
constructor(props){
  super(props);
  this.state = {
      appointments: this.props.appointments,
      title: 'Team standup meeting',
      appt_time: '25 January 2016 9am'
    }
  this.handleUserInput = this.handleUserInput.bind(this);
  this.handleFormSubmit = this.handleFormSubmit.bind(this);
  this.addNewAppointment = this.addNewAppointment.bind(this);
  }

  handleUserInput(obj) {
    this.setState(obj);
  }

  handleFormSubmit() {
    var appointment = {title: this.state.title, appt_time: this.state.appt_time};
    console.log(appointment);
    $.post('/appointments', 
      {appointment: appointment}) 
      .done(function(data){
        console.log("This is the data: ", data);
        this.addNewAppointment(data);
      }.bind(this));
    } 

    onChange(event){
      var newArray = this.state.arr.slice();    
      newArray.push("new value");   
      this.setState({arr:newArray})
  }
  
  
  addNewAppointment(appointment) {
    var appointments = this.state.appointments.concat(appointment);
    this.setState({ appointments: appointments.sort(function(a,b){
      return new Date(a.appt_time) - new Date(b.appt_time);
    }) 
  });
  }

  render() {
    return (
      <div>
        <AppointmentForm title={this.state.title}
          appt_time={this.state.appt_time}
          onUserInput={this.handleUserInput} 
          onFormSubmit={this.handleFormSubmit} />
        <AppointmentsList appointments={this.state.appointments} />
      </div>
    )
  }
};