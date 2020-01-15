import React, {Component} from 'react';
import axios from 'axios';
import Card from './components/Card'
import './App.css';

class App extends Component {
  
  state = {
      gitInfoPrime: [],
      gitInfoFollow: []
    }
  
  componentDidMount() {
    axios.get('https://api.github.com/users/lance-smith-acc')
    .then(res => {
      this.setState({
        gitInfoPrime: res.data, 
      })
    })
    .catch(err => {console.log(err)})

    axios.get('https://api.github.com/users/lance-smith-acc/followers')
    .then(res => {
      this.setState({
        gitInfoFollow: res.data, 
      })
      console.log(res.data)
      console.log(this.state.gitInfoFollow[1].login)
    })
    .catch(err => {console.log(err)})

  };
  
  render () {
    return (
      <div className="App">
        <div>
            <h1>{this.state.gitInfoPrime.name}</h1>
            <img src={this.state.gitInfoPrime.avatar_url} />
            <p>Location: {this.state.gitInfoPrime.location}</p>
            <h3>Bio:</h3>
            <p>{this.state.gitInfoPrime.bio}</p>
        </div>
        <div>
          {this.state.gitInfoFollow.map(i => (
            <Card name={i.login} avatar_url={i.avatar_url}/>
          ))}
        </div>
        
      </div>
    );
  }
}

export default App;
