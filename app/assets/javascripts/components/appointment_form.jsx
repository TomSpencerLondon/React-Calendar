class AppointmentForm extends React.Component {  
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    }
  handleChange(e) {
    console.log("This is e:", e);
    var name = e.target.name;
    obj = {};
    obj[name] = e.target.value;
      this.props.onUserInput(obj);
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.onFormSubmit()
  }
  render() {
    return (
      <div>
        <h2>Make a new appointment</h2>
        <form onSubmit={this.handleSubmit} >
          <input name='title' placeholder='Appointment Title'
            value={this.props.title}
            onChange={this.handleChange} />
          <input name='appt_time' placeholder='Date and Time'
            value={this.props.appt_time}
            onChange={this.handleChange}  />
          <DateTime />
          <input type='submit' value='Make Appointment' />
        </form>        
      </div>
    )
  }
};