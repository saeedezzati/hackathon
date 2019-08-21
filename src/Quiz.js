import React from 'react';
import './Quiz.css';

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quizList: [],
      numQ: 0,
      correctAnswer: 0,
      chosenAnswer: 0
    }
  }
  
  componentDidMount() {
    fetch('https://api.sheety.co/b9cf60de-f5ae-4e5c-bdd3-c0578a177025')
      .then(response => response.json())
      .then(data => {
        const randQ = Math.floor(Math.random() * data.length);
        this.setState({ quizList: data, numQ: randQ, correctAnswer: data[randQ].correctAnswer })});
  }

  chooseAnswer = chosenAnswer => () => {
    this.setState({chosenAnswer: chosenAnswer});
  }

  render() {
    const { quizList } = this.state;
    const { numQ } = this.state;
    const { correctAnswer } = this.state;
    const { chosenAnswer } = this.state;
    

    return (
      <div className="Quiz">
        {quizList.length > 0 && 
          <React.Fragment>
            <h1>Let's learn more about {quizList[numQ].name}</h1>
            <div className = "Quiz-question" >{quizList[numQ].question}</div>
            <div className = "Quiz-answers">
              <div className = { chosenAnswer === 1 && chosenAnswer === correctAnswer ? 'Quiz-button correct' : ( chosenAnswer === 1 ? 'Quiz-button wrong' : 'Quiz-button')} onClick={this.chooseAnswer(1)}>
                {quizList[numQ].answer1}
              </div>
              <div className = { chosenAnswer === 2 && chosenAnswer === correctAnswer ? 'Quiz-button correct' : ( chosenAnswer === 2 ? 'Quiz-button wrong' : 'Quiz-button')} onClick={this.chooseAnswer(2)}>
                {quizList[numQ].answer2}
              </div>
              <div className = { chosenAnswer === 3 && chosenAnswer === correctAnswer ? 'Quiz-button correct' : ( chosenAnswer === 3 ? 'Quiz-button wrong' : 'Quiz-button')} onClick={this.chooseAnswer(3)}>
                {quizList[numQ].answer3}
              </div>
              <div className = { chosenAnswer === 4 && chosenAnswer === correctAnswer ? 'Quiz-button correct' : ( chosenAnswer === 4 ? 'Quiz-button wrong' : 'Quiz-button')} onClick={this.chooseAnswer(4)}>
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
