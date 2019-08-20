import React from 'react';
import './Snacks.css';

class Snacks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
  }
  handleClickSnacks = () => {
    this.setState({ listPage: true })
  }
  
  render() {
    return (
      <div className="Snacks">
        <header className="Snacks-header">
            Snacks
        </header>
      </div>
    );
  }
}

export default Snacks;
