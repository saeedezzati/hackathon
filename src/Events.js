import React from 'react';
import './Events.css';

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
  }
  handleClickEvents = () => {
    this.setState({ listPage: true })
  }
  
  render() {
    return (
      <div className="Events">
        <header className="Events-header">
            Events
        </header>
      </div>
    );
  }
}

export default Events;
