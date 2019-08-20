import React from 'react';
import './Groups.css';

class Groups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
  }
  handleClickGroups = () => {
    this.setState({ listPage: true })
  }
  
  render() {
    return (
      <div className="Groups">
        <header className="Groups-header">
            Groups
        </header>
      </div>
    );
  }
}

export default Groups;
