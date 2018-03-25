import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Content from '../Content/Content'

// An async request
const data = require('../Content/data.json');
const fetchEvents = () => Promise.resolve(data)
                      .then(json => json.slice(0, 6));

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {refreshing: false}
  }

  // Bound to the refresh button
  refresh() {
    this.setState({refreshing: true})
  }

  // Callback from the `Content` component
  onComponentRefresh() {
    this.setState({refreshing: false});
  }

  render() {
    const {refreshing} = this.state;
    return (
      <div className='notificationsFrame'>
        <div className='panel'>

          {/* refreshing is the component's state */}
          <Content
            onComponentRefresh={this.onComponentRefresh.bind(this)}
            requestRefresh={refreshing}
            fetchData={fetchEvents} />

          {/* A container for styling 
          <Footer>
            <button onClick={this.refresh.bind(this)}>
              <i className="fa fa-refresh" />
              Refresh
            </button>
          </Footer>*/}

        </div>
      </div>
    )
  }
}

export default App;
