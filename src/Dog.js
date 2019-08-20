import React from 'react';
import './Dog.css';

class Dog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
  }
  handleClickList = () => {
    this.setState({ listPage: true })
  }

  render() {
    return (
      <div className="Dog">
        <header className="Dog-header">
          <h1>Dogs</h1>
          <div className = "Dog-buttons">
            <button>Sign up to walk</button>
            <button>Add a new Doggo</button>
        </div>
        </header>
      </div>
    );
  }
}

export default Dog;