import React from 'react';
import axios from "axios";
import './App.css';
import People from './People';
import Dogs from './Dogs';
import Groups from './Groups';
import Events from './Events';
import Quiz from './Quiz';
import Snacks from './Snacks';
import Detail from './Detail';
import Categories from './Categories';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      section: "categories",
      data: ""
    }
  }

  async componentDidMount() {
    const db = axios.create({
      baseURL: "https://api.sheety.co/de9ad1a5-47a2-422c-8423-c8ed4bbb4c82",
      responseType: "json"
    });
    db.get("/").then((response) => {
      this.setState({
        data: response
      });
    });
  }
  handleClickSection = (section, data = "") => () => {
    this.setState({ section })
  }
  render() {
    const { section, data } = this.state;
    return (
      <div className="App">
        <div className="App-header-wrapper">
          <div className="App-header">
            <div className="Home-link" onClick={() => this.setState({ section: "categories" })}>Home</div>
          </div>
        </div>
        {section === "people" &&
          <People handleClickSection={this.handleClickSection} peopleObj={this.state.data}/>
        }
        {section === "dogs" &&
          <Dogs handleClickSection={this.handleClickSection} />
        }
        {section === "dogs" &&
          <Dogs handleClickSection={this.handleClickSection}/>
        }
        {section === "groups" &&
          <Groups handleClickSection={this.handleClickSection} />
        }
        {section === "events" &&
          <Events handleClickSection={this.handleClickSection} />
        }
        {section === "quiz" &&
          <Quiz handleClickSection={this.handleClickSection} />
        }
        {section === "snacks" &&
          <Snacks handleClickSection={this.handleClickSection} />
        }
        {section === "detail" &&
          <Detail handleClickSection={this.handleClickSection} detailObj={data} />
        }
        {section === "categories" &&
          <Categories handleClickSection={this.handleClickSection} />
        }

      </div>
    );
  }
}

export default App;
