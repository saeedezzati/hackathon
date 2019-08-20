import React from 'react';
import './App.css';
import People from './People';
import Dogs from './Dogs';
import Groups from './Groups';
import Events from './Events';
import Topics from './Topics';
import Snacks from './Snacks';
import Detail from './Detail';

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
          <People handleClickSection={this.handleClickSection}/>
        }
        {section === "dogs" &&
          <Dogs handleClickSection={this.handleClickSection}/>
        }
        {section === "groups" &&
          <Groups handleClickSection={this.handleClickSection}/>
        }
        {section === "events" &&
          <Events handleClickSection={this.handleClickSection}/>
        }
        {section === "topics" &&
          <Topics handleClickSection={this.handleClickSection}/>
        }
        {section === "snacks" &&
          <Snacks handleClickSection={this.handleClickSection}/>
        }
        {section === "detail" &&
          <Detail handleClickSection={this.handleClickSection}/>
        }
        {section==="categories" && 
          <header className="App-header">
            <div className="Title">Welcome Home, A-Listers!</div>
            <div className="Subtitle">What are you looking for today?</div>
            <div className="Sections">
              <div className="Section" onClick={this.handleClickSection("people")}>
                <span aria-label='people' role='img'>
                  💁🏽‍♀️
                </span>
                People
              </div>
              <div className="Section" onClick={this.handleClickSection("dogs")}>
                <span aria-label='dogs' role='img'>
                  🐶
              </span>
                Dogs
              </div>
              <div className="Section" onClick={this.handleClickSection("groups")}>
                <span aria-label='groups' role='img'>
                  🤝
              </span>
                Groups
              </div>
              <div className="Section" onClick={this.handleClickSection("events")}>
                <span aria-label='events' role='img'>
                  📆️
              </span>
                Events
              </div>
              <div className="Section" onClick={this.handleClickSection("topics")}>
                <span aria-label='topics' role='img'>
                  💡
                </span>
                Topics
              </div>
              <div className="Section" onClick={this.handleClickSection("snacks")}>
                <span aria-label='snacks' role='img'>
                  🍿
              </span>
                Snack Request
              </div>
            </div>
          </header>
        }
      </div>
    );
  }
}

export default App;
