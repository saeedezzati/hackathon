import React from 'react';
import './Quiz.css';

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quizList: [],
      numQ: 0
    }
  }
  
  componentDidMount() {
    fetch('https://api.sheety.co/b9cf60de-f5ae-4e5c-bdd3-c0578a177025')
      .then(response => response.json())
      .then(data => this.setState({ quizList: data, numQ: Math.floor(Math.random() * data.length)}));
  }

  render() {
    const { quizList } = this.state;
    const { numQ } = this.state;

    return (
      <div className="Quiz">
        {quizList.length > 0 && 
          <React.Fragment>
            <h1>Let's learn more about {quizList[numQ].name}</h1>
            <div className = "Quiz-question">{quizList[numQ].question}</div>
            <div className = "Quiz-answers">
              <div className = "Quiz-button">
                {quizList[numQ].answer1}
              </div>
              <div className = "Quiz-button">
                {quizList[numQ].answer2}
              </div>
              <div className = "Quiz-button">
                {quizList[numQ].answer3}
              </div>
              <div className = "Quiz-button">
                {quizList[numQ].answer4}
              </div>
            </div>
          </React.Fragment>
        }
      </div>
    );
  }
}

export default Quiz;
