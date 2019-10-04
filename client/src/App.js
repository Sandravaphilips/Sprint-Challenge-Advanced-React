import React from 'react';
// import useAxios from "./hooks/useLocalStorage";
import './App.css';
import axios from "axios";
import Navbar from "./Navbar";

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      womenPlayers: [{
        name: "",
        country: "",
        searches: 0,
        id: null
      }]
    }
    
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
    .then(response => {
      this.setState({
        womenPlayers: [ ...response.data]
      })
    })
  }
  render() {
    return (
      <div className='App'>
        <Navbar />
        {this.state.womenPlayers.map(womanPlayer =>
          <WomenPlayersComponent key={womanPlayer.id} womanPlayer={womanPlayer} />
        )}
      </div>
    )
  }
  
}

export default App;


function WomenPlayersComponent({womanPlayer}) {
  const {name, searches, country} = womanPlayer
  return (
    <div>
      <p>Name: {name}</p>
      <p>Country: {country}</p>
      <p>Number Of Searches: {searches}</p>
    </div>
  )
}