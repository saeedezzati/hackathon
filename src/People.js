import React from 'react';
import './People.css';

class People extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
  }

  
  render() {
    const { handleClickSection } = this.props;
    console.log("props", this.props);
    return (
      <div className="People">
            People
            <button onClick={handleClickSection("detail")}>Details</button>
            <button onClick={handleClickSection("categories")}>back</button>
      </div>
    );
  }
}

export default People;
