import React from 'react';
import './Snacks.css';

class Snacks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      snack: ""
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="Snacks">
        <div className="Search-label">
          What's missing from the kitchen?
        </div>

        <input
          autofocus="true"
          placeholder="Kombucha, Protein Bars, Ice Cream,..."
          className="Search-box"
          onChange={e => this.setState({ snack: e.target.value })}
        />
      </div>
    );
  }
}

export default Snacks;
