import React from 'react';
import './Quiz.css';

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quizList: [],
      numQ: 0,
      correctAnswer: 0,
      chosenAnswer: 0,
      employeeList: [],
      randomAnswers: [],
      employeeNumber: 0
    }
  }
  
  async componentDidMount() {
    await fetch('https://api.sheety.co/3766fdfb-2ab0-4b9b-b56f-e484da8ca106')
    .then(response => response.json())
    .then(data => {
      this.setState({ employeeList: data })
    });

    await fetch('https://api.sheety.co/65a4c11b-dab7-40ae-8ee7-58aeb2240f5d')
      .then(response => response.json())
      .then(data => {
        this.setState({quizList: data});
        this.resetQuiz();
  })};

  resetQuiz = () => {
    const numQ = Math.floor(Math.random() * this.state.quizList.length);
    const correctA = Math.floor(Math.random() * 4);

    // Pick a number, if it corresponds to an answer, and doesn't already exist in array, add the index to randomEmployeeIndexes, and the answer 
    // to the randomized answers
    var randomEmployeeIndexes = [];
        var randomAnswers = [];
        while (randomEmployeeIndexes.length < 4) {
          var randomAnswer = this.returnRandomAnswer(numQ, this.state.quizList);
          if (randomAnswer && randomAnswers.indexOf(randomAnswer.employeeAnswer) === -1) { // ie is not blank and answer isn't already in this set
            randomEmployeeIndexes.push(randomAnswer.randomEmployeeNumber);
            randomAnswers.push(randomAnswer.employeeAnswer);
          }
        }
    const employeeNumber = randomEmployeeIndexes[correctA];
    this.setState({ numQ: numQ, correctAnswer: correctA + 1, randomAnswers: randomAnswers, employeeNumber: employeeNumber, chosenAnswer: 0 });
  }

  returnRandomAnswer = (numQ, data) => {
    // Pick a random employee
    var randomEmployeeNumber = Math.floor(Math.random() * Object.keys(data[0]).length);
    // Return their answer
    var employeeAnswer = data[numQ]["e"+randomEmployeeNumber];
    if (employeeAnswer == null) {
      return false;
    } else {
      return { 'randomEmployeeNumber': randomEmployeeNumber, 'employeeAnswer': employeeAnswer };
    }

  };

  chooseAnswer = chosenAnswer => () => {
    this.setState({chosenAnswer: chosenAnswer});
  }

  render() {
    const { quizList } = this.state;
    const { numQ } = this.state;
    const { correctAnswer } = this.state;
    const { chosenAnswer } = this.state;
    const { employeeList } = this.state;
    const { randomAnswers } = this.state;
    const { employeeNumber } = this.state;
    const correctFeedback = [
      'Lucky guess!',
      "Let's see if you get the next one..."
    ];
    const wrongFeedback = [
      'You only had one job! - Gabby',
      'Does friendship mean anything to you? - Gabby'
    ];
    
    console.log(this.state);

    return (
      <div className="Quiz">
        {quizList.length > 0 && 
          <React.Fragment>
            <img className="Quiz-image" src={employeeList[employeeNumber].image} alt="employee"></img>
            <h1>Let's learn more about {employeeList[employeeNumber].name}</h1>
            <div className = "Quiz-question" >{quizList[numQ].questionTextPart1 + employeeList[employeeNumber].name.split(' ')[0] + quizList[numQ].questionTextPart2 }</div>
            <div className = "Quiz-answers">
              <div className = { chosenAnswer === 1 && chosenAnswer === correctAnswer ? 'Quiz-button correct' : ( chosenAnswer === 1 ? 'Quiz-button wrong' : 'Quiz-button')} onClick={this.chooseAnswer(1)}>
                {randomAnswers[0]}
              </div>
              <div className = { chosenAnswer === 2 && chosenAnswer === correctAnswer ? 'Quiz-button correct' : ( chosenAnswer === 2 ? 'Quiz-button wrong' : 'Quiz-button')} onClick={this.chooseAnswer(2)}>
                {randomAnswers[1]}
              </div>
              <div className = { chosenAnswer === 3 && chosenAnswer === correctAnswer ? 'Quiz-button correct' : ( chosenAnswer === 3 ? 'Quiz-button wrong' : 'Quiz-button')} onClick={this.chooseAnswer(3)}>
                {randomAnswers[2]}
              </div>
              <div className = { chosenAnswer === 4 && chosenAnswer === correctAnswer ? 'Quiz-button correct' : ( chosenAnswer === 4 ? 'Quiz-button wrong' : 'Quiz-button')} onClick={this.chooseAnswer(4)}>
                {randomAnswers[3]}
              </div>
            </div>
            <div className = {chosenAnswer !== 0 && chosenAnswer === correctAnswer ? 'Quiz-feedback correct' : ( chosenAnswer !== 0 ? 'Quiz-feedback wrong' : 'Quiz-feedback') }>{chosenAnswer !== 0 && chosenAnswer === correctAnswer ? correctFeedback[Math.floor(Math.random() * correctFeedback.length)] : ( chosenAnswer !== 0 ? wrongFeedback[Math.floor(Math.random() * wrongFeedback.length)] : '') }</div>
            <div className = {chosenAnswer !== 0 && chosenAnswer === correctAnswer ? 'Quiz-next active' : 'Quiz-next' } onClick={this.resetQuiz}>Next</div>
          </React.Fragment>
        }
      </div>
    );
  }
}

export default Quiz;
