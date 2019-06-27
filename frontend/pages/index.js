import React, {Component} from 'react';
import ReactSVG from 'react-svg';
import Results from '../components/Results';
import '../css/style.css';

export default class Landing extends Component {

  state = {
    isSubmitted: false,
    name: ''
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }
  
  handleSubmit(event) {
    event.preventDefault();
    this.setState(
      {isSubmitted: true});
    }
    
    handleChange = this.handleChange.bind(this);
    handleSubmit = this.handleSubmit.bind(this);

    render(){
      return (
        <React.Fragment>

          <h1 className='header'>What's my LoL winrate?</h1>

          

          <div className='form-container' style={this.state.isSubmitted ? {display: 'none'} : {}}>
            
            <form className='form' name='form' onSubmit={this.handleSubmit}>
              <span className='form-line'><input 
              id='userinput' 
              type="text" 
              placeholder="imaqtpie"
              onChange={this.handleChange}
              />
              </span>
              <button className='submit' type='submit' value='submit'>Submit</button>
            </form>
            
          </div>

          {
            this.state.isSubmitted && 
            <React.Fragment>
              <button className='back-button' type='button' onClick={ () => {this.setState({isSubmitted: false})}}>&#8592;</button>
              <Results inputName={this.state.name} />
            </React.Fragment>
            
          }
        </React.Fragment>  
      );
  }
};