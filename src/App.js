import React, { Component } from 'react';
import axios from 'axios';

import SearchTab from './component/SearchTab';
import ArtistProfile from './component/ArtistProfile';
import ArtistEvents from './component/ArtistEvents';

import './App.css';

const API_URL = 'https://rest.bandsintown.com/artists/';
const API_ID = '4c2ca93351c8e74da4ed8d7f2c6ebac5';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      artistData: null,
      input: '',
      events: []
    }
  }

  setRef = (ref) => {
    this.ref = ref;
  };

  onChange = () => {
    this.setState({
      input: this.ref.value
    });
  };

  getArtist = (e) => {
    const { input } = this.state;
    e.preventDefault();
    axios.get(`${API_URL}${input.trim()}?app_id=${API_ID}`)
      .then(res => this.setState({
        artistData: !res.data.error ? res.data : null
      }));
    axios.get(`${API_URL}${input.trim()}/events?app_id=${API_ID}`)
      .then(
        res => this.setState({
          events: Array.isArray(res.data) ? res.data : []
        })
      )
  };

  render() {
    const { artistData, events, input } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1>Artist Gallery</h1>
          <SearchTab value={input} onChange={this.onChange} setRef={this.setRef} getArtist={this.getArtist} />
          {
            artistData ?
              <div className="artist">
                <ArtistProfile artistData={artistData} />
                {  events.length > 0 ? <ArtistEvents events={events} /> :
                  <div className="no-events"> No Upcoming events </div>  }
              </div> : <div >No Artist</div>
          }
        </header>
      </div>
    );
  }
}

export default App;
