import React from 'react';
import useAxios from "./hooks/useAxios";
import './App.css';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      womenPlayers: [{
        name: "",
        country: "",
        searches: 0,
        id: 0
      }]
    }
    this.response= useAxios('http://localhost:5000/api/players')
  }

  componentDidMount() {
    this.setState(this.state.womenPlayers, ...this.response)
  }
  render() {
    return (
      <div>
        {this.state.womenPlayers.map(womanPlayer =>
          <WomenPlayersComponent key={womanPlayer.id} props={womanPlayer} />
        )}
      </div>
    )
  }
  
}

export default App;


function WomenPlayersComponent(props) {
  const {name, searches, country} = props
  return (
    <div>
      <p>Name: {name}</p>
      <p>Country: {country}</p>
      <p>Number Of Searches: {searches}</p>
    </div>
  )
}