import React from 'react';
import './Detail.css';

class Detail extends React.Component {
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
      <div className="Detail">
        <header className="Detail-header">
          Detail
        </header>
      </div>
    );
  }
}

export default Detail;
