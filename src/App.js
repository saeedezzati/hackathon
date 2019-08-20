import React from 'react';
import axios from "axios";
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
      data: null
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

  handleClickSection = section => () => {
    console.log("section", section);
    this.setState({ section })
  }
  render() {
    const { section } = this.state;
    return (
      <div className="App">
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
        {section === "topics" &&
          <Topics handleClickSection={this.handleClickSection} />
        }
        {section === "snacks" &&
          <Snacks handleClickSection={this.handleClickSection} />
        }
        {section === "detail" &&
          <Detail handleClickSection={this.handleClickSection} detailObj={this.state.data.data[0]}/>
        }
        {section === "categories" &&
          <Categories handleClickSection={this.handleClickSection} />
        }
          
      </div>
    );
  }
}

export default App;
