import React, {Component} from 'react';
import Results from '../components/Results';
import Winrate from '../components/Winrate';

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

        <h1>What's my winrate?</h1>

        <form name='form' onSubmit={this.handleSubmit}>
          <input 
          id='userinput' 
          type="text" 
          placeholder="imaqtpie" 
          onChange={this.handleChange}
          />
          <button type='submit' value='submit'>Submit</button>
        </form>

        {
          this.state.isSubmitted && 
          <Results>
            <Winrate inputName={this.state.name} />
          </Results>
        }
        
      </React.Fragment>  
      );
  }
};