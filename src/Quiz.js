import React from 'react';
import './Quiz.css';

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="Quiz">
        <h1>Let's learn more about Meghan</h1>
        <div className = "Quiz-question">Does Meghan have a dog?</div>
        <div className = "Quiz-answers">
          <div className = "Quiz-button">
            Yes! 💜
          </div>
          <div className = "Quiz-button">
            No ☹️
          </div>
        </div>
      </div>
    );
  }
}

export default Quiz;
