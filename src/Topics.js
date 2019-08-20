import React from 'react';
import './Topics.css';

class Topics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
  }
  handleClickTopics = () => {
    this.setState({ listPage: true })
  }
  
  render() {
    return (
      <div className="Topics">
        <header className="Topics-header">
            Topics
        </header>
      </div>
    );
  }
}

export default Topics;
