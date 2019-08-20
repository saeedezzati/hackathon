import React from 'react';
import './App.css';
import People from './People';
import Dogs from './Dogs';
import Groups from './Groups';
import Events from './Events';
import Topics from './Topics';
import Snacks from './Snacks';
import Detail from './Detail';
import Categories from './Categories';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      section: "categories",
    }
  }

  componentDidMount() {
  }
  handleClickSection = section => () => {
    this.setState({ section })
  }
  render() {
    const { section } = this.state;
    return (
      <div className="App">
        {section === "people" &&
          <People handleClickSection={this.handleClickSection} />
        }
        {section === "dogs" &&
          <Dogs handleClickSection={this.handleClickSection} />
        }
        {section === "groups" &&
          <Groups handleClickSection={this.handleClickSection} />
        }
        {section === "events" &&
          <Events handleClickSection={this.handleClickSection} />
        }
        {section === "topics" &&
          <Topics handleClickSection={this.handleClickSection} />
        }
        {section === "snacks" &&
          <Snacks handleClickSection={this.handleClickSection} />
        }
        {section === "detail" &&
          <Detail handleClickSection={this.handleClickSection} />
        }
        {section === "categories" &&
          <Categories handleClickSection={this.handleClickSection} />
        }
          
      </div>
    );
  }
}

export default App;
