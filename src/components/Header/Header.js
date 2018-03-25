import React from 'react';
import PropTypes from 'prop-types';
import Search from '../Search/Search'

class Header extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
  };

  static defaultProps = {
    onSubmit: () => {},
    title: 'My Default Header'
  };

  constructor(props) {
    super(props);

    this.state = {
      searchVisible: false
    }
  }

  // toggle visibility when run on the state
  showSearch() {
    this.setState({
      searchVisible: !this.state.searchVisible
    })
  }

  render() {
    // Classes to add to the <input /> element
    let searchInputClasses = ["searchInput"];

    // Update the class array if the state is visible
    if (this.state.searchVisible) {
      searchInputClasses.push("active");
    }

    return (
      <div className="header">
        <div className="menuIcon">
          <div className="dashTop"></div>
          <div className="dashBottom"></div>
          <div className="circle"></div>
        </div>

        <span className="title">
          {this.props.title}
        </span>

        <Search
          searchVisible={this.state.searchVisible}
          onSubmit={this.props.onSubmit} />

        {/* Adding an onClick handler to call the showSearch button */}
        <div
          onClick={this.showSearch.bind(this)}
          className="fa fa-search searchIcon"></div>
      </div>
    )
  }
}

export default Header