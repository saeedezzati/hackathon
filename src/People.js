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
  handleClickPeople = () => {
    this.setState({ listPage: true })
  }
  
  render() {
    const { handleClickSection } = this.props;
    return (
      <div className="People">
        <header className="People-header">
            People
            <button onClick={handleClickSection("categories")}>back</button>
        </header>
      </div>
    );
  }
}

export default People;
