import React from 'react';
import './Categories.css';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
  }

  render() {
    const { handleClickSection } = this.props;
    return (
      <div className="Categories">
        <div className="Title">Welcome Home, A-Listers!</div>
        <div className="Subtitle">What are you looking for today?</div>
        <div className="Sections">
          <div className="Section" onClick={handleClickSection("people")}>
            <span aria-label='people' role='img'>
              💁🏽‍♀️
            </span>
            People
          </div>
          <div className="Section" onClick={handleClickSection("dogs")}>
            <span aria-label='dogs' role='img'>
              🐶
            </span>
            Dogs
          </div>
          <div className="Section" onClick={handleClickSection("groups")}>
            <span aria-label='groups' role='img'>
              🤝
            </span>
            Groups
          </div>
          <div className="Section" onClick={handleClickSection("events")}>
            <span aria-label='events' role='img'>
              📆️
            </span>
            Events
          </div>
          <div className="Section" onClick={handleClickSection("quiz")}>
            <span aria-label='quiz' role='img'>
              💡
            </span>
            Quiz
          </div>
          <div className="Section" onClick={handleClickSection("snacks")}>
            <span aria-label='snacks' role='img'>
              🍿
            </span>
            Snack Request
          </div>
        </div>
      </div>
    );
  }
}

export default Categories;
