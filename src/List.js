import React from 'react';
import './List.css';

class List extends React.Component {
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
      <div className="List">
        <header className="List-header">
            List
        </header>
      </div>
    );
  }
}

export default List;
