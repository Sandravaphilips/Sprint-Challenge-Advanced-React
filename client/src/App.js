import React from 'react';
import useAxios from "./hooks/useAxios";
import './App.css';

class App extends React.Component {
  const reponse = useAxios('http://localhost:5000/api/players')
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
  }

  // this.setState()
  render() {
    return (
      <div>

      </div>
    )
  }
  
}

export default App;
