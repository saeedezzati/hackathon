import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
import Detail from './Detail';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detailPage: false,
      listPage: false
    }
  }

  componentDidMount() {
  }
  handleClickList = () => {
    this.setState({ listPage: true })
  }
  handleClickDetail = () => {
    this.setState({ detailPage: true })
  }
  render() {
    const { detailPage, listPage } = this.state;
    return (
      <div className="App">
        {detailPage &&
          <Detail />
        }
        {listPage &&
          <List />
        }
        {!listPage && !detailPage &&
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <button onClick={this.handleClickList}>
              List
            </button>
            <button onClick={this.handleClickDetail}>
              Detail
            </button>
          </header>
        }
      </div>
    );
  }
}

export default App;
